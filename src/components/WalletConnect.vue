<template>
    <el-dropdown>
      <el-button :type="!connected ? 'warning' : 'success'">
        Connect
        <el-icon class="el-icon--right">
            <arrow-down />
        </el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-if="!connected">
            <el-image 
                :src="require('../assets/myalgo-full-logo.153fd5bec2f064c64d024896f43908bf.svg')" 
                @click="$emit('connectMyAlgo')"
            />
          </el-dropdown-item>
          <!-- <el-dropdown-item>
            <el-row
                @click="$emit('connectPera')"
            >
                <el-image 
                    :src="require('../assets/button-pera-connect.svg')" 
                    class="peraLogo"
                />
                <span class="walText">Pera Wallet</span>
            </el-row>
          </el-dropdown-item> -->
          <el-dropdown-item v-if="connected">
            <span class="walText" @click="$emit('disconnect')">Disconnect</span>
          </el-dropdown-item>
          <el-dropdown-item  v-if="connected" @click="copyAddress()">
            <span class="walText">{{addy()}}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
</template>

<script>
import { h } from 'vue'
import { ElMessage } from 'element-plus'
export default {
    emits: ['connectMyAlgo', 'connectPera', 'disconnect'],
    props: {
        loading: false, 
        connected: false,
        address: ''
    },
    methods:{
      addy(){
        return `${this.address.substring(0, 4)}...${this.address.slice(-4)}`
      },
      copyAddress(){
        navigator.clipboard.writeText(this.address)
            .then(() => {
                    ElMessage({
                        message: h('p', null, [
                        h('i', { style: 'color: teal' }, `${this.addy()}`),
                        h('span', null, ' copied entire address to clipboard...'),
                    ]),
                })
            })
            .catch((err) => console.error(err));
      }
    }
}
</script>

<style scoped>
    .containerCustDisconnected div {
        background-color: #E6A23C;
    }
    .walText {
        font-family: sans-serif;
        padding-left: 9px;
        display: flex;
        align-items: center;
    }
    .peraLogo {
        height: 32px;
        width: 32px;
        display:inline-block;
    }
    .dividerCust {
        margin: 5px;
        width: 95%;
    }
</style>