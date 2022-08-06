<script setup lang="ts">
import { ref } from "vue"

const navTitles = [
    "Home",
    "Projects",
    "Contact"
]

const selectedLink = ref('Home')

function toggle (item: string){
    if(item==="●"){

    }
    else{
        selectedLink.value = item
        console.log(selectedLink.value)
    }
}
</script>

<template>
<div class="navtitles">
    <div class="individualTitles" v-for="item in navTitles" :key="item" @click="toggle(item)">
        <div class="alignitems" :key="item">
            <transition name="fade" mode="out-in">
                <div v-if="selectedLink===item" class="dot">●</div>
                <div v-else>{{item}}</div>
            </transition>
            </div>
    </div>
</div>    
</template>

<style scoped>
.navtitles{
    font-size: 16px;
    font-weight: 300;
}

.individualTitles{
    padding-bottom: 16px;
    cursor: pointer;
    user-select: none;
    width: 100px;
    height: 40px;
    line-height: 40px;
}

.alignitems{
    display: flex;
    align-items: center;
}

.dot {
    font-size: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>