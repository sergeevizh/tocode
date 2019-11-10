<template>
  <div class="wrapper">

    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- message -->
          <message />
          <!-- new note -->
          <newNote />
          <!-- title -->
          <div class="note-header" style="margin: 36px;">
            <h1>{{title}}</h1>
            <!-- search -->
            <search />
            <!-- icons controls -->
            <div class="icons">
              <svg :class="{active: $store.getters.getGrid}" @click="$store.dispatch('setGrid', true)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <svg :class="{active: !$store.getters.getGrid}" @click="$store.dispatch('setGrid', false)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3" y2="6"></line>
                <line x1="3" y1="12" x2="3" y2="12"></line>
                <line x1="3" y1="18" x2="3" y2="18"></line>
              </svg>
            </div>
          </div>
          <!-- note-list -->
          <notes />
        </div>
      </section>
    </div>

  </div>

</template>

<script>
import message from "@/components/Message.vue";
import notes from "@/components/Notes.vue";
import newNote from "@/components/NewNote.vue";
import search from "@/components/Search.vue";
export default {
  components: {
    message,
    notes,
    search,
    newNote
  },
  data() {
    return {
      title: null,
      grid: null
    };
  },
  created() {
    this.grid = this.$store.getters.getGrid;
    this.title = this.$store.getters.getTitle;
  }
};
</script>

<style>
</style>
