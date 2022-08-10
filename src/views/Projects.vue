<script setup lang="ts">
import {ref, onMounted } from 'vue'
import { selectedLink } from '../components/linkTracker'
import  ProjectTitle  from '../components/ProjectTitle.vue'

const nasandev = () =>{
    window.open("https://nasan.dev/", "_blank",)
}

onMounted(() => {
    selectedLink.value = "Projects"
})
</script>

<template>
<div class="projectsContent">
    <ProjectTitle @click="nasandev" title="nasan.dev" description="Interactive Web Terminal"/>
    <ProjectTitle title="VTris" description="WORK IN PROGRESS"/>
    <ProjectTitle title="Pico-Pet" description="WORK IN PROGRESS"/>
</div>
</template>

<style scoped>
.projectsContent{
    display: flex;
    flex-direction: column;
}
</style>