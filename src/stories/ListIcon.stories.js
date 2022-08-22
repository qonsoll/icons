import ListIcon from './ListIcon'
import React from 'react'

export default {
  title: 'Example/Icon',
  component: ListIcon,
  argTypes: { onClick: { action: 'copied' } }
}

const Template = (args) => <ListIcon {...args} />

export const AllIcons = Template.bind({})
