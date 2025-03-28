import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  // 获取props
  const { title } = props

  // 显示内容
  let name = '查看全部'
  if(title) {
    name = `查看更多${title}的房源`
  }

  // 获取路由
  const navigate = useNavigate()
  // 跳转页面的处理函数
  function moreClickHandle() {
    // 回到顶部
    window.scrollTo(0, 0)
    navigate('/entire')
  }

  return (
    <SectionFooterWrapper color={ title ? '#00848A': '#000' } >
      <div className="info" onClick={ moreClickHandle } >
        <div className="text">{ name }</div>
        <IconMoreArrow/>
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  title: PropTypes.string
}

export default SectionFooter