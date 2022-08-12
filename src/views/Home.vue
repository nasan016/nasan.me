<script setup lang="ts">
import {ref, onMounted } from 'vue'
import { selectedLink } from '../components/linkTracker'

onMounted(() => {
    selectedLink.value = "Home"
})
</script>

<template>
    <div class="homeContent">
        <div>
            Hi, I'm Nathaniel Macapinlac
                <br>
            but most people call me Nathan. 
        </div>
            <br>
        <div>
            I am a student studying Computer 
                <br>
            Engineering and Computer Science at
                <br>
            NYU Tandon School of Engineering.
        </div>
            <br>
        <div>
            Apart from school and programming, I 
                <br>
            enjoy playing the piano, reading 
                <br>
            books, and playing videogames.
        </div>
    </div>
</template>

<style scoped>
.homeContent{
    line-height: 1.6;
    font-size: 15px;
}

@media only screen and (max-width: 800px) {
    .homeContent{
        font-size: 14px;
    }
}
</style>