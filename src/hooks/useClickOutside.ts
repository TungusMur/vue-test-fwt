import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const useClickOutside = () => {
  const elementRef = ref<HTMLElement>();
  const isActive = ref(false);
  const handleClick = (active: boolean) => {
    isActive.value = active;
  };

  onClickOutside(elementRef, () => { isActive.value = false; });

  return { elementRef, isActive, handleClick };
};

export default useClickOutside;
