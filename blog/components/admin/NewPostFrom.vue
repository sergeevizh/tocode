<template>
  <section class="new-post">
    <div class="container">
      <!-- Modal -->
      <ModalPrev v-show="modalPrev" @close="modalPrev = false" :post="post" @postrender="postrender"></ModalPrev>
      <!-- form -->
      <form @submit.prevent="onSubmit">
        <AppInput v-model="post.title">Title: </AppInput>
        <AppInput v-model="post.descr">Descr: </AppInput>
        <AppInput v-model="post.img">Img Link: </AppInput>
        <!-- Switch -->
        <div class="markup">
          <AppInput class="radio-button" checked="checked" type="radio" name="select-markup" value="md" @input="input">md</AppInput>
          <AppInput class="radio-button" type="radio" name="select-markup" value="html" @input="input">html</AppInput>
        </div>
        <!-- Editor -->
        <div v-if="switching" id="editor" class="editor-holder">
          <textarea v-model="query" class="editor" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>
          <pre><code class="syntax-highlight md">{{ query }}</code></pre>
        </div>
        <div v-else id="editor" class="editor-holder">
          <textarea v-model="html" class="editor" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>
          <pre><code class="syntax-highlight md">{{ html }}</code></pre>
        </div>

        <no-ssr>
          <VueMarkdown class="none" v-if="switching" :postrender="postrender" :source="query"></VueMarkdown>
          <VueMarkdown class="none" v-else :postrender="postrender" :source="html"></VueMarkdown>
        </no-ssr>
        <!-- buttons -->
        <div class="controls">
          <div class="btn btnDanger" @click="cancel">Cancel</div>
          <AppButton>Save</AppButton>
          <AppButton @click.prevent="modalPrev = !modalPrev" class="btnSuccess">Предпросмотр</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import hljs from 'highlight.js';
import 'highlight.js/styles/github-gist.css';
const h2m = require('h2m')

import ModalPrev from "@/components/ModalPrev.vue";
export default {
  components: { ModalPrev },
  props: {
    postEdit: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      html: '',
      query: '',
      htmlData: '',
      switching: true,
      modalPrev: false,
      post: this.postEdit ? { ...this.postEdit } : {
        title: '',
        descr: '',
        img: '',
        content: ''
      }
    }
  },
  mounted () {
    this.query = this.post.content
    this.highlightSyntax();
  },
  watch: {
    query () {
      this.post.content = this.query
      this.highlightSyntax();
    },
    html () {
      this.post.content = this.html
      this.highlightSyntax();
    }
  },
  computed: {
    escapedQuery () {
      if (this.switching) {
        return this.query
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
      }
      return this.html
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.post)
    },
    cancel () {
      this.$router.push('/admin')
    },
    highlightSyntax () {
      const code = document.querySelector('code');
      const editor = document.querySelector('.editor');
      const syntax = document.querySelectorAll('.syntax-highlight');
      code.innerHTML = this.escapedQuery;
      editor.focus()

      syntax.forEach(function (element, index) {
        hljs.highlightBlock(element);
      });
    },
    toMD () {
      this.switching = false
      this.html = h2m(this.query)
      this.highlightSyntax()
    },
    toHTML () {
      this.switching = true
      this.query = this.htmlData
      this.highlightSyntax()
    },
    input (val) {
      return val === 'html' ? this.toHTML() : this.toMD()
    },
    postrender (val) {
      return this.htmlData = val
    },
  }
}
</script>

<style lang="scss" scoped>
.none {
  display: none;
}
.controls {
  text-align: center;
  margin: 20px 0;
}
.markup {
  display: flex;
  align-items: center;
  justify-content: center;
}
.radio-button {
  &:first-child {
    margin-right: 20px;
  }
}
.wrapp {
  display: flex;
  justify-content: center;
  align-items: center;
}
.editor-holder {
  width: 800px;
  height: 500px;
  margin-top: 20px;
  position: relative;
  top: 0;
  margin-left: -400px;
  left: 50%;
  overflow: auto;
  background-color: white !important;
  box-shadow: 5px 5px 10px 0px #00000066;
  transition: all 0.5s ease-in-out;

  textarea,
  code {
    width: 100%;
    height: auto;
    min-height: 500px;

    border: 0;

    position: absolute;
    top: 0;
    left: 0;

    margin: 0;
    padding: 20px !important;

    font-size: 14px;
    font-family: Consolas, Liberation Mono, Courier, monospace;
    line-height: 21px;

    overflow: visible;

    transition: all 0.5s ease-in-out;
  }

  textarea {
    background: transparent !important;
    z-index: 2;
    height: auto;
    resize: none;
    color: #000000;
    text-shadow: 0px 0px 0px #00000000;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;

    &::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 1);
    }

    &:focus {
      outline: 0;
      border: 0;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
  }

  code {
    z-index: 1;
  }
}
</style>
