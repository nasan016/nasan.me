<script setup lang="ts">

const props = defineProps({
    name: String,
    title: String
})
</script>

<template>
    <div class="name">{{name}}</div>
    <div class="title">{{title}}</div>
</template>

<style scoped>
.name{
    font-size: 60px;
    font-weight: 100;
    user-select: none;
}

.title{
    font-size: 16px;
    user-select: none;
    font-weight: 200;
}

@media only screen and (max-width: 800px) {
    .title{
        font-size: 14px;
    }

    .name{
        font-size: 34px;
    }
}
</style>