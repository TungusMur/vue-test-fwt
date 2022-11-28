import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Store } from 'vuex';

const useSetItemList = (property: string, store: Store<any>, getters: string) => {
  const router = useRouter();
  const route = useRoute();

  const activeItem = ref<string>((route.query[property]
    && store.getters[getters](Number(route.query[property]))) || property);

  const setActiveItem = (propertyItemValue: string, propertyItemId: number) => {
    activeItem.value = propertyItemValue;
    router.replace({ query: { ...route.query, [property]: propertyItemId, page: 1 } });
  };

  const clearActiveItem = () => {
    activeItem.value = property;
    router.replace({ query: { ...route.query, [property]: undefined, page: 1 } });
  };

  return { activeItem, setActiveItem, clearActiveItem };
};

export default useSetItemList;
