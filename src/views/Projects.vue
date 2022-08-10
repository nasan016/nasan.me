<script setup lang="ts">
import {ref, onMounted } from 'vue'
import { selectedLink } from '../components/linkTracker'

onMounted(() => {
    selectedLink.value = "Projects"
})
</script>

<template>
    <div>WIP↗</div>
</template>