import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { DetailPictureWrapper } from './style'
import PictureBrowser from '@/components/picture-browser'

const DetailPicture = memo(() => {

  // 定义显示或隐藏图片浏览器的状态, 默认隐藏
  const [ isShow, setIsShow ] = useState(false)

  const { itemData } = useSelector(state => {
    return {
      itemData: state.detail.itemData
    }
  }, shallowEqual)
  return (
    <DetailPictureWrapper>
      <div className="picture" onClick={ e => setIsShow(true) } >
        <div className="left">
          <div className="item">
            <img src={ itemData?.picture_urls?.[0] } alt="" />
            <div className="d-cover"></div>
          </div>
        </div>
        <div className="right">
          {
            itemData?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className='item' key={item}>
                  <img src={ item } alt="" />
                  <div className="d-cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="show-btn" onClick={e => setIsShow(true)} >显示图片</div>
      { isShow && 
        <PictureBrowser 
          pictureurls={ itemData?.picture_urls } 
          closeClick={ e => setIsShow(false) } /> }
    </DetailPictureWrapper>
  )
})

export default DetailPicture