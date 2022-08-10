<script setup lang="ts">
import {ref, onMounted } from 'vue'
import { selectedLink } from '../components/linkTracker'

const openGithub = () => {
    window.open(
        "google.com"
    )
}
onMounted(() => {
    selectedLink.value = "Contact"
})
</script>

<template>
<div class="contactContent">
    <div>
        <a href="https://github.com/nasan016" target="_blank">GitHub/nasan016↗</a>
    </div>
    <div>
       <a href="https://www.linkedin.com/in/nathanielmacapinlac/" target="_blank">LinkedIn/nathanielmacapinlac↗</a>
    </div>
    <div>
        <a href="mailto: nlm8841@nyu.edu" target="_blank">Email/nlm8841@nyu.edu↗</a>
    </div>
</div>
</template>

<style scoped>
.contactContent{
    line-height: 1.6;
    font-size: 18px;
    display: flex;
    flex-direction: column;
}

@media only screen and (max-width: 800px) {
    .contactContent{
        font-size: 12.5px;
    }
}

a {
  position: relative;
  text-decoration: none;
}

a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 1px;
  background-color: #D43674;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .2s ease-in-out;
}

a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}

</style>