<template>
  <h2>計算(cpmputed)屬性與監視(watch)</h2>
  <fieldset>
    <legend>姓名操作</legend>
    名字：<input
      type="text"
      placeholder="請輸入姓氏"
      v-model="user.firstName"
    />
    <br />
    姓氏：<input type="text" placeholder="請輸入名字" v-model="user.lastName" />
  </fieldset>
  <fieldset>
    <legend>計算屬性與監視的演釋</legend>
    <legend>姓名操作</legend>
    姓名：<input type="text" placeholder="顯示姓名" v-model="fullName1" />
    <br />
    姓名：<input type="text" placeholder="顯示姓名" v-model="fullName2" />
    <br />
    姓名：<input type="text" placeholder="顯示姓名" v-model="fullName3" />
  </fieldset>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  watch,
  ref,
  watchEffect,
} from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const user = reactive({
      firstName: "Raquel",
      lastName: "Yang",
    });
    // 通做計算屬性的方式來顯示第一個姓名
    // vue3 的計算屬性 computed 裡面放一個 function
    // 計算屬性如果只傳入一個 function 表示的是 get
    // 返回的是 ref 的對象
    // 第一個姓名
    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName;
    });
    // 如果傳的是 get(), set() computed 內需要傳入對象 {}
    // 第二個姓名
    const fullName2 = computed({
      get() {
        return user.firstName + "_" + user.lastName;
      },
      set(val: string) {
        const name = val.split("_");
        user.firstName = name[0];
        user.lastName = name[1];
      },
    });
    // 監視指定的數據 watch(變數,function,其他方法)
    // 第三個姓名
    // watch(user, (val) => {},{ immediate: true, deep: true });
    // { immediate: true } 在初始時就先跑一次監視
    // { deep: true } 深度監視
    const fullName3 = ref("");
    watch(
      user,
      ({ firstName, lastName }) => {
        fullName3.value = firstName + "_" + lastName;
      },
      { immediate: true, deep: true }
    );
    // 另外一種監視 watchEffect
    // 不需配置 { immediate: true } ,會在初始先跑一次
    // watchEffect(() => {
    //   fullName3.value = user.firstName + "_" + user.lastName;
    // });
    // 監視 fullName3 並改變 firstName, lastName
    watchEffect(() => {
      const name = fullName3.value.split("_");
      user.firstName = name[0];
      user.lastName = name[1];
    });
    // watch 可以監視多個數據
    // user.lastName, user.firstName 不是響應式數據, fullName3 是響應式數據
    // 當 watch 監視非響應式數據時，代碼需要改一下
    watch([() => user.lastName, () => user.firstName, fullName3], () => {
      console.log("===");
    });
    return { user, fullName1, fullName2, fullName3 };
  },
});
</script>
