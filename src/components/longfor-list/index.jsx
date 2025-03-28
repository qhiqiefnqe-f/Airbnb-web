import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForListWrapper } from './style'

const LongForList = memo((props) => {
  const { longForList } = props
  return (
    <LongForListWrapper>
      <div className='inner' >
        <div className="list-info">
          <img className="cover" src={ longForList?.picture_url }  alt="" />
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{ longForList?.city }</div>
            <div className="price">均价 { longForList?.price }</div>
          </div>
        </div>
      </div>
    </LongForListWrapper>
  )
})

LongForList.propTypes = {
  longForList: PropTypes.object
}

export default LongForList