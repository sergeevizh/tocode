<template>
  <modal title="Login" @close="$emit('close',clearData())">
    <div slot="body">
      <form @submit.prevent="onSubmit">
        <!-- name -->
        <div class="form-item" :class="{errorInput: $v.name.$error}">
          <label>Name:</label>
          <p class="errorText" v-if="!$v.name.required">Filed is required</p>
          <p class="errorText" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} !</p>
          <input v-model="name" :class="{error: $v.name.$error}" @change="$v.name.$touch()">
        </div>
        <!-- password -->
        <div class="form-item" :class="{errorInput: $v.password.$error}">
          <label>Password:</label>
          <p class="errorText" v-if="!$v.password.required">Filed is required</p>
          <p class="errorText" v-if="!$v.password.password">Password must have at least {{$v.password.$params.minLength.min}}!</p>
          <input v-model="password" :class="{error: $v.password.$error}" @change="$v.password.$touch()">
        </div>
        <!-- button -->
        <button class="btn btnPrimary">Submit</button>
      </form>
      <hr>
      <button class="btn btnDefaul btnW100" @click="$emit('toToggle', clearData())">I need an account</button>
    </div>
  </modal>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators'

import modal from "@/components/UI/Modal.vue"

export default {
  components: { modal },
  data () {
    return {
      name: '',
      password: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const user = {
          name: this.name,
          password: this.password
        }
        console.log(user);
        // DONE
        this.name = ''
        this.password = ''
        this.$v.$reset()
        this.$emit('close')
      }
    },
    clearData () {
      this.name = ''
      this.password = ''
      this.$v.$reset()
    },
  }
}
</script>
<style lang="scss">
</style>
