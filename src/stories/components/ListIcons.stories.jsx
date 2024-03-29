import 'antd/dist/antd.css'

import ListIcons from './ListIcons'
import React from 'react'

export default {
  title: 'Example/Icon',
  component: ListIcons,
  argTypes: {
    size: { control: 'text' },
    fill: { control: 'color' },
    showInActionsCopied: { action: 'Copied' }
  }
}

const Template = (args) => <ListIcons {...args} />

export const AllIcons = Template.bind({})
