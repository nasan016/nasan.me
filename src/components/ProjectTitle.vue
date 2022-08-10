<script setup lang="ts">
const props = defineProps({
    title: String,
    description: String,
})
</script>

<template>
<div>
    <div class="projectContainer">
    <div class="name">{{title}}</div>
    <div class="title">{{description}}</div>
    </div>
</div>
</template>

<style scoped>
.projectContainer{
    padding-bottom: 20px;
    padding-right: 20px;
    text-align: right;
    transition: all 0.2s ease;
}

.projectContainer:hover{
    color: #d4367563;
}
.name{
    font-size: 60px;
    font-weight: 100;
    user-select: none;
    cursor: pointer;
}

.title{
    font-size: 16px;
    user-select: none;
    font-weight: 200;
    cursor: pointer;
}

@media only screen and (max-width: 800px) {
    .title{
        font-size: 14px;
    }

    .name{
        font-size: 30px;
    }
}
</style>