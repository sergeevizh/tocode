<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">New Comment: </h2>
      <!-- message -->
      <Message v-if="message" :message="message" />
      <!-- form -->
      <form @submit.prevent="onSubmit" class="contact-form">
        <!-- name -->
        <AppInput v-model="comment.name">Name:</AppInput>
        <!-- textarea -->
        <AppTextArea v-model="comment.text">Text:</AppTextArea>
        <!-- buttons -->
        <div class="controls">
          <AppButton>Submit</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'

export default {
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      message: null,
      comment: {
        name: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('addComment', {
        postId: this.postId,
        publish: false,
        // publish: true,
        ...this.comment
      })
        .then(() => {
          this.message = "Submited!"
          this.comment.name = ''
          this.comment.text = ''
        })
        .catch(e => consloe.log(e))
    }
  }
}
</script>

<style lang="scss">
.new-comment {
  text-align: center;
  .contact-form {
    max-width: 500px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px 0;
  }
}
</style>
