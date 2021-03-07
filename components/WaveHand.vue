<template>
  <span class="wave" :class="{ infinite, delay }" >👋🏼</span>
</template>

<script>
export default {
  props: {
    infinite: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  transform-origin: 70% 70%;
  display: inline-block;
}

.infinite {
  animation-iteration-count: infinite;
}

.delay {
  animation-delay: 2s;
}

@keyframes wave-animation {
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
}
</style>
