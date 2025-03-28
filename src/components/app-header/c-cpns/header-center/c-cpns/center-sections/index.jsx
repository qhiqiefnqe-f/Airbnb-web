import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { CenterSectionsWrapper } from './style'

const CenterSections = memo((props) => {
  const { sections } = props
  return (
    <CenterSectionsWrapper>
      {
        sections.map((item, index) => {
          return (
            <a className="item" href='https://www.airbnb.cn/s/%E4%B8%9C%E5%8D%97%E4%BA%9A/homes' >
              <div className="info">
                <div className="title">{ item.title }</div>
                <div className="desc">{ item.desc }</div>
              </div>
              { index !== sections.length -1 && <div className='divider'></div> }
            </a>
          )
        })
      }
    </CenterSectionsWrapper>
  )
})

CenterSections.propTypes = {
  sections: PropTypes.array
}

export default CenterSections