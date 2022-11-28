<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import {
  computed,
  ref,
  watch,
} from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { GETTERS } from '@/store/modules/paintings';
import StartIcon from '@/assets/icons/StartIcon.vue';
import PrevIcon from '@/assets/icons/PrevIcon.vue';
import NextIcon from '@/assets/icons/NextIcon.vue';
import EndIcon from '@/assets/icons/EndIcon.vue';
import getDataPagination from '@/func/getDataPagination';

const router = useRouter();
const route = useRoute();

const store = useStore();
const countPage = computed(() => store.getters[GETTERS.GET_COUNT_PAGE]);
const activePage = ref(Number(route.query.page));
const elementRef = ref();
const dataPage = computed(() => getDataPagination(countPage.value, activePage.value));

const openSlide = () => {
  window.scrollTo({
    top: 0,
  });
};

const setActivePage = (i: number, action = false) => {
  if ((action) && ((i > 0 && activePage.value !== countPage.value) || (i < 0 && activePage.value !== 1))) {
    activePage.value += i;
    openSlide();
  } else if (activePage.value !== i) {
    activePage.value = i;
    openSlide();
  }
};

watch(activePage, (newActivePage) => {
  router.replace({ query: { ...route.query, page: newActivePage } });
});

</script>

<template>
  <div class="pagination" ref="elementRef">
    <div class="pagination_content">
      <div class="pagination-wrapper">
        <button class="pagination-wrapper__btn" @click="setActivePage(1)" :disabled="activePage === 1">
          <StartIcon />
        </button>
        <button class="pagination-wrapper__btn" @click="setActivePage(-1, true)" :disabled="activePage === 1">
          <PrevIcon />
        </button>
        <button :class="{ 'pagination-wrapper__btn': true, 'pagination-wrapper__btn_active': i === activePage }"
          v-for="i in dataPage" :key="i" @click="setActivePage(i)">
          {{ i }}
        </button>
        <button class="pagination-wrapper__btn" @click="setActivePage(1, true)" :disabled="activePage === countPage">
          <NextIcon />
        </button>
        <button class="pagination-wrapper__btn" @click="setActivePage(countPage)" :disabled="activePage === countPage">
          <EndIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pagination {
  width: 100%;
  margin-top: 30px;

  &_content {
    margin: auto;
    width: var(--adaptive-width);
  }

  @media screen and (min-width: 768px) {
    margin-top: 35px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 40px;
  }
}

.pagination-wrapper {
  display: flex;

  &__btn {
    @include painting-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px;
    border-right: 1px;
    border-top: 1px;
    border-style: solid;
    border-color: #000000;
    height: 41px;
    width: 41px;

    &:hover {
      background: #EDEDED;
    }

    &+& {
      margin-left: 0px;
    }

    &:first-child {
      border-left: 1px;
      border-style: solid;
      border-bottom-left-radius: 8px;
      border-top-left-radius: 8px;
    }

    &:last-child {
      border-bottom-right-radius: 8px;
      border-top-right-radius: 8px;
    }

    &_active {
      background: #000000;
      color: #ffffff;

      &:hover {
        background: #000000;
      }
    }

    &:disabled {
      border-color: rgba(0, 0, 0, 0.3);

      & * {
        fill: rgba(0, 0, 0, 0.3);
      }

      &:hover {
        background: #FFFFFF;
      }
    }
  }
}
</style>
