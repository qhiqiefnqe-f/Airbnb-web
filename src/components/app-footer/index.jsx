import React, { memo } from 'react'
import { footerList } from '@/assets/data/footer'
import { AppFooterWrapper } from './style'

const AppFooter = memo(() => {
  
  return (
    <AppFooterWrapper>
      <div className='list' >
        {
          footerList.map((item, index) => {
            return (
              <div key={index} >
                <div className='title'>{ item.name }</div>
                {
                  item.list.map((item, index) => {
                    return <span className='content' key={index} >{ item }</span>
                  })
                }
              </div>
            )
          })
        }
      </div>

      <div className="footer">
      © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301
      </div>
    </AppFooterWrapper>
  )
})

export default AppFooter