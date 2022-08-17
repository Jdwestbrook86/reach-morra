<template>
    <el-container>
        <el-form label-width="120px">
            <el-form-item label="Game ID" required>
                <el-input v-model="gameId" placeholder="Enter a game id..."/>
            </el-form-item>
            <el-form-item>
                <el-button :loading="loading" type="primary" @click="$emit('join', gameId)" :disabled="joined">Join</el-button>
            </el-form-item>
        </el-form>
    </el-container>
    <el-divider />
    <el-container v-if="joined">
        <el-form label-width="120px">
            <el-form-item label="Fingers">
                    <el-input-number
                        v-model="fingers"
                        :min="1"
                        :max="5"
                        controls-position="right"
                        size="large"
                    />
            </el-form-item>
            <el-form-item label="Guess">
                <el-input-number
                    v-model="guess"
                    :min="1"
                    controls-position="right"
                    size="large"
                />
            </el-form-item>
            <el-form-item>
                <el-button :loading="loading" type="primary" @click="$emit('submitGuess', [fingers, guess])" :disabled="guessSubmitted">Submit Guess</el-button>
            </el-form-item>
        </el-form>
    </el-container>
    <el-divider />
    <el-container v-if="joined">
        <el-form label-width="120px">
            <el-form-item label="Max Players">
                {{maxPlayers}}
            </el-form-item>
            <el-form-item label="Players">
                {{connectedPlayers}}
            </el-form-item>
            <el-form-item label="End Block">
                {{endBlock}}
            </el-form-item>
            <el-form-item label="Winning Number">
                {{winningNumber}}
            </el-form-item>
        </el-form>
    </el-container>
</template>

<script>
export default {
    props:{
        joined:false,
        guessSubmitted:false,
        loading:false,
        maxPlayers: 0,
        endBlock: 0,
        connectedPlayers: 0,
        totalWinners: 0,
        winningNumber: 0
    },
    emits:['join', 'submitGuess'],
    data(){
        return {
            fingers: 1,
            guess: 1,
            gameId: ''
        }
    }
}
</script>

<style>
</style>