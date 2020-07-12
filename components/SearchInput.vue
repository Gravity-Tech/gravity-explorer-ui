<template>
  <label class="search-input">
    <button type="submit" class="search-input-submit">
      <icon>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12.5"
            cy="12.5"
            r="9.25"
            stroke="currentColor"
            stroke-width="2.5"
          />
          <rect
            x="20.1755"
            y="18.7613"
            width="11.6543"
            height="2"
            rx="0.5"
            transform="rotate(45 20.1755 18.7613)"
            fill="currentColor"
          />
        </svg>
      </icon>
    </button>
    <button v-if="value" class="search-input-clear" aria-label="Clear Input">
      <icon>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.5"
            width="38.85"
            height="3.525"
            rx="1.7625"
            transform="rotate(45 2.5 0)"
            fill="currentColor"
          />
          <rect
            y="27.5"
            width="38.85"
            height="3.525"
            rx="1.7625"
            transform="rotate(-45 0 27.5)"
            fill="currentColor"
          />
        </svg>
      </icon>
    </button>
    <input
      type="search"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event)"
    />
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  name: 'SearchInput',
  components: { Icon },
  props: {
    value: {
      type: String,
      default: () => '',
      required: false,
    },
    placeholder: {
      type: String,
      default: () => '',
      required: false,
    },
  },
})
</script>

<style lang="scss">
$search-input-height: 35px;

.search-input {
  display: block;
  position: relative;
  margin-bottom: 0;
  min-width: 285px;
  .icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
  }
  input {
    color: $body-color;
    background: transparent;
    border: 1px solid #323652;
    border-radius: 11px;
    height: $search-input-height;
    width: 100%;
    padding-left: #{$search-input-height + 5px};
    padding-right: $search-input-height;
    outline: none !important;

    $placeholderColor: $text-muted;

    &:focus {
      border-color: #878ea1;
    }

    &::-moz-placeholder {
      color: $placeholderColor;
    }

    &::-webkit-input-placeholder {
      color: $placeholderColor;
    }

    &:-ms-input-placeholder {
      color: $placeholderColor;
    }

    &::-ms-input-placeholder {
      color: $placeholderColor;
    }

    &::placeholder {
      color: $placeholderColor;
    }
  }
}
.search-input-submit {
  position: absolute;
  left: 0;
  top: 0;
  background: transparent;
  border: none;
  outline: none !important;
  width: 32px;
  height: 100%;
  color: $text-muted;
  &:hover {
    color: $body-color;
  }
}
.search-input-clear {
  position: absolute;
  right: 0;
  top: 0;
  width: $search-input-height;
  height: $search-input-height;
  border: none;
  background: transparent;
  outline: none !important;
  color: #d8d8d8;
  &:hover {
    color: #44d7b6;
  }
  .icon {
    position: absolute;
    width: 13px;
    height: 13px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
