<template>
  <div>reactive 使用</div>
  <h3>姓名：{{ user.name }}</h3>
  <h3>年齡：{{ user.age }}</h3>
  <h3>朋友：{{ user.friend }}</h3>
  <h3>性別：{{ user.gender }}</h3>
  <button @click="add">更新</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",

  setup() {
    // const obj: any = {
    const obj = {
      name: "Raquel",
      age: 22,
      friend: {
        name: "aaa",
        age: 11,
        cars: ["bobo", "coco", "dodo"],
      },
    };
    const user = reactive<any>(obj);
    // reactive 定義多個響應式數據
    // 返回值的是 proxy 代理對象(user)，被代理者就是 reactive 中傳入的對象 obj reactive(obj)
    // user 是 proxy 類型
    // const user = reactive({
    //   name: "Raquel",
    //   age: 22,
    //   friend: {
    //     name: "aaa",
    //     age: 11,
    //     cars: ["bobo", "coco", "dodo"],
    //   },
    // });
    const add = () => {
      // 若直接使用目標對象來更新成員的值，是無法更新數據
      // obj.name = "blue";
      // 只能使用代理對象 proxy 來更新數值
      // user.name = "Red";
      // user.age += 2;
      // user.friend.name += "===";
      // user -> 代理對象, obj -> 目標對象
      // ----
      // user, obj 添加一個新的屬性，哪個會影響響應式更新
      // obj.gender = "boy"; 無法響應式新增(可以刪除資料，但畫面不會更新)
      user.gender = "boy"; // 可以響應式新增
      // user, obj 刪除一個新的屬性，哪個會影響響應式更新
      // delete obj.age; 無法響應式刪除(可以刪除資料，但畫面不會更新)
      delete user.age; // 可以響應式刪除
      // 如果操作代理對象，目標對象數據會隨之變化，介面也會更新
      // 代理對象
      // 通過當前的代理對象找到該對象中的屬性，更改屬性中的數組
      // user.friend.cars[1] = "ZoZo";
      // 通過當前的代理對象把目標對象某個數組新增一個屬性
      user.friend.cars[3] = "AUDI";
    };
    return {
      user,
      add,
    };
  },
});
</script>
