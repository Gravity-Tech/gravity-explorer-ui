<template>
  <div class="form-group">
    <label v-if="$slots.label" :for="id" class="form-control-label"
      ><slot name="label"></slot
    ></label>
    <div v-if="$slots.prepend" class="form-control-prepend">
      <slot name="prepend"></slot>
    </div>
    <div v-if="$slots.append" class="form-control-append">
      <slot name="append"></slot>
    </div>
    <input
      :id="id"
      :type="type"
      :value="value"
      class="form-control"
      @input="$emit('input', $event.target.value)"
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
