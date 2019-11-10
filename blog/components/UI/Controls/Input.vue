<template>
  <div class="control">
    <label>
      <slot />
    </label>
    <input :type="type" :required="required" :value="value" v-bind="$attrs" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: true
    }
  }
}
</script>


<style lang="scss" scoped>
input[type="radio"] {
  cursor: pointer;
}
</style>
