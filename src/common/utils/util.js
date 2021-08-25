/**
 * 防抖函数
 */
export function debounce(func, wait) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
/**
 * 节流函数
 */
export function throttle(func, wait) {
  let finish = true;
  return function (...args) {
    if (!finish) return;
    finish = false;
    setTimeout(function () {
      func.apply(args);
      finish = true;
    }, wait)
  }
}