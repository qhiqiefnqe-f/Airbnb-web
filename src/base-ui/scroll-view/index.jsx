import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  // 定义是否显示隐藏按钮的状态, 默认为false因为需要等到服务器请求下来数据之后才可以显示按钮
  const [ isShowLeft, setShowLeft ] = useState(false)
  const [ isShowRight, setShowRight ] = useState(false)

  // 记录当前滚动元素的索引来获取offset偏移量
  const [currentElIndex, setElIndex] = useState(0)

  // 利用ref的特性(无论组件重新渲染多少次都返回上一次的值)来记录一共可滚动区域, 用来实现是否显示隐藏对应按钮的逻辑操作
  const totalDistanceRef = useRef(0)

  // 获取通过插槽传入元素的Ref
  const slotRef = useRef()

  // 在effect生命周期回调函数中做一些判断逻辑来决定是否显示隐藏对应按钮
  useEffect(() => {
   const scrollWidth =  slotRef.current.scrollWidth // 元素一共可以占据的宽度
   const clientWidth = slotRef.current.clientWidth // 本身占据的宽度
   const totalDistance = scrollWidth - clientWidth // 可滚动的区域
   setShowRight(totalDistance > 0) // 可滚动区域如果大于0说明还可以滚动那么就显示按钮
   totalDistanceRef.current = totalDistance // 记录一共可滚动的区域
  }, [props.children])

  // 事件处理函数
  function controlBtnClick(isRightBtn) {
    // 点击后元素的索引
    const newIndex = isRightBtn ? currentElIndex + 1: currentElIndex - 1 
    const newEl = slotRef.current.children[newIndex] // 点击后的元素
    const newElOffset = newEl.offsetLeft // 点击后元素距离左边的offset偏移量
    setElIndex(newIndex) // 记录最新的索引值
    slotRef.current.style.transform = `translate(-${newElOffset}px)` // 每次滚动的距离
    setShowRight(totalDistanceRef.current > newElOffset) // 如果可滚动的区域大于当前元素距离左边的偏移量, 那么就就显示对应按钮, 相反则隐藏按钮
    setShowLeft(newElOffset > 0) // 如果左边偏移量大于0说明已经滚动, 那么左边按钮应该显示, 反之如果没有大于0说明没有滚动应该隐藏
  }

  return (
    <ScrollViewWrapper>
      { isShowLeft && (
         <div className='control left' onClick={e => controlBtnClick(false)} >
          <IconArrowLeft/>
         </div>
      )}
      { isShowRight && (
        <div className='control right' onClick={e => controlBtnClick(true)} >
          <IconArrowRight/>
        </div>
      )}

      <div className="scroll-content">
        <div className="slot" ref={ slotRef } >
          { props.children }
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView