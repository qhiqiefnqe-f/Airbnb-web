import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/homebanner/homebanner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/homeSectionv1'
import HomeSectionV2 from './c-cpns/homeSectionv2'
import HomeSectionV3 from './c-cpns/homeSectionv3'
import HomeLongFor from './c-cpns/homeLongFor'
import { isEmptyObj } from '@/utils'
import { changeheaderConfigAction } from '@/store/modules/main'


const Home = memo(() => {
  
  // 获取state
  const { goodPrice, highScore, disCount, hotRecommend, longFor, plus } = useSelector((state) => {
    return {
      goodPrice: state.home.goodPrice,
      highScore: state.home.highScore,
      disCount: state.home.disCount,
      hotRecommend: state.home.hotRecommend,
      longFor: state.home.longFor,
      plus: state.home.plus
    }
  }, shallowEqual)

  // 获取dipatch
  const dispatch = useDispatch()
  // 在useEffect Hook生命周期函数中通过调用dispatch来发送异步请求在store获取数据
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeheaderConfigAction({ isFixed: true, isOpaque: true }))
  }, [ dispatch ])

  
  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="context">
        { isEmptyObj(disCount) && <HomeSectionV2 infoData={ disCount } /> }
        { isEmptyObj(goodPrice) && <HomeSectionV1 infoData={ goodPrice } /> }
        { isEmptyObj(longFor) && <HomeLongFor infoData={ longFor } /> }
        { isEmptyObj(highScore) && <HomeSectionV1 infoData={ highScore }/> }
        { isEmptyObj(hotRecommend) && <HomeSectionV2 infoData={ hotRecommend }/>}
        { isEmptyObj(plus) && <HomeSectionV3 infoData={ plus } /> }
      </div>
    </HomeWrapper>
  )
})

export default Home