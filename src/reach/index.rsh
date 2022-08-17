'reach 0.1'

export const main = Reach.App(() => {
  /*
   * A user deleting their local state will harm themselves more than 
   * other users. If this is done they will not be able to redeem funds.  
   * It may however add inconvienience to other users by adding extra time
   * waiting for timeouts to occur.
   */
  setOptions({ untrustworthyMaps:true })

  const Deployer = Participant('Deployer', {
    ready: Fun([], Null),
    //Maximum number of players
    maxPlayers: UInt,
    //Used to determine end block
    lengthInBlocks: UInt
  })

  const Player = API('Player', { 
    //-----------------------fingers, guess
    join: Fun([], UInt),
    getFingersAndGuess: Fun([Tuple(UInt, UInt)], Null),
    checkWinner: Fun([], Null),
    timeout: Fun([], Null)
  })

  // See Dominant Assurance and Posthumous Events examples.
  const PC = Events('PhaseChangeEvents', {
    //---------max players, endTime
    readyStart: [UInt, UInt],
    //----------------Total connected players
    playersConnected: [UInt],
    //-------------------Total connected players
    allPlayersConnected: [UInt],
    //-----------------total winners, winning number
    winnersDetermined: [UInt, UInt]
  });

  init()

  const awaitPlayerApi = (apiFunc) => {
    const [[], k] = call(apiFunc)
    k(null)
  }

  Deployer.only(() => { const [maxPlayers, blockLength] = declassify([interact.maxPlayers, interact.lengthInBlocks]) })
  Deployer.publish(maxPlayers, blockLength)
    
  commit()
  
  Deployer.publish()
  const deadline = lastConsensusTime() + blockLength
  const playerGuesses = new Map(UInt)
  Deployer.interact.ready()
  
  PC.readyStart(maxPlayers, deadline)
  //Player.getMaxPlayersAndEndBlock()
  // Collect all players thrown fingers and sum guesses
  //       v- Variable declarations
  const [ stop, fingersSum, connectedPlayers, guessesSubmitted ] =
  //                v- Variable inital values
  parallelReduce([ false, 0, 0, 0 ])
    // The balance will increase by playerWager every time a user connects
    .invariant(balance() == 0)
    .while(!stop)
    .api_(
      Player.join,
      () => {
        check(playerGuesses[this] != null, 'You have already joined.')
        return [(k) => {
          k(maxPlayers)
          playerGuesses[this] = 0
          PC.playersConnected(connectedPlayers + 1)
          return [ false, fingersSum, connectedPlayers + 1, guessesSubmitted  ]
        }]
      }
    )
    .api_(
      Player.getFingersAndGuess,
      ([fingers, guess]) => {
        check(fingers >= 1 && fingers <= 5, 'Throw between 1 - 5 fingers.')
        check(guess > 0, 'Make a guess greater than 0.')
        // Not sure why these don't work
        //check(playerGuesses[this] == null, 'You need to join the game first.')
        //check(fromSome( playerGuesses[this], 0 ) > 0, 'You have already submitted a guess.')
        return [(k) => {
          k(null)
          playerGuesses[this] = guess
          return [ (guessesSubmitted + 1) == maxPlayers, fingersSum + fingers, connectedPlayers, guessesSubmitted + 1  ]
        }]
      }
    )
    .timeout(relativeTime(deadline), () => {
      awaitPlayerApi(Player.timeout)
      return [ true, fingersSum, connectedPlayers, guessesSubmitted ]
    })
    
  if ( connectedPlayers > 0) {
    // Notify front end that all players have connected. 
    PC.allPlayersConnected(connectedPlayers)

    const winners = new Map(Address)
    // Users check if they won
    const [playersLeftToCheck, totalWinners] =
    parallelReduce([connectedPlayers, 0])
      // The balance should not change
      .invariant( balance() == 0 )
      .while( playersLeftToCheck > 0 )
      .api_(
        Player.checkWinner,
        () => {
          check ( totalWinners <= connectedPlayers, "No." )
          check ( fromSome( playerGuesses[this], 0 ) > 0, "It doesn't look like you are playing this game." )
          return [ ( k ) => {
            k ( null )
            const winner = fromSome(playerGuesses[this], 0) == fingersSum
            const increment = winner ? 1 : 0

            if ( winner ) {
              winners[this] = this
            }

            delete playerGuesses[this]

            return [playersLeftToCheck - 1, totalWinners + increment]
          }]
      })
      .timeout(relativeTime(deadline), () => {
        awaitPlayerApi(Player.timeout)
        return [ playersLeftToCheck, totalWinners ]
      })
      
    PC.winnersDetermined(totalWinners, fingersSum)
  }
  
  commit()
  exit()
})