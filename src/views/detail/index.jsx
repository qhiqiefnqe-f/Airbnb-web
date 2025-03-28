import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetailPicture from './c-cpns/detail-picture'
import { useDispatch } from 'react-redux'
import { changeheaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  
  // 获取dipastch
  const dispatch = useDispatch()

  // 在页面加载完毕的生命周期中调用dispatch修改对应状态
  useEffect(() => {
    dispatch(changeheaderConfigAction({ isFixed: false, isOpaque: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPicture/>
    </DetailWrapper>
  )
})

export default Detail