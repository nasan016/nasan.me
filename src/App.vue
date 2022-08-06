<script setup lang="ts">
import NameTitle from "./components/NameTitle.vue";
import NavigationLinks from "./components/NavigationLinks.vue";

</script>

<template>
<div class="main">
  <div class="content">
    <NameTitle name="Nathaniel Macapinlac" title="Software Engineer"/>
    <div class="navbar">
      <NavigationLinks/>
    </div>
  </div>
  <div>
  </div>
</div>
</template>

<style>
.main{
  height: 100vh;
  width: 100%;
  padding: 40px;
}

.content{
  border: solid 1px;
  padding: 36px;
  height: 100%;
}

.navbar{
  padding-top: 60px;
}
</style>