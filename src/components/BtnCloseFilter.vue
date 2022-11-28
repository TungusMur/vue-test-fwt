<script lang="ts" setup>
import { defineProps, defineEmits, toRefs } from 'vue';
import ArrowIcon from '@/assets/icons/ArrowIcon.vue';

type IBtnCloseFilter = {
  isActive: boolean;
};

const props = defineProps<IBtnCloseFilter>();
const { isActive } = toRefs(props);
const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};

</script>

<template>
  <button :class="{ 'btnCloseFilter': true, 'btnCloseFilter_active': isActive }" @click="handleClick">
    <ArrowIcon class="btnCloseFilter__icon" />
  </button>
</template>

<style lang="scss">
.btnCloseFilter {
  width: 18px;
  height: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateX(180deg);

  &_active {
    transform: rotateX(0deg);
  }
}
</style>
