import {
  IconSimpleViewStyled,
  IconWrapper,
  TextStyled
} from './IconSimpleView.styled'

import { Icon } from '../..'
import React from 'react'
import { useShareIconName } from '../hooks'

const IconSimpleView = ({ name, onClick, iconActions }) => {
  // [ADDITIONAL_HOOKS]
  const shareIconName = useShareIconName()

  // [HELPER_FUNCTIONS]
  const handleCopyIcon = (e) => {
    shareIconName(name, e)
    onClick(name)
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

export default IconSimpleView
