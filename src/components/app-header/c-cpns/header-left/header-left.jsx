import React, { memo } from 'react'
import { HeaderLeftWrapper } from './style'
import IconLogo from '@/assets/svg/Icon_logo'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
  
  const navigate = useNavigate()
  function logoClick() {
    navigate(-1)
  }

  return (
    <HeaderLeftWrapper>
      <div className='logo' onClick={ logoClick } ><IconLogo/></div>
    </HeaderLeftWrapper>
  )
})

export default HeaderLeft