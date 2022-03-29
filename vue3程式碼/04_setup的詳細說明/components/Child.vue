<template>
  <h3>Child 子層</h3>
  <h3>msg:{{ msg }}</h3>
  <!-- {{ count }} -->
  <button @click="emitxxx">分發事件</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Child",
  props: ["msg"],
  // setup 細節問題
  // setup 是在 beforeCreate 生命週期之前執行，且只執行一次
  // 由此推斷 setup 在執行的時候，當前組建還沒被創立出來，意味著：組件的 this 對象不能使用
  // this === undefined 就不能使用 this 去掉用 data / computed / methods / props 中相關內容
  // composition API 相關的函式也不可使用
  // setup 中的返回值 (return) 是一個對象，內部的屬性與方法是給 html 模板使用
  // setup 中的對象內部屬性和 data 函數中 return 對象屬性都可以在 html 模板使用
  // setup 中的對象內部屬性和 data 函數中 return 對象屬性會合併為組件對象屬性
  // setup 中的對象中的方法和 data 函數中 return 對象方法會合併為組件對象屬性
  // 在 vue3 中盡量不要混合使用 data / setup, methods / setup，在 setup 不能拿取到 data / methods 的資料(this)，因為 setup 在 beforeCreate 就執行了
  // setup 不能是 async 的函數，因為返回值不在是 return 對象而是 promise，模板看不到 return 對象中屬性
  // beforeCreate() {
  //   console.log("beforeCreate 執行了");
  // },
  // setup(props, context) {
  // setup context 參數可以解構，使用 emit 時就可以直接寫 emit 而非 context.emit
  setup(props, { attrs, slots, emit }) {
    // props 他是一個對象，裡面有父級組件向子級組件傳遞的數據，且是子級組件中使用的 props 接收到的所有屬性
    // context 參數是一個對象，裡面有個 attrs 對象(獲取當組件標籤上所有的屬性與對象，該屬性沒有在 props 中沒有接收的所有對象相當於 this.$attrs ), emit 方法(分發事件), slots 對象(插槽)
    // console.log(props.msg);
    // console.log(context.attrs.msg2);
    console.log("setup 執行了", this);
    const showMsg1 = () => {
      console.log("setup 中的 showMsg1()");
    };
    function emitxxx() {
      // 向父層傳遞資料
      // context.emit("xxx", "++");
      emit("xxx", "++");
    }
    return {
      // setup 中一般都是返回屬性對象，對象中的屬性方法都可以在 html 模板中使用
      showMsg1,
      emitxxx,
    };
  },
  // data() {
  //   return {
  //     count: 10,
  //   };
  // },
  // mounted() {
  //   // proxy
  //   console.log(this);
  // },
  // methods: {
  //   showMsg2() {
  //     console.log("methods 中的 showMsg2()");
  //   },
  // },
});
</script>
