<script lang="ts" setup>
import useClickOutside from '@/hooks/useClickOutside';
import useSetYears from '../hooks/useSetYears';
import BtnCloseFilter from './BtnCloseFilter.vue';
import BtnClearFilterVue from './BtnClearFilter.vue';

const { elementRef, isActive, handleClick } = useClickOutside();
const { valueFrom, valueBefore, clearActiveItem } = useSetYears();
</script>

<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div :class="{ filterYears: true, 'filterYears_active': isActive }" ref="elementRef">
    <div :class="{ 'filterYears-wrapper': true, 'filterYears-wrapper_active': isActive }">
      <div class="filterYears-header">
        Created
        <div class="filterYears-action">
          <BtnClearFilterVue v-if="valueFrom && valueBefore" @click="clearActiveItem" />
          <BtnCloseFilter :isActive="isActive" @click="handleClick(!isActive)" />
        </div>
      </div>
      <div class="filterYears-wrapper__content">
        <div class="filterYears-from">
          <input type="number" class="filterYears-from__input" placeholder="from" v-model="valueFrom" />
        </div>
        <div class="filterYears-line"></div>
        <div class="filterYears-before">
          <input type="number" class="filterYears-before__input" placeholder="before" v-model="valueBefore" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.filterYears {
  width: var(--filterItem-width);
  position: relative;
  height: 45px;
  z-index: 1;
  transition-property: z-index;
  transition-delay: 0.3s;

  &_active {
    z-index: calc(2);
    transition-delay: 0s;
  }
}

.filterYears-wrapper {
  overflow: hidden;
  max-height: 45px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  transition: max-height 0.3s;
  position: absolute;
  background: #fff;

  &_active {
    border-color: #000;
    max-height: 131px;

    @media screen and (min-width: 768px) {
      max-height: 205px;
    }
  }

  &__content {
    height: 86px;
    width: calc(100% - 33px);
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
      flex-direction: column;
      height: 160px;
      gap: 15px;
      justify-content: center;
      width: calc(100% - 50px);
    }

    @media screen and (min-width: 1366px) {
      height: 85px;
      gap: initial;
      width: calc(100% - 44px);
      flex-direction: row;
      justify-content: space-between;
    }
  }
}

.filterYears-header {
  text-transform: capitalize;
  width: -webkit-fill-available;
  height: 15px;
  margin: 15px 46px 15px 15px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @include filterItem-titel;
}

.filterYears-action {
  display: flex;
  position: absolute;
  right: 14px;
  top: 13.5px;
}

.filterYears-line {
  width: 12px;
  height: 1px;
  background: #000000;
}

.filterYears-before,
.filterYears-from {
  width: calc(100 * 110 / 245 * 1%);
  height: 45px;
  border-radius: 8px;
  overflow: hidden;

  &__input {
    width: -webkit-fill-available;
    padding: 0px 15px;
    height: 100%;
    background: #EFEFEF;
    color: #000000;

    &::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0.3);
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  @media screen and (min-width: 768px) {
    width: 110px;
  }

  @media screen and (min-width: 1366px) {
    width: 95px;
  }
}
</style>
