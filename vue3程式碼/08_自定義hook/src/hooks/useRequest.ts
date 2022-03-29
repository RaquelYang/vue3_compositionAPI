import { ref } from "vue";

// 引入 axios
import axios from "axios";
// 發送 ajax 的請求
export default function <T>(url: string) {
  // 加載狀態
  const loading = ref(true);
  const data = ref<T | null>(null);
  const errorMsg = ref("");
  // 發送請求
  axios
    .get(url)
    .then((response) => {
      loading.value = false;
      data.value = response.data;
    })
    .catch((error) => {
      loading.value = false;
      errorMsg.value = error.message || "未知錯誤";
    });

  return {
    loading,
    data,
    errorMsg,
  };
}
