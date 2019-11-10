<template>
  <div class="notes">
    <div class="note" :class="[{full : !$store.getters.getGrid},note.priority]" v-for="(note, index) in notes" :notes="getNewNotes" :key="index">
      <div class="note-header">
        <p v-show="!note.editing" :data-text="note.attr" @click="editing('title', index)">{{note.title}}</p>
        <input class="note-header__input" type="text" placeholder="to apply click enter/esc return" v-show="note.editing" :class="[{active: note.editing}, `input${index}`]" @blur="onBlur(index)" @keyup.esc="onBlur(index)" @keyup.enter="showinputvalue(index)" v-model="message">
        <p style="cursor:pointer;" @click="removeNote(index)">x</p>
      </div>
      <div class="note-body">
        <p @click="editing('descr')">{{note.description}}</p>
        <span>{{note.date}}</span>
        <span>{{note.priority}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notes: null,
      message: "",
      grid: null
    };
  },
  created () {
    this.notes = this.$store.getters.getNotes;
    this.grid = this.$store.getters.getGrid;
  },
  computed: {
    getNewNotes () {
      let newNotes = this.$store.getters.getNewNotes;
      this.notes = newNotes;
      if (!newNotes.length) {
        this.notes = this.$store.getters.getNotes;
      }
    }
  },
  methods: {
    removeNote (index) {
      this.notes.splice(index, 1);
    },
    editing (e, index) {
      if (e === "title") {
        this.notes[index].editing = true;
        const input = document.querySelector(`.input${index}`);
        window.setTimeout(() => {
          input.focus();
        }, 0);
      }
    },
    onBlur (index) {
      this.notes[index].editing = false;
      this.message = ''
    },
    showinputvalue (index) {
      let notes = this.notes[index],
        message = this.message;
      notes.title = message
      notes.editing = false;
      notes.date = new Date(Date.now()).toLocaleString()
      message = ''
    }
  }
};
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}

.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #fff;
  &.full {
    width: 100%;
  }
  &.important {
    box-shadow: 0 20px 20px rgba(68, 76, 224, 0.25);
  }
  &.required {
    box-shadow: 0 20px 20px rgba(68, 76, 224, 0.6);
  }
}
.note-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 32px;
  }
  p {
    display: flex;
    align-items: center;
    font-size: 22px;
    color: rgb(136, 135, 222);
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 280px;
    white-space: nowrap;
    height: 59px;
  }
  svg {
    margin-right: 12px;
    color: #999;
    cursor: pointer;
    &.active {
      color: rgb(136, 135, 222);
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__input {
    margin: 0;
    &.active {
      opacity: 1;
      width: auto;
      clip: auto;
      -webkit-appearance: initial;
      top: 0;
      left: 0;
      border: none;
      border-bottom: 1px solid #999;
      border-radius: 0;
      color: rgb(136, 135, 222);
      font-size: 22px;
    }
    &::placeholder {
      font-size: 14px;
    }
  }
}
.note-body {
  display: flex;
  flex-direction: column;
  p {
    margin: 20px 0px;
  }
  span {
    font-size: 14px;
    color: #999;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
