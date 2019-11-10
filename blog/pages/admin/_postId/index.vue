<template>
  <newPostFrom :postEdit="post" @submit="onSubmit" />
</template>

<script>
import axios from 'axios'
import newPostFrom from '@/components/admin/NewPostFrom.vue'
import { resolve, reject } from 'q';

export default {
  components: { newPostFrom },
  layout: 'admin',
  asyncData (context) {
    return axios.get(`https://blok-nuxt.firebaseio.com/posts/${context.params.postId}.json`)
      .then(res => {
        return {
          post: { ...res.data, id: context.params.postId }
        }
      })
      .catch(e => {
        context.error(e)
      })
  },
  methods: {
    onSubmit (post) {
      this.$store.dispatch('editPost', post)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>
