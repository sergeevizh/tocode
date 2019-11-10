<template>
  <div class="new-note">
    <div class="new-note__row">
      <label>Tille</label>
      <input v-model="note.title" type="text">
      <select v-model="note.priority">
        <option selected disabled value="">Priority</option>
        <option v-for="(option, index) in options" :key="index" :value="option">{{option}}</option>
      </select>
    </div>
    <label>Description</label>
    <textarea v-model="note.description"></textarea>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      note: null,
      options: null
    }
  },
  created () {
    this.note = this.$store.getters.getNote
    this.options = this.$store.getters.getOptions
  },
  methods: {
    addNote () {
      this.$store.dispatch("setAddNote", this.note)
    }
  }
}
</script>

<style lang="scss">
.new-note {
  text-align: center;
  textarea {
    margin-bottom: 20px;
  }
  &__row {
    position: relative;
    select {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      height: 54px;
      width: 200px;
    }
  }
}
</style>
