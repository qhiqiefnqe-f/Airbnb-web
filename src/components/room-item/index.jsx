import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { RoomItemWrapper } from './style'
import Rating from '@mui/material/Rating'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {
  // 获取传入的参数
  const { roomList, itemWidth = '25%', handleItemClick } = props

  // 获取ref对象
  const CarouselRef = useRef()

  // 记录当前图片的索引并将索引传入到indicator组件中使用
  const [ itemIndex, setItemIndex ] = useState(0)

  // 事件处理函数
  function btnClickHandle(isRight = true, e) {
    // 阻止事件冒泡
    e.stopPropagation()
    // 判断是点击的那个按钮, 如果是点击右侧那么就跳转下一张图片, 反之则跳转到上一张图片
    isRight ? CarouselRef.current.next(): CarouselRef.current.prev()

    // 拿到最新的索引
    let newIndex = isRight ? itemIndex +1: itemIndex-1

    // 进行边界判断
    const length = roomList?.picture_urls?.length
    if(newIndex < 0) newIndex = length - 1
    if(newIndex === length) newIndex = 0

    // 将新的索引值赋值给保存的state状态
    setItemIndex(newIndex)
  }

  // 监听按钮的点击
  function dotClick(index, e) {
    // 阻止事件冒泡
    e.stopPropagation()
    // 点击按钮后修改按钮位置
    setItemIndex(index)
    // 跳转到索引对应当前列表的图片中
    CarouselRef.current.goTo(index)
  }

  // 子元素赋值
  const swiper = (
    <div className="swiper">
      <div className="indicator">
        <Indicator itemIndex={ itemIndex } >
          {
            roomList?.picture_urls?.map((item, index) => {
              return (
                <div className="dot-item" key={item}>
                  <span
                    onClick={e => dotClick(index, e)}
                    className={classNames('dot', 
                    { 'active': index === itemIndex, })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <div className="control">
        <div className="btn left" onClick={e => btnClickHandle(false, e)} >
          <IconArrowLeft width='24px' height='24px' />
        </div>
        <div className="btn right" onClick={e => btnClickHandle(true, e)} >
          <IconArrowRight width='24px' height='24px' />
        </div>
      </div>
      <Carousel dots={false} ref={CarouselRef} >
        {
          roomList?.picture_urls?.map(item => {
            return (
              <div className="cover" key={item} >
                <img className='img' src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
    </div>)

  const cover = (
    <div className="cover">
      <img className='img' src={roomList?.picture_url} alt="" />
    </div>
  )

  // 监听图片的点击后将事件和数据传递出去 并在外面保存数据之后跳转到详情页
  function itemClickHandle() {
    if(handleItemClick) handleItemClick(roomList)
  }

  return (
    <RoomItemWrapper 
      textcolor={ roomList?.verify_info?.text_color || '#39576a' }
      itemWidth={ itemWidth }
      onClick={itemClickHandle}>
      <div className="inner">
        {
          roomList.picture_urls ? swiper: cover
        }
        <div className="desc">{ roomList?.verify_info.messages?.join('·') }</div>
        <div className="name">{ roomList?.name }</div>
        <div className="price">￥{ roomList?.price }/晚</div>
        <div className="bottom">
          <Rating 
            name="half-rating-read" 
            defaultValue={roomList?.star_rating ?? 5 }
            precision={0.1}
            sx={{ color: '#00848a', fontSize: '12px' }}
          />
          {
            roomList?.bottom_info && (
              <span className='text'>·{ roomList?.bottom_info.content }</span>
            )
          }
        </div>
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  roomList: PropTypes.object
}

export default RoomItem