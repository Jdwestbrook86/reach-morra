<template>
  <div>
    <el-row>
      <el-col>
        <b>ALGORAND TEST NET</b>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="6">
        <ConnectWallet
          :loading="wcLoading" 
          :connected="walletConnected"
          :address="address"
          @connectMyAlgo="connectWallet()"
          @connectPera="connectPera()"
          @disconnect="disconnect()"
        ></ConnectWallet>
      </el-col>
    </el-row>
    <el-row>
    <el-container>
      <el-header>
          <el-tabs v-model="activeTab" @tab-click="tabClick">
            <el-tab-pane disabled>
              <template #label>
                <span class="title">Morra</span>
              </template>
            </el-tab-pane >
            <el-tab-pane label="Setup" name="setup"></el-tab-pane>
            <el-tab-pane label="Game" name="game"></el-tab-pane>
          </el-tabs>
      </el-header>
      
      <el-main>
          <GameSetup v-if="activeTab == 'setup' && walletConnected" 
            :loading="setupLoading" 
            :contractInfo="ctcInfo" 
            @click="createGame">
          </GameSetup>
          <Game v-if="activeTab == 'game' && walletConnected" 
            :loading="gameLoading"
            :joined="joined"
            :gameId="ctcInfo"
            :maxPlayers="maxPlayers"
            :endBlock="endBlock"
            :connectedPlayers="connectedPlayers"
            :totalWinners="totalWinners"
            :winningNumber="winningNumber"
            @submitGuess="submitGuess"
            @join="joinGame" 
          ></Game>
      </el-main>
    </el-container>
    </el-row>
  </div>
</template>

<script>
import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
//import MyAlgoConnect from "@reach-sh/stdlib/ALGO_MyAlgoConnect";
import ConnectWallet from './components/WalletConnect.vue'
import Game from './components/Game.vue'
import GameSetup from './components/GameSetup.vue'
import { h } from 'vue'
import { ElMessage } from 'element-plus'
import * as backend from './reach/build/index.main.mjs'
const stdlib = loadStdlib("ALGO")

export default {
  name:'Morra',
  components: {
    Game,
    GameSetup,
    ConnectWallet
  },
  data () {
    return {
      activeTab:'setup',
      wcLoading:false,
      setupLoading:false,
      gameLoading:false,
      joined:false,
      walletConnected:false,
      account:null,
      address:'',
      ctcDeployer:null,
      ctcPlayer:null,
      ctcInfo:'',
      maxPlayers: 0,
      endBlock: 0,
      connectedPlayers: 0,
      allPlayersConnected: false,
      totalWinners: 0,
      winningNumber: 0,
      readyStartEvent: null,
      playersConnectedEvent: null,
      allPlayersConnectedEvent: null,
      winnersDeterminedEvent: null
    }
  },
  mounted(){
    stdlib.setWalletFallback(
      stdlib.walletFallback({ 
        providerEnv: 'TestNet', MyAlgoConnect 
    }))
  },
  methods: {
    connectWallet() {
        this.wcLoading = true
        stdlib.getDefaultAccount()
        .then((acc) =>{
            this.walletConnected = true
            this.account = acc
            this.address = this.account.networkAccount.addr
            this.ctcDeployer = this.account.contract(backend);
        })
        .catch((err) => {
            console.log(err)
            this.wcLoading = false
        })
        .finally(() => { 
            this.wcLoading = false
        })
    },
    disconnect(){
      this.walletConnected = false
      this.account = null
      stdlib.disconnect()
    },
    tabClick(tab, evt){
      this.activeTab = tab.name
    },
    createGame(arr) {

      console.log(arr)
      this.setupLoading = true
      this.ctcDeployer.getInfo().then((info) => {
        this.ctcInfo = info._hex
      })
      this.ctcDeployer.p.Deployer({
          ready: () => {
            this.setupLoading = false
            ElMessage({
              message: 'DApp deployed!',
              type: 'success',
            })
          },
          maxPlayers: arr[0],
          lengthInBlocks: arr[1]
      })
      .catch((err) => {
        console.log(err);
        this.setupLoading = false
      })
    },
    joinGame(info){
      this.ctcPlayer = this.account.contract(backend, info)
      this.ctcPlayer.apis.Player
      .join()
      .then((res) => {
        this.joined = true
        console.log(res)
        this.maxPlayers = this.parseHexToDec(res.W[0]._hex)
        //this.endBlock = this.parseHexToDec(arr.what[1]._hex)
      })
      .catch((err) => console.log(err))
    },
    async submitGuess(arr) {
      this.readyStartEvent = () => {
        this.ctcPlayer.events.PhaseChangeEvents.readyStart.next()
        .then((res) => {
          this.maxPlayers = this.parseHexToDec(res.what[0]._hex)
          this.endBlock = this.parseHexToDec(res.what[1]._hex)
        })
        .catch((err) => console.log(err))
      }
      this.readyStartEvent()

      this.playersConnectedEvent = () => {
        this.ctcPlayer.events.PhaseChangeEvents.playersConnected.next()
        .then((res) => {
          this.connectedPlayers = this.parseHexToDec(res.what[0]._hex)
          this.playersConnectedEvent()
        })
        .catch((err) => console.log(err))
      }
      this.playersConnectedEvent()

      this.allPlayersConnected = () => {
        this.ctcPlayer.events.PhaseChangeEvents.allPlayersConnected.next()
        .then((res) => {
          this.connectedPlayers = this.parseHexToDec(res.what[0]._hex)
          this.allPlayersConnected = true
        })
        .catch((err) => console.log(err))
      }

      this.winnersDeterminedEvent = () => {
        this.ctcPlayer.events.PhaseChangeEvents.winnersDetermined.next()
        .then((res) => {
          this.totalWinners = this.parseHexToDec(res.what[0]._hex)
          this.winningNumber = this.parseHexToDec(res.what[1]._hex)
        })
      }

      await this.ctcPlayer.apis.Player
      .getFingersAndGuess([arr[0], arr[1]])
      .catch((err) => console.log(err))
    },
    parseHexToDec(hex) {
      return parseInt(hex, 16)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  font-family: 'Brush Script MT', cursive;
  font-size: 4em;
  cursor: none;
}
.title li {
  font-size: 4em;
  cursor: none;
}
</style>
