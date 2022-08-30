import {
  IconSimpleViewStyled,
  IconWrapper,
  TextStyled
} from './IconSimpleView.styled'

import { Icon } from '../../components'
import PropTypes from 'prop-types'
import React from 'react'
import { message } from 'antd'
import { useShareIconName } from '../hooks'

const IconSimpleView = (props) => {
  const { name, showInActionsCopied, size, fill } = props
  //  [COMPUTED_PROPERTIES]
  let sizeProp = size ? `size="${size}" ` : ''
  let fillProp = fill ? `fill="${fill}" ` : ''

  // [ADDITIONAL_HOOKS]
  const shareIconName = useShareIconName()

  // [HELPER_FUNCTIONS]
  const handleCopyIcon = (e) => {
    const iconComponent = `<Icon name="${name}" ${sizeProp}${fillProp}/>`
    shareIconName(iconComponent, e)
    showInActionsCopied(iconComponent)
    message.success({
      content: (
        <span>
          <code
            style={{
              background: '#f5f5f5',
              padding: '2px 4px',
              borderRadius: 4
            }}
          >
            {iconComponent}
          </code>{' '}
          copied 🎉
        </span>
      )
    })
  }

  return (
    <IconSimpleViewStyled onClick={handleCopyIcon}>
      <IconWrapper>
        <Icon name={name} size={size} fill={fill} />
      </IconWrapper>
      <TextStyled>{name}</TextStyled>
    </IconSimpleViewStyled>
  )
}
IconSimpleView.propTypes = {
  name: PropTypes.string,
  showInActionsCopied: PropTypes.func,
  fill: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default IconSimpleView
