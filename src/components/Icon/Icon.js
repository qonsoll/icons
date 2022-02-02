import React, { cloneElement } from 'react'
import ICONS_NAMES from '../../constants/namesMap'
import PROP_TYPES from '../../constants/iconPropTypes'
import { Box } from '@qonsoll/react-design'

const Icon = (props) => {
  const { name, fill, size, minWidth, minHeight, ...rest } = props

  const isIconExist = !!ICONS_NAMES?.[name]

  return (
    <Box
      minWidth={minWidth || size}
      minHeight={minHeight || size}
      display="flex"
      {...rest}
    >
      {isIconExist ? cloneElement(ICONS_NAMES?.[name], { fill, size }) : null}
    </Box>
  )
}

Icon.propTypes = PROP_TYPES

export default Icon
