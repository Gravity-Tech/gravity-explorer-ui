<template>
  <div>
    <div class="file-pond-avatar">
      <icon class="file-pond-avatar-icon" image="/img/icons/photo.svg"></icon>
      <slot></slot>
    </div>
    <div class="file-pond-avatar-label">
      <slot name="label"></slot>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/Icon'

export default {
  name: 'FilePondAvatar',
  components: {
    Icon,
  },
}
</script>

<style lang="scss">
.file-pond-avatar {
  position: relative;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  .filepond--wrapper {
    position: relative;
    z-index: 2;
  }
  .filepond--panel-root {
    background-color: transparent;
  }

  .filepond--drip-blob {
    background: #ffffff;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  &:before {
    background: linear-gradient(
      145deg,
      rgba(96, 0, 255, 0.15) 0%,
      #4200c0 34.37%,
      #ff5e00 100%
    );
  }
  &:after {
    left: 1px;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background: linear-gradient(193deg, #2e3356 -28.01%, #10111a 90.88%);
  }
}

.file-pond-avatar-label {
  text-align: center;
  padding-top: 6px;
  font-size: 16px;
}
.file-pond-avatar-icon {
  width: 44px;
  height: 44px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>
