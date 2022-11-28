<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { useRoute, useRouter } from 'vue-router';
import useClickOutside from '@/hooks/useClickOutside';
import BtnClearFilterVue from './BtnClearFilter.vue';

const route = useRoute();
const router = useRouter();

const { elementRef, isActive, handleClick } = useClickOutside();

const value = ref(route.query.nameArt || '');
const setSearchParams = useDebounceFn((newValue) => {
  router.replace({ query: { ...route.query, nameArt: newValue, page: 1 } });
}, 400);
watch(value, (newValue) => {
  if ((newValue as string).trim()) {
    setSearchParams((newValue as string).trim());
  } else if ((route.query.nameArt as string).trim()) {
    setSearchParams(undefined);
  }
});

const clearValue = () => {
  value.value = '';
  router.replace({ query: { ...route.query, nameArt: undefined } });
};

</script>

<template>
  <div :class="{ filterInput: true, filterInput_active: isActive }" ref="elementRef">
    <input class="filterInput__input" @focus="() => handleClick(true)" placeholder="Name" v-model="value" />
    <div class="filterInput-action">
      <BtnClearFilterVue v-if="value" @click="clearValue" />
    </div>
  </div>
</template>

<style lang="scss">
.filterInput {
  width: var(--filterItem-width);
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  &_active {
    border-color: #000;
  }

  &__input {
    width: -webkit-fill-available;
    height: 45px;
    padding: 0px 15px;
    @include filterItem-titel;
  }

  .filterInput-action {
    display: flex;
    position: absolute;
    right: 14px;
    top: 13.5px;
  }
}
</style>
