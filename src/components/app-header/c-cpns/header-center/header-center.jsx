import React, { memo, useCallback, useState } from 'react'
import { HeaderCenterWrapper } from './style'
import IconSearch from '@/assets/svg/Icon_search'
import searchTitle from '@/assets/data/search_titles'
import CenterTitle from './c-cpns/center-title'
import CenterSections from './c-cpns/center-sections'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {

  // 从props中接收是否点为search状态和相应函数
  const { isSearch, centerClick } = props

  // 记录当前点击title的索引
  const [ currentIndex, setCurrentIndex ] = useState(0)
  
  // 获取title并传入给组件内部展示
  const title = searchTitle.map(item => {
    return item.title
  })

  // 获取section并传递给组件内展示
  const section = searchTitle.map(item => item.searchInfos)

  // 点击切换标题的事件
  const itemClick = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  // 点击切换search状态的事件
  function centerClickHandle() {
    if(centerClickHandle) centerClick()
  }

  return (
    <HeaderCenterWrapper >
        <CSSTransition
          in={!isSearch}
          classNames={'bar'}
          timeout={250}
          unmountOnExit={true}>
          <div 
            className='search-bar'
            onClick={ centerClickHandle } >
            <div className='text' >
              <span>搜索房源和体验</span>
            </div>
            <div className="icon">
              <IconSearch/>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={isSearch}
          classNames={'detail'}
          timeout={250}
          unmountOnExit={true}>
          <div className="search-detail">
            <CenterTitle title={title} itemClick={itemClick} />
            <div className="infos">
              <div className="section">
                <CenterSections sections={ section[currentIndex] }/>
              </div>
              <div className="icon">
                <IconSearch/>
              </div>
            </div>
          </div>
        </CSSTransition>
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter