<!-- eslint-disable vuejs-accessibility/label-has-for -->
<script lang="ts" setup>
import { GETTERS as GETTERS_LOCATIONS } from '@/store/modules/locations';
import { GETTERS as GETTERS_AUTHORS } from '@/store/modules/authors';
import FilterInput from './FilterInput.vue';
import FilterList from './FilterList.vue';
import FilterYears from './FilterYears.vue';

</script>

<template>
  <div class="filterBar">
    <FilterInput />
    <FilterList :gettersForData="GETTERS_LOCATIONS.GET_LOCATIONS_DATA"
      :gettersForRouteParam="GETTERS_LOCATIONS.GET_LOCATION_NAME" property="location" />
    <FilterList :gettersForData="GETTERS_AUTHORS.GET_AUTHOR_DATA"
      :gettersForRouteParam="GETTERS_AUTHORS.GET_AUTHORS_NAME" property="name" />
    <FilterYears />
  </div>
</template>

<style lang="scss">
.filterBar {
  width: var(--adaptive-width);
  display: flex;
  flex-direction: column;
  gap: var(--filterBar-gap);
  margin: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}
</style>
