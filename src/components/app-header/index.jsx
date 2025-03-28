import React, { memo, useRef, useState } from 'react'
import HeaderLeft from './c-cpns/header-left/header-left'
import HeaderCenter from './c-cpns/header-center/header-center'
import HeaderRight from './c-cpns/header-right/header-right'
import { AppAreaHeaderWrapper, AppHeaderWrapper } from './style'
import { useSelector } from 'react-redux'
import { useScroll } from '@/hooks'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  
  // 记录是否显示或隐藏搜素栏的状态
  const [ isSearch, setIsSearch ] = useState(false)

  // 从store中获取状态
  const { headerConfig } = useSelector(state => {
    return {
      headerConfig: state.main.headerConfig
    }
  })

  // 解构获取的状态
  const { isFixed, isOpaque } = headerConfig

  // 监听页面的滚动后执行相应关闭search状态的逻辑
  // 获取当前页面滚Y轴滚动的距离
  const { scrollY } = useScroll()

  // 记录当前页面滚动的位置
  const preScrollY = useRef(0)

  // 如果当前不是搜索状态那么实时记录并保存当前页面滚动的位置
  if(!isSearch) preScrollY.current = scrollY

  // 如果为搜索页面状态 且页面滚动的距离 减去上一次记录的滚动距离后 大于30或小于30 那么就关闭搜索状态
  if(isSearch && Math.abs(scrollY - preScrollY.current)  > 30 ) {
    setIsSearch(false)
  }

  // 如果为透明状态且在当前页面的顶部那么就修改对应样式
  const isAlpha = isOpaque && scrollY === 0 
  

  return (
    <ThemeProvider theme={ { isAlpha } }>
      <AppHeaderWrapper isFixed={isFixed} >
        <div className="content">
          <div className="top">
            <HeaderLeft/>
            <HeaderCenter 
              isSearch={ isAlpha || isSearch } 
              centerClick={ e => setIsSearch(true) }/>
            <HeaderRight/>
          </div>
          <AppAreaHeaderWrapper isSearch={ isAlpha || isSearch } />
        </div>
        { isSearch && <div className="c-cover" onClick={ e => setIsSearch(false) } ></div> }
    </AppHeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader