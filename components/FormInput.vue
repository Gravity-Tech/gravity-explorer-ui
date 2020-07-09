<template>
  <div class="form-group">
    <label :for="id"><slot name="label"></slot></label>
    <input
      :id="id"
      :type="type"
      :value="value"
      class="form-control"
      @input="$emit('input', $event)"
    />
    <div v-if="$slots.text" class="form-text"><slot name="text"></slot></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FormInput',
  props: {
    type: {
      type: String,
      default: () => 'text',
      required: false,
    },
    value: {
      type: String,
      default: () => '',
      required: false,
    },
  },
  data: () => ({
    id: '',
  }),
  beforeMount() {
    this.id = this.getUniqueId()
  },
  methods: {
    getUniqueId() {
      return String(Math.floor(Math.random() * 10e10))
    },
  },
})
</script>
