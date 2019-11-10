<template>
  <transition name="fade">
    <div class="message" v-if="$store.getters.getMessage">
      <p>{{$store.getters.getMessage}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      message: null
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  text-align: center;
}
p {
  color: red;
}

.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>

