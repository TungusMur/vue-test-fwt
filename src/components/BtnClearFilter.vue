<script lang="ts" setup>
import { defineEmits } from 'vue';
import CrossIcon from '@/assets/icons/CrossIcon.vue';

const emit = defineEmits(['click']);
const handleClick = () => {
  emit('click');
};

</script>

<template>
  <button class="btnClearFilter">
    <CrossIcon class="btnClearFilter__icon" @click="handleClick" />
  </button>
</template>

<style lang="scss">
.btnClearFilter {
  width: 18px;
  height: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
