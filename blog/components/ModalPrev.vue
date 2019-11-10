<template>
  <modal title="Предпросмотр" @close="$emit('close')">
    <div slot="body">
      <div class="text" :key="post.title">
        <no-ssr>
          <div class="post-img">
            <img :src="post.img" :alt="post.title">
          </div>
          <h2 class="post-title">{{post.title}}</h2>
          <h3 class="post-descr">{{post.descr}}</h3>
          <div class="post-body">
            <VueMarkdown :source="post.content"></VueMarkdown>
          </div>
        </no-ssr>
      </div>
    </div>
  </modal>
</template>
<script>

import modal from "@/components/UI/Modal.vue"

export default {
  components: { modal },
  props: {
    post: {
      type: Object,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13.4px;
  color: rgb(245, 94, 94);
}
.form-item {
  &.errorInput .errorText {
    display: block;
  }
}
input.error {
  border-color: rgb(245, 94, 94);
}
.text {
  white-space: pre-line;
  text-align: left;
}
.post-img {
  margin-bottom: 30px;
}
.post-title {
  margin-bottom: 10px;
  font-size: 25px;
}
.post-descr {
  font-size: 20px;
}
.post-body {
  font-size: 16px;
  line-height: 1.3;
}
</style>
