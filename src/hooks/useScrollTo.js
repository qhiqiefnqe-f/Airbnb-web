import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollTo() {
  const location = useLocation()
  useEffect(() => {
    // 如果路由的路径发生改变那么就直接滚动到顶部位置
    window.scrollTo(0, 0)
  }, [location.pathname])
}