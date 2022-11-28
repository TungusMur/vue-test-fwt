<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import {
  computed,
  defineProps,
  toRefs,
} from 'vue';
import { useStore } from 'vuex';
import useSetItemList from '../hooks/useSetItemList';
import useClickOutside from '../hooks/useClickOutside';
import BtnCloseFilter from './BtnCloseFilter.vue';
import BtnClearFilter from './BtnClearFilter.vue';

type IFilterList = { gettersForData: string, gettersForRouteParam: string, property: string };

const props = defineProps<IFilterList>();
const { gettersForData, gettersForRouteParam, property } = toRefs(props);

const store = useStore();
const data = computed(() => store.getters[gettersForData.value]);

const { elementRef, isActive, handleClick } = useClickOutside();

const {
  activeItem,
  setActiveItem,
  clearActiveItem,
} = useSetItemList(property.value, store, gettersForRouteParam.value);

</script>

<template>
  <div :class="{ filterList: true, 'filterList_active': isActive }" ref="elementRef">
    <div :class="{ 'filterList-wrapper': true, 'filterList-wrapper_active': isActive }">
      <div class="filterList-header">
        {{ activeItem }}
        <div class="filterList-action">
          <BtnClearFilter v-if="activeItem !== property" @click="clearActiveItem" />
          <BtnCloseFilter :isActive="isActive" @click="handleClick(!isActive)" />
        </div>
      </div>
      <div class=" filterList-wrapper__content">
        <div class="filterList-item" v-for="item in data" :key="item.id"
          @click.stop="setActiveItem(item[property], item.id), handleClick(false)" aria-hidden="true">
          {{ item[property] }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.filterList {
  width: var(--filterItem-width);
  position: relative;
  height: 45px;
  z-index: 1;
  transition-property: z-index;
  transition-delay: 0.3s;

  &_active {
    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
        z-index: calc(6 - $i);
      }
    }

    transition-delay: 0s;
  }
}

.filterList-wrapper {
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
    max-height: 478px;
  }

  &__content {
    overflow-y: scroll;
    max-height: 412px;
    padding: 10px 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }
}

.filterList-header {
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

.filterList-action {
  display: flex;
  position: absolute;
  right: 14px;
  top: 13.5px;
}

.filterList-item {
  padding: 10px 30px;
  display: flex;
  align-items: center;
  @include filterItem-content;
  cursor: pointer;

  &:hover {
    background: #000000;
    color: #fff;
  }
}
</style>
