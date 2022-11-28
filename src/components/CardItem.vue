<script lang="ts" setup>
import {
  defineProps,
  toRefs,
  ref,
} from 'vue';
import useObserver from '@/hooks/useObserver';
import Image from './Image.vue';

type IData = {
  author: string;
  created: string;
  imageUrl: string;
  location: string;
  name: string;
}

const props = defineProps<IData>();
const {
  author,
  created,
  imageUrl,
  location,
  name,
} = toRefs(props);
const isLoading = ref(false);
const setLoading = () => {
  isLoading.value = true;
};
const { isVisible, elementRef } = useObserver();

</script>

<template>
  <div class="cardItem" ref="elementRef">
    <div class="cardItem__content" v-if="isVisible">
      <Image :url="imageUrl" @load="setLoading" />
      <div class="cardItem-info" v-if="isLoading">
        <div class="cardItem-info__content">
          <div class="cardItem-info__name">{{ name }}</div>
          <div class="cardItem-info__author">
            <div class="cardItem-info__heading">Author:</div>{{ author }}
          </div>
          <div class="cardItem-info__created">
            <div class="cardItem-info__heading">Created:</div>{{ created }}
          </div>
          <div class="cardItem-info__loacation">
            <div class="cardItem-info__heading">Location:</div>{{ location }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.cardItem {
  width: 100%;
  height: 100%;

  &__content {
    width: 100%;
    height: 100%;
  }

  &:hover {
    .cardItem-info {
      bottom: 0;

      &__name {
        display: initial;
      }
    }
  }
}

.cardItem-info {
  position: absolute;
  bottom: -110px;
  width: 100%;
  background: rgba(255, 255, 255, 0.75);
  min-height: 145px;
  transition: bottom 0.4s;

  &__content {
    margin: 5px 15px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__name {
    @include cardItem-titel;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  &__author,
  &__created,
  &__loacation {
    @include cardItem-content;
    display: flex;
    gap: 4px;
  }

  &__heading {
    @include cardItem-heading
  }
}
</style>
