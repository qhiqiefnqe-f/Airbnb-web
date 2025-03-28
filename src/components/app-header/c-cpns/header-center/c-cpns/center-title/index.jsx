import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { CenterTitleWrapper } from './style'
import classNames from 'classnames'

const CenterTitle = memo((props) => {
  // 获取传入的数据
  const { title, itemClick } = props

  // 记录当前选中的索引来动态添加active
  const [ currentIndex, setCurrentIndex ] = useState(0)

  // 点击切换标题的事件
  function changeTitles(index) {
    setCurrentIndex(index)
    if(itemClick) itemClick(index)
  }
  return (
    <CenterTitleWrapper>
      {
        title.map((item, index) => {
          return (
            <div 
              onClick={e => changeTitles(index)} 
              className={classNames('item', { 'active': currentIndex === index })}>
              <span>{ item }</span>
              <span className="bottom"></span>
            </div>
          )
        })
      }
    </CenterTitleWrapper>
  )
})

CenterTitle.propTypes = {
  title: PropTypes.array
}

export default CenterTitle