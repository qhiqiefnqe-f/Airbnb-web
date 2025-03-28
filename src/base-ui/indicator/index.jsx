import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {

  // 获取传入当前点击元素的索引
  const { itemIndex } = props

  // 获取列表ref对象
  const listRef = useRef()

  // 在组件被渲染完毕生命周期的回调函数中做一些逻辑操作, 一旦获取的元素索引发生改变则会重新执行useEffect中传入的回调函数
  useEffect(() => {
    // 在传入的列表内获取点击后的元素
    const currentEl = listRef.current.children[itemIndex]
    // 拿到点击后元素的offsetLeft
    const currentElLeft = currentEl.offsetLeft
    // 拿到点击后元素的一半宽度
    const currentElWidth = currentEl.clientWidth
    // 拿到整个列表元素的宽度
    const listElWidth = listRef.current.clientWidth
    // 拿到整个元素的宽度包括超出部分
    const listElScrollWidth = listRef.current.scrollWidth
    // 利用当前元素的offset 加上 当前元素的一半宽度 减去 整个列表元素宽度的一半 来获取最终元素需要移动的距离
    let distance = currentElLeft + currentElWidth * 0.5 - listElWidth * 0.5
    // 如果要滚动的距离为负数 那么就将要滚动的距离等于0
    if(distance < 0) distance = 0 // 左边边界判断
    const totalDistance = listElScrollWidth - listElWidth// 拿到最多可以滚动的距离
    // 如果要滚动的距离已经超出可滚动距离那么 就将要滚动的距离等于最多滚动的距离
    if(distance > totalDistance) distance = totalDistance // 右边边界判断

    // 移动整个列表元素的translate
    listRef.current.style.transform = `translate(${ -distance }px)`
  }, [itemIndex])

  return (
    <IndicatorWrapper>
      <div className="i-list" ref={ listRef } >
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  itemIndex: PropTypes.number
}

export default Indicator