import { message } from 'antd'
import {
  IconSimpleViewStyled,
  IconWrapper,
  TextStyled
} from './IconSimpleView.styled'

import { Icon } from '../../components'
import PropTypes from 'prop-types'
import React from 'react'
import { useShareIconName } from '../hooks'

const IconSimpleView = (props) => {
  const { name, showInActionsCopied, iconActions } = props
  // [ADDITIONAL_HOOKS]
  const shareIconName = useShareIconName()

  // [HELPER_FUNCTIONS]
  const handleCopyIcon = (e) => {
    const iconComponent = `<${name} />`
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
        <Icon name={name} {...iconActions} />
      </IconWrapper>
      <TextStyled>{name}</TextStyled>
    </IconSimpleViewStyled>
  )
}
IconSimpleView.propTypes = {
  name: PropTypes.string,
  showInActionsCopied: PropTypes.func,
  iconActions: PropTypes.object
}

export default IconSimpleView
