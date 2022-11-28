import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useDebounceFn } from '@vueuse/core';

const useSetYears = () => {
  const router = useRouter();
  const route = useRoute();

  const valueFrom = ref(route.query.fromDate || '');
  const valueBefore = ref(route.query.beforeDate || '');

  const setSearchParams = useDebounceFn((newValueFrom, newValueBefore) => {
    let fromDate = newValueFrom;
    let beforeDate = newValueBefore;

    if (fromDate > beforeDate) {
      fromDate = '0';
      valueFrom.value = '0';
    }
    if (beforeDate > new Date().getFullYear()) {
      beforeDate = String(new Date().getFullYear());
      valueBefore.value = String(new Date().getFullYear());
    }

    router.replace({
      query: {
        ...route.query,
        fromDate,
        beforeDate,
        page: 1,
      },
    });
  }, 1000);

  const clearActiveItem = () => {
    valueFrom.value = '';
    valueBefore.value = '';

    router.replace({
      query: {
        ...route.query,
        fromDate: undefined,
        beforeDate: undefined,
        page: 1,
      },
    });
  };

  watch([valueFrom, valueBefore], ([newValueFrom, newValueBefore]) => {
    if (newValueFrom && newValueBefore) {
      setSearchParams(newValueFrom, newValueBefore);
    }
  });

  return { valueFrom, valueBefore, clearActiveItem };
};

export default useSetYears;
