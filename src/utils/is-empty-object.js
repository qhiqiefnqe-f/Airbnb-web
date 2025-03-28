// 接收一个对象判断对象中的key有没有长度来决定要不要展示对应组件
export function isEmptyObj(obj) {
  return !!Object.keys(obj).length
}