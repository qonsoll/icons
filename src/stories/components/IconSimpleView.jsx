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
    shareIconName(name, e)
    showInActionsCopied(name)
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
