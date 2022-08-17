<template>
    <el-container>
        <el-form label-width="120px">
            <el-form-item label="Max Players">
                    <el-input-number
                        v-model="maxPlayers"
                        :min="2"
                        controls-position="right"
                        size="large"
                    />
            </el-form-item>
            <el-form-item label="Block Length">
                <el-input-number
                    v-model="blockLength"
                    :min="1"
                    controls-position="right"
                    size="large"
                />
            </el-form-item>
            <el-form-item>
                <el-popconfirm
                    confirm-button-text="Ok"
                    :icon="InfoFilled"
                    icon-color="#626AEF"
                    title="You will need to approve 4 transactions."
                    @confirm="$emit('click', [maxPlayers, blockLength])"
                >
                    <template #reference>
                        <el-button :loading="loading" type="primary">Create</el-button>
                    </template>
                </el-popconfirm>
            </el-form-item>
        </el-form>
    </el-container>
    <el-divider />
    <el-tag class="ml-2" type="info" v-if="contractInfo && !loading">
        Game ID: {{contractInfo}}
        <el-icon @click="copyId">
            <CopyDocument />
        </el-icon>
    </el-tag>
</template>

<script>
import { h } from 'vue'
import { ElMessage } from 'element-plus'

export default {
    emits:['click'],
    props:{
        contractInfo:'',
        loading:false
    },
    data(){
        return{
            maxPlayers:2,
            blockLength:10
        }
    },
    methods:{
        copyId(){
            navigator.clipboard.writeText(this.contractInfo)
            .then(() => {
                    ElMessage({
                        message: h('p', null, [
                        h('i', { style: 'color: teal' }, `${this.contractInfo}`),
                        h('span', null, ' copied to clipboard...'),
                    ]),
                })
            })
            .catch((err) => console.error(err));
        }
    }
}
</script>

<style>
</style>