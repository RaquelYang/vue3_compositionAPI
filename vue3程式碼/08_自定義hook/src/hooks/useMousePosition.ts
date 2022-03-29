import { onBeforeUnmount, onMounted, ref } from "vue";
export default function () {
  const x = ref(-1);
  const y = ref(-1);
  const clickHandler = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };
  // 頁面已經加載完畢再進行點擊操作
  // 頁面加載完畢的生命週期
  onMounted(() => {
    window.addEventListener("click", clickHandler);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", clickHandler);
  });
  return {
    x,
    y,
  };
}
