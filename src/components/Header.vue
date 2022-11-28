<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import LogoIcon from '@/assets/icons/LogoIcon.vue';
import ThemeIcon from '@/assets/icons/ThemeIcon.vue';
import setCookie from '@/func/setCookie';
import getCookie from '@/func/getCookie';

const handleClick = () => {
  setCookie('theme', getCookie('theme') === 'dark' ? 'light' : 'dark');
};

</script>

<template>
  <div class="header">
    <div class="header-wrapper">
      <LogoIcon class="header-wrapper__logo" />
      <button class="heade-themeBtn" @click="handleClick">
        <ThemeIcon class="heade-themeBtn__icon" />
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  width: -webkit-fill-available;
  padding: var(--header-padding) 0px;
  position: fixed;
  background: #ffffff;
  top: 0;
  z-index: 5;
}

.header-wrapper {
  width: var(--adaptive-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  &__logo {
    width: 64px;
    height: 64px;
  }
}

.header-themeBtn {
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
