<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import CardItem from './CardItem.vue';
import { GETTERS } from '../store/modules/paintings/index';

const store = useStore();
const data = computed(() => store.getters[GETTERS.GET_PAINTINGS_DATA]);

</script>

<template>
  <ul class="card">
    <li class="card__item" v-for="{
      author,
      created,
      id,
      imageUrl,
      location,
      name
    } in data" :key='id'>
      <CardItem :author='author' :created="created" :imageUrl="imageUrl" :location="location" :name="name" />
    </li>
  </ul>
</template>

<style lang="scss">
.card {
  width: var(--adaptive-width);
  margin: auto;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 20px;

  &__item {
    width: var(--card-width);
    height: auto;
    aspect-ratio: var(--aspect-ratio);
    background: #636363;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: var(--filterItem-column-gap);
  }
}
</style>
