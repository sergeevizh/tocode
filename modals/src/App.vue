<template>

  <div class="wrapper">
    <!-- header -->
    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- Simple task -->
          <button class="btn btnPrimary" @click="modalValidate = !modalValidate">Simple task</button>
          <modalValidate v-show="modalValidate" @close="modalValidate = false"></modalValidate>
          <!-- Difficult task -->
          <!-- Login -->
          <button class="btn btnPrimary" @click="loginModal = !loginModal">Login</button>
          <login v-show="loginModal" @close="loginModal = false" @toToggle="toToggle"></login>
          <!-- Registration -->
          <button class="btn btnPrimary" @click="registrationModal = !registrationModal">Registration</button>
          <registration v-show="registrationModal" @close="registrationModal = false" @toToggle="toToggle"></registration>
        </div>
      </section>
    </div>
    <!-- footer -->
  </div>

</template>

<script>
import modalValidate from "@/components/ModalVaLidate.vue";
import login from "@/components/Login.vue";
import registration from "@/components/Registration.vue";

export default {
  components: { modalValidate, login, registration },
  data () {
    return {
      modalValidate: false,
      loginModal: false,
      registrationModal: false
    }
  },
  methods: {
    toToggle () {
      if (this.loginModal) {
        this.loginModal = false,
          this.registrationModal = true
      } else {
        this.loginModal = true,
          this.registrationModal = false
      }
    }
  }
}
</script>

<style>
</style>
