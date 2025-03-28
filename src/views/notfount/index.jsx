import React, { memo } from 'react'
import { NotFountWrapper } from './style'

const NotFount = memo(() => {
  return (
    <NotFountWrapper>
      <h2 className='notfound'>
        您输入的路径不正确, 请检查后进行后续操作, 或者联系管理员: 初识刘茜茜
      </h2>
    </NotFountWrapper>
  )
})

export default NotFount