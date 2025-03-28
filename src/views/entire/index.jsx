import React, { memo, useEffect } from 'react'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { useDispatch } from 'react-redux'
import { fetchEnitreDataAction } from '@/store/modules/entire/createActions'
import { EntireWrapper } from './style'
import { changeheaderConfigAction } from '@/store/modules/main'

const Entire = memo(() => {

  // 获取dispatch
  const dispatch = useDispatch()
  
  // 在useEffect生命周期的回调函数中派发dispatch发送网络请求获取数据
  useEffect(() => {
    dispatch(fetchEnitreDataAction())
    dispatch(changeheaderConfigAction({ isFixed: true, isOpaque: false }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRooms></EntireRooms>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  )
})

export default Entire