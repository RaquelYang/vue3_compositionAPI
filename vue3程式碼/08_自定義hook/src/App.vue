<template>
  <h2>自定義 hook 函數操作</h2>
  <h3>同為 vue2 mixin</h3>
  <hr />
  <h2>x:{{ x }},y:{{ y }}</h2>
  <h3 v-if="loading">正在加載中...</h3>
  <h3 v-else-if="errorMsg">錯誤信息:{{ errorMsg }}</h3>
  <ul v-else>
    <!-- <li>id:{{ data.id }}</li>
    <li>address:{{ data.address }}</li>
    <li>distance:{{ data.distance }}</li> -->
  </ul>
  <hr />
  <ul v-for="item in data" :key="item.id">
    <li>id:{{ item.id }}</li>
    <li>title:{{ item.title }}</li>
    <li>price:{{ item.price }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useRequest from "./hooks/useRequest";

// 因為回傳回來的數據不知道什麼類型，用泛型代替
// 定義接口來限縮對象的類型
interface IAddressData {
  id: number;
  address: string;
  distance: string;
}
interface IProductsData {
  id: string;
  title: string;
  price: number;
}

export default defineComponent({
  name: "App",
  // 需求：用戶在頁面中點擊頁面，把點擊位置收集起來並印出
  setup() {
    const { x, y } = useMousePosition();
    // const { loading, data, errorMsg } = useRequest<IAddressData>("/data/address.json");
    // 抓到回來的是數組[{},{},{}...]
    const { loading, data, errorMsg } = useRequest<IProductsData[]>(
      "/data/products.json"
    );
    watch(data, () => {
      if (data.value) {
        console.log(data.value.length);
      }
    });
    return { x, y, loading, data, errorMsg };
  },
});
</script>
