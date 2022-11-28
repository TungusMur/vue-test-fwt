import { ref, onMounted } from 'vue';

const useObserver = () => {
  const elementRef = ref<HTMLDivElement>();
  const isVisible = ref(false);

  onMounted(() => {
    if (elementRef.value) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '100px' });

      observer.observe(elementRef.value);
    }
  });

  return { elementRef, isVisible };
};

export default useObserver;
