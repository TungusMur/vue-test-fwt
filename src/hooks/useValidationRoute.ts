import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const useValidationRoute = () => {
  const router = useRouter();
  const route = useRoute();

  onBeforeMount(() => {
    const newRoute = { ...route.query };
    if (Number.isNaN(+route.query.location!)) {
      Reflect.deleteProperty(newRoute, 'location');
    }

    if (Number.isNaN(+route.query.name!)) {
      Reflect.deleteProperty(newRoute, 'name');
    }

    if (Number.isNaN(+route.query.fromDate!) || Number.isNaN(+route.query.beforeDate!)) {
      Reflect.deleteProperty(newRoute, 'fromDate');
      Reflect.deleteProperty(newRoute, 'beforeDate');
    }

    router.replace({ query: { ...newRoute, page: 1 } });
  });
};

export default useValidationRoute;
