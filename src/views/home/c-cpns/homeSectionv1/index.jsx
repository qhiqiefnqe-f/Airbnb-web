import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionList from '@/components/section-list'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  const { infoData } = props
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title={ infoData.title } subTitle={ infoData.subtitle } />
      <SectionList roomList={ infoData.list } itemWidth='25%' />
      <SectionFooter/>
    </HomeSectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1