import { useEffect, useState } from "react";

export const isFalsy = (value: number) => (value === 0 ? false : !value);

export const clearObject = (object) => {
  // Object.assign({},object)
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
};

// export const useMount = (callback) => {
//   useEffect(() => {
//     callback()
//   })
// }

// const debounce = (func,delay) => {
//   let timeout;
//   return (...params)=>{
//     if(timeout){
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(() => {
//       func(...params)
//     }, delay);
//   }
// }

// const log = debounce(() => console.log('call'),5000)
// log('ccc');
// log();
// log();

// 一定要理解这3个函数 （log）都是同步操作，所以它们在0-1s这个时间段内瞬间完成的

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // 每次在value变化以后，设置一个定时器
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    // 每次在上一个useEffect 处理完以后再运行，第二个timeout被第3个清理，回调函数会在下次render前或者组件销毁的时候调用
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debounceValue;
};
