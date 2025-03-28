import { useEffect, useState } from "react";
import { throttle } from 'underscore'

export function useScroll() {
  const [ scrollX, setScrollX ] = useState(0)
  const [ scrollY, setScrollY ] = useState(0)

  useEffect(() => {
    // 获取当前window滚动的距离并记录下来
    const setScollHandle = throttle(() => {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)

    window.addEventListener('scroll', setScollHandle)
    return () => {
      window.removeEventListener('scroll', setScollHandle)
    }
  })

  return { scrollX, scrollY }
}