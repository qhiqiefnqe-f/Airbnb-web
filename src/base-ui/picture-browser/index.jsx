import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { PictureBrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'

const PictureBrowser = memo((props) => {

  // 获取传递的属性和函数
  const { pictureurls, closeClick } = props

  // 记录当前展示图片的索引
  const [ currentIndex, setCurrentIndex ] = useState(0)

  // 记录点击的按钮为左边还是右边
  const [isNext, setIsNext] = useState(true)

  // 记录显示还是隐藏下面图片
  const [isShowpict, setIsShowPict] = useState(true)
  
  // 在组件的useEffect Hook函数中监听组件的加载来实现取消滚动条，在组件卸载时实现添加滚动条
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  // 监听关闭按钮的点击, 并将事件传递出去然后 在外面隐藏图片浏览器组件
  function closeBtnClick() {
    if(closeClick) closeClick()
  }

  // 监听左右两边按钮的点击后切换图片
  function changeIndex(isRight) {
    setIsNext(isRight)
    let newIndex = isRight ? currentIndex +1: currentIndex -1
    if(newIndex < 0) newIndex = pictureurls.length - 1
    if(newIndex > pictureurls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
  }

  // 监听点击图片的处理事件
  function changePicClick(index) {
    // 修改动画是从左边出来还是从右边出来
    setIsNext(index > currentIndex)
    // 来根据点击的index修改当前索引来显示点击后的图片和指示器
    setCurrentIndex(index)
  }

  // 监听显示或隐藏图片的点击
  function isShowPicClick() {
    setIsShowPict(!isShowpict)
  }

  return (
    <PictureBrowserWrapper isNext={isNext} isShowpict={ isShowpict } >
      <div className="top">
        <div className="icon"  onClick={ e => closeBtnClick(e) } >
          <IconClose />
        </div>
      </div>
      <div className="swiper">
        <div className="control">
          <div className="btn left" onClick={ e => changeIndex(false)} >
            <IconArrowLeft width='77px' height='77px' />
          </div>
          <div className="btn right" onClick={ e => changeIndex(true)} >
            <IconArrowRight width='77px' height='77px' />
          </div>
        </div>
        <div className="center">
          <SwitchTransition mode='in-out' >
            <CSSTransition 
              key={pictureurls[currentIndex]} 
              timeout={200}
              classNames='pic' >
              <img src={ pictureurls[currentIndex] } alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="bottom">
        <div className="info">
          <div className="desc">
            <div className="count">
                <span>{ currentIndex + 1 }/{ pictureurls.length }: </span>
                <span>room Apartment图片{currentIndex + 1}</span>
            </div>
            <div className='text' onClick={isShowPicClick} >
              { isShowpict ? '隐藏': '显示' }图片列表
              { isShowpict ? <IconTriangleBottom/>: <IconTriangleTop/> }
            </div>
          </div>
          <div className="b-list">
            <Indicator itemIndex={currentIndex}>
              {
                pictureurls.map((item, index) => {
                  return (
                    <div 
                      className={ classNames("item", { 'active': currentIndex === index})}
                      onClick={e => changePicClick(index)}>
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureurls: PropTypes.array
}

export default PictureBrowser