import ListIcons from './ListIcons'
import React from 'react'
import 'antd/dist/antd.css'

export default {
  title: 'Example/Icon',
  component: ListIcons,
  argTypes: {
    size: { control: 'text' },
    fill: { control: 'color' },
    stroke: { control: 'color' },
    strokeWidth: { control: 'text' },
    showInActionsCopied: { action: 'Copied' }
  }
}

const Template = (args) => <ListIcons {...args} />

export const AllIcons = Template.bind({})
