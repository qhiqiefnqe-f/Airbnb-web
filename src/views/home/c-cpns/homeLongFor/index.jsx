import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeLongForWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongForList from '@/components/longfor-list'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongFor = memo((props) => {
  const { infoData } = props
  return (
    <HomeLongForWrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <div className="content">
        <ScrollView>
          {
            infoData.list.map(item => {
              return <LongForList longForList={item} key={item.city} />
            })
          }
        </ScrollView>
      </div>
    </HomeLongForWrapper>
  )
})

HomeLongFor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongFor