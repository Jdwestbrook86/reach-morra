import {loadStdlib} from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
import { ask } from '@reach-sh/stdlib'
const stdlib = loadStdlib(process.env)

console.log('Setting up test accounts.')

const startingBalance = stdlib.parseCurrency(100)
const accDeployer = await stdlib.newTestAccount(startingBalance)
const playerAccounts = await stdlib.newTestAccounts(15, startingBalance)

console.log('Connecting accounts to contract.')
const ctcDeployer= accDeployer.contract(backend);
const playerCtcs = playerAccounts.map(player => player.contract(backend, ctcDeployer.getInfo()));

const eventHexToDec = (evt, idx) => parseInt(evt.what[idx]._hex, 16)

console.log('Deploying contract')
await stdlib.withDisconnect(() => Promise.all([
  ctcDeployer.p.Deployer({
    ready: stdlib.disconnect,
    maxPlayers: 15,
    lengthInBlocks: 2
  })
]))

//let phase
//await ctcProduct.apis.ProductAPI.investmentTimeout()
const readyEvent = await playerCtcs[0].events.PhaseChangeEvents.readyStart.next()
let maxPlayers = eventHexToDec(readyEvent, 0)
let endBlock = eventHexToDec(readyEvent, 1)

console.log(`MORRA MORRA MORRA`)
console.log(`Max Players:${maxPlayers} End Block:${endBlock}`)
// TODO: API calls
console.log('Players joining.')
for (const [i, ctc] of playerCtcs.entries()) {
  let acc = playerAccounts[i]
  console.log(`PLAYER ${i+1} JOINS THE GAME!!!`);
  await ctc.apis.Player.join();
  console.log(`Player ${i+1} joined!`)
}

console.log('Players submiting guesses.')
for (const [i, ctc] of playerCtcs.entries()) {
  let acc = playerAccounts[i]
  let fingers = Math.floor(Math.random() * 4 + 1)
  let guess = Math.floor(Math.random() * 74 + 1)
  console.log(`PLAYER ${i+1} SUBMITS THEIR GUESS!!!`);
  await ctc.apis.Player.getFingersAndGuess([fingers, guess]);
  console.log(`Player ${i+1} cast their lot! Fingers:${fingers} Guess:${guess}`)
}

console.log(`Let me just check some things.  DON'T LOOK BEHIND THE CURTAIN!!!!`);
for (const [i, ctc] of playerCtcs.entries()) {
  await ctc.apis.Player.checkWinner();
}

const winnersDeterminedEvent = await ctcDeployer.events.PhaseChangeEvents.winnersDetermined.next()
let totalWinners = eventHexToDec(winnersDeterminedEvent, 0)
let winningGuess = eventHexToDec(winnersDeterminedEvent, 1)

console.log(`Gee willikers! There were ${totalWinners} winners that guessed the winning number of ${winningGuess}!`)

console.log('Goodbye!')
