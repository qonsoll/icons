import ListIcons from './ListIcons'
import React from 'react'

export default {
  title: 'Example/Icon',
  component: ListIcons,
  argTypes: {
    size: { control: 'text' },
    fill: { control: 'color' },
    stroke: { control: 'color' },
    strokeWidth: { control: 'text' },
    onClick: { action: 'copied' }
  }
}

const Template = (args) => <ListIcons {...args} />

export const AllIcons = Template.bind({})
