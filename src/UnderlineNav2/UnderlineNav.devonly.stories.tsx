import React from 'react'
import {Meta} from '@storybook/react'
import {UnderlineNav} from './index'

export default {
  title: 'Drafts/Components/UnderlineNav/DevOnly',
} as Meta

export const IllegalState = () => {
  return (
    <UnderlineNav aria-label="Repository">
      <UnderlineNav.Item aria-current="page">Code</UnderlineNav.Item>
      <UnderlineNav.Item aria-current="page">Issues</UnderlineNav.Item>
      <UnderlineNav.Item aria-current="page">Pull Requests</UnderlineNav.Item>
    </UnderlineNav>
  )
}
