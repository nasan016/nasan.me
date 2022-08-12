<script setup lang="ts">
import { ref } from "vue"
import { selectedLink } from "./linkTracker";

const navTitles = [
    "Home",
    "Projects",
    "Contact",
]

function toggle (item: string){
    if(item==="✿"){

    }
    else{
        selectedLink.value = item
        console.log(selectedLink.value)
    }
}
</script>

<template>
<div class="navtitles">
    <div class="individualTitles" v-for="item in navTitles" :key="item">
        <div class="alignitems" :key="item">
            <transition name="fade" mode="out-in">
                <div v-if="selectedLink===item" class="dot">✿</div>
                <div v-else class="notdot">
                <router-link :to="item === 'Home' ? '/' :`/${item}`">
                <div @click="toggle(item)">{{item}}</div>
                </router-link>
                </div>
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
    user-select: none;
    width: 100px;
    height: 40px;
    line-height: 40px;
}
.notdot{
    cursor: pointer;
    transition: all 0.25s ease;
}
.notdot:hover{
        color: #d4367563;
}

.alignitems{
    display: flex;
    align-items: center;
}

.dot {
    font-size: 20px;
}

@media only screen and (max-width: 800px) {
    .dot {
        font-size: 16px;
    }

    .navtitles{
        font-size: 14px;
    }
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  -webkit-opacity: 0;
}
</style>