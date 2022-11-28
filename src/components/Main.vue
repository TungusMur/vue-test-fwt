<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import {
  computed,
  onMounted,
  watch,
} from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import {
  ACTIONS as ACTIONS_PAINTINGS,
  GETTERS as GETTERS_PAINTINGS,
} from '@/store/modules/paintings';
import {
  ACTIONS as ACTIONS_LOCATIONS,
  GETTERS as GETTERS_LOCATIONS,
} from '@/store/modules/locations';
import {
  ACTIONS as ACTIONS_AUTHORS,
  GETTERS as GETTERS_AUTHORS,
} from '@/store/modules/authors';
import Card from './Card.vue';
import FilterBar from './FilterBar.vue';
import Pagination from './Pagination.vue';
import useValidationRoute from '../hooks/useValidationRoute';

const store = useStore();
const route = useRoute();
const isLoading = computed(() => [
  store.getters[GETTERS_PAINTINGS.GET_LOADING_PAINTINGS_DATA],
  store.getters[GETTERS_AUTHORS.GET_LOADING_AUTHORS_DATA],
  store.getters[GETTERS_LOCATIONS.GET_LOADING_LOCATIONS_DATA],
].includes(true));

useValidationRoute();

onMounted(() => {
  store.dispatch(ACTIONS_PAINTINGS.FETCH_PAINTINGS, {
    page: route.query.page,
    locationId: route.query.location,
    authorId: route.query.name,
    nameArt: route.query.nameArt,
    fromDate: route.query.fromDate,
    beforeDate: route.query.beforeDate,
  });
  store.dispatch(ACTIONS_AUTHORS.FETCH_AUTHORS);
  store.dispatch(ACTIONS_LOCATIONS.FETCH_LOCATIONS);
});

watch(route, (newRoute) => {
  store.dispatch(ACTIONS_PAINTINGS.FETCH_PAINTINGS, {
    page: newRoute.query.page,
    locationId: newRoute.query.location,
    authorId: newRoute.query.name,
    nameArt: newRoute.query.nameArt,
    fromDate: newRoute.query.fromDate,
    beforeDate: newRoute.query.beforeDate,
  });
});

</script>

<template>
  <template v-if="!isLoading">
    <div class="main">
      <FilterBar />
      <Card />
      <Pagination />
    </div>
  </template>
</template>

<style lang="scss">
.main {
  margin-top: calc(var(--header-padding) * 2 + 64px);
  margin-bottom: 34px;

  @media screen and (min-width: 768px) {
    margin-bottom: 54px;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 62px;
  }

  @media screen and (min-width: 1366px) {
    margin-bottom: 97px;
  }
}
</style>
