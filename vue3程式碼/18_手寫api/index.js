// shallowReactive 與 reactive

// 定義一個 reactiveHanlder 處理對象
const reactiveHanlder = {
  get(target, prop) {
    const result = Reflect.get(target, prop);
    console.log("攔截讀取數據", prop, result);
    return result;
  },
  set(target, prop, value) {
    const result = Reflect.set(target, prop, value);
    console.log("攔截修改或新增數據", prop, value);
    return result;
  },
  deleteProperty(target, prop) {
    const result = Reflect.deleteProperty(target, prop);
    console.log("攔截刪除數據", prop, value);
    return result;
  },
};

// 定義一個 shallowReactive 函數，需傳入一個目標對象
function shallowReactive(target) {
  // 判斷當前目標是不是 object類型(對象 / 數組)
  if (target && typeof target === "object") {
    return new Proxy(target, reactiveHanlder);
  }
  // 如果傳入的對象是基本類型的數據，直接回傳
  return target;
}

// 定義一個 reactive 函數，傳入一個目標對象
function reactive(target) {
  // 判斷當前目標是不是 object類型(對象 / 數組)
  if (target && typeof target === "object") {
    // 對數組或對象中所有數據進行 reactive 遞迴處理
    // 先判斷當前的數據是不是數組[]
    if (Array.isArray(target)) {
      // 數組做遞迴操作
      target.forEach((item, index) => {
        target[index] = reactive(item);
      });
    } else {
      // 先判斷當前的數據是不是對象{}
      // 對象做遞迴操
      Object.keys(target).forEach((key) => {
        target[key] = target[key];
      });
    }

    return new Proxy(target, reactiveHanlder);
  }
  // 如果傳入的對象是基本類型的數據，直接回傳
  return target;
}
