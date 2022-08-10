<script setup lang="ts">
import NameTitle from "./components/NameTitle.vue";
import NavigationLinks from "./components/NavigationLinks.vue";

</script>

<template>

<div class="main background">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
  <div class="content">
    <div class="rightSide">
      <NameTitle name="Nathaniel Macapinlac" title="Software Engineer"/>
      <div class="navbar">
        <NavigationLinks/>
      </div>
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
  overflow: auto;
}

.content{
  border: solid 1px;
  padding: 36px;
  height: 100%;
  position: relative;
}

.rightSide{
  width: 540px;
}
.navbar{
  padding-top: 60px;
}

@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}
@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #f4f4f4;
    overflow: hidden;
}

.background span {
    width: 20vmin;
    height: 20vmin;
    border-radius: 20vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 45;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background span:nth-child(0) {
    color: #f6eea2;
    top: 88%;
    left: 84%;
    animation-duration: 38s;
    animation-delay: -2s;
    transform-origin: 5vw 12vh;
    box-shadow: 40vmin 0 5.961667994780856vmin currentColor;
}
.background span:nth-child(1) {
    color: #f6eea2;
    top: 5%;
    left: 79%;
    animation-duration: 34s;
    animation-delay: -21s;
    transform-origin: -14vw 11vh;
    box-shadow: -40vmin 0 5.688620947558337vmin currentColor;
}
.background span:nth-child(2) {
    color: #f2a6c6;
    top: 79%;
    left: 51%;
    animation-duration: 36s;
    animation-delay: -8s;
    transform-origin: 14vw -18vh;
    box-shadow: 40vmin 0 5.001407370322461vmin currentColor;
}
.background span:nth-child(3) {
    color: #f2a6c6;
    top: 46%;
    left: 14%;
    animation-duration: 30s;
    animation-delay: -13s;
    transform-origin: -24vw -1vh;
    box-shadow: -40vmin 0 5.098969987176552vmin currentColor;
}
.background span:nth-child(4) {
    color: #f2a6c6;
    top: 50%;
    left: 100%;
    animation-duration: 12s;
    animation-delay: -48s;
    transform-origin: -19vw -6vh;
    box-shadow: -40vmin 0 5.8430275430543155vmin currentColor;
}
.background span:nth-child(5) {
    color: #f2a6c6;
    top: 92%;
    left: 66%;
    animation-duration: 22s;
    animation-delay: -38s;
    transform-origin: -9vw -19vh;
    box-shadow: 40vmin 0 5.790274214427235vmin currentColor;
}
.background span:nth-child(6) {
    color: #f6eea2;
    top: 84%;
    left: 78%;
    animation-duration: 40s;
    animation-delay: -34s;
    transform-origin: 3vw 21vh;
    box-shadow: 40vmin 0 5.284594195123124vmin currentColor;
}
.background span:nth-child(7) {
    color: #f2a6c6;
    top: 18%;
    left: 12%;
    animation-duration: 23s;
    animation-delay: -35s;
    transform-origin: -11vw -14vh;
    box-shadow: -40vmin 0 5.34641625595974vmin currentColor;
}
.background span:nth-child(8) {
    color: #b5d8e3;
    top: 62%;
    left: 24%;
    animation-duration: 21s;
    animation-delay: -13s;
    transform-origin: 22vw 12vh;
    box-shadow: 40vmin 0 5.288584005434354vmin currentColor;
}
.background span:nth-child(9) {
    color: #f2a6c6;
    top: 33%;
    left: 25%;
    animation-duration: 6s;
    animation-delay: -18s;
    transform-origin: 24vw -15vh;
    box-shadow: -40vmin 0 5.719414756059911vmin currentColor;
}
.background span:nth-child(10) {
    color: #b5d8e3;
    top: 81%;
    left: 25%;
    animation-duration: 13s;
    animation-delay: -10s;
    transform-origin: -13vw -11vh;
    box-shadow: -40vmin 0 5.562508214614178vmin currentColor;
}
.background span:nth-child(11) {
    color: #f6eea2;
    top: 97%;
    left: 67%;
    animation-duration: 51s;
    animation-delay: -3s;
    transform-origin: -13vw -23vh;
    box-shadow: 40vmin 0 5.965534543473738vmin currentColor;
}
.background span:nth-child(12) {
    color: #f2a6c6;
    top: 6%;
    left: 14%;
    animation-duration: 41s;
    animation-delay: -37s;
    transform-origin: -11vw 17vh;
    box-shadow: -40vmin 0 5.447850810018634vmin currentColor;
}
.background span:nth-child(13) {
    color: #f6eea2;
    top: 68%;
    left: 32%;
    animation-duration: 12s;
    animation-delay: -50s;
    transform-origin: 19vw -18vh;
    box-shadow: 40vmin 0 5.218549225575035vmin currentColor;
}
.background span:nth-child(14) {
    color: #b5d8e3;
    top: 13%;
    left: 21%;
    animation-duration: 33s;
    animation-delay: -29s;
    transform-origin: 16vw 19vh;
    box-shadow: -40vmin 0 5.703863697656766vmin currentColor;
}
.background span:nth-child(15) {
    color: #f2a6c6;
    top: 63%;
    left: 67%;
    animation-duration: 12s;
    animation-delay: -12s;
    transform-origin: 8vw 11vh;
    box-shadow: -40vmin 0 5.799192532082513vmin currentColor;
}
.background span:nth-child(16) {
    color: #b5d8e3;
    top: 22%;
    left: 71%;
    animation-duration: 48s;
    animation-delay: -27s;
    transform-origin: -3vw -23vh;
    box-shadow: 40vmin 0 5.98600537808262vmin currentColor;
}
.background span:nth-child(17) {
    color: #f2a6c6;
    top: 61%;
    left: 7%;
    animation-duration: 29s;
    animation-delay: -4s;
    transform-origin: -18vw -18vh;
    box-shadow: 40vmin 0 5.3166993037663595vmin currentColor;
}
.background span:nth-child(18) {
    color: #f6eea2;
    top: 71%;
    left: 25%;
    animation-duration: 13s;
    animation-delay: -48s;
    transform-origin: -4vw 11vh;
    box-shadow: 40vmin 0 5.6757767723044275vmin currentColor;
}
.background span:nth-child(19) {
    color: #f2a6c6;
    top: 56%;
    left: 86%;
    animation-duration: 28s;
    animation-delay: -12s;
    transform-origin: 4vw 9vh;
    box-shadow: -40vmin 0 5.9196690110877555vmin currentColor;
}


</style>