<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { defineProps, defineEmits, toRefs } from 'vue';

type IImage = {
  url: string;
};

const props = defineProps<IImage>();
const { url } = toRefs(props);
const emit = defineEmits(['load']);

const handleLoad = () => {
  emit('load');
};

</script>

<template>
  <div class="image" ref="elementRef">
    <img class="image__img" :src="url" alt="" @load="handleLoad" />
  </div>
</template>

<style lang="scss">
.image {
  height: 100%;
  width: 100%;

  &__img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
</style>
