import React, { memo, useEffect, useState } from 'react'
import { HeaderRightWrapper } from './style'
import IconGlobal from '@/assets/svg/Icon_global'
import IconMenu from '@/assets/svg/Icon_menu'
import IconAvatar from '@/assets/svg/Icon_avatar'

const HeaderRight = memo(() => {
  
  // 组件内的state状态
  const [ isShow, setIsShow ] = useState(false)

  // 组件内的副作用(生命周期函数)
  useEffect(() => {
    // 修改state状态关闭弹窗的函数
    function changeOffClick() {
      setIsShow(false)
    }
    window.addEventListener('click', changeOffClick, true)
    return () => {
      window.removeEventListener('click', changeOffClick ,true)
    }
  }, [])

  // 点击事件处理函数
  function changeIsShow() {
    setIsShow(true)
  }

  return (
    <HeaderRightWrapper>
      <div className='btns'>
        <span className='btn'>
          <a href="https://www.airbnb.cn/" className='common'>登录</a>
        </span>
        <span className='btn'>
          <a href="https://www.airbnb.cn/" className='common'>注册</a>
        </span>
        <span className='btn' >
          <a href="https://www.airbnb.cn/" className='common' ><IconGlobal /></a>
        </span>
        <div className="profile" onClick={ changeIsShow } >
         <span className='menu'>
          <IconMenu/>
         </span>
         <span className='avatar'>
          <IconAvatar/>
          {
            isShow ? "": <div className='message' ></div>
          }
         </span>
          {
            isShow && (
              <div className="panel">
                <div className="top-r">
                  <div className="item" >
                    <a href="https://www.airbnb.cn/" className='common registered' >注册</a>
                  </div>
                  <div className="item" >
                    <a href="https://www.airbnb.cn/" className='common login' >登录</a>
                  </div>
                </div>
                <div className="bottom-r">
                  <div className="item">
                    <a href="https://www.airbnb.cn/" className='common' >出租房源</a>
                  </div>
                  <div className="item">
                    <a href="https://www.airbnb.cn/" className='common'>开展体验</a>
                  </div>
                  <div className="item">
                    <a href="https://www.airbnb.cn/help" className='common help' >帮助</a>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </HeaderRightWrapper>
  )
})

export default HeaderRight