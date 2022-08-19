import React, { cloneElement } from 'react'

import { Box } from '@qonsoll/react-design'
import ICONS_NAMES from '../../constants/namesMap'
import PROP_TYPES from '../../constants/iconPropTypes'

const Icon = (props) => {
  const {
    name,
    fill,
    size,
    minWidth,
    minHeight,
    spin,
    stroke,
    strokeWidth,
    ...rest
  } = props

  // [COMPUTED PROPERTIES]
  const isIconExist = !!ICONS_NAMES?.[name]

  return (
    <Box
      minWidth={minWidth || size}
      minHeight={minHeight || size}
      display="flex"
      {...rest}
    >
      {isIconExist
        ? cloneElement(ICONS_NAMES?.[name], {
            fill,
            size,
            spin,
            stroke,
            strokeWidth
          })
        : null}
    </Box>
  )
}

Icon.propTypes = PROP_TYPES

export default Icon
