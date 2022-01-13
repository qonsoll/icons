import React, { Fragment, cloneElement } from 'react'
import ICONS_NAMES from '../../constants/namesMap'
import PROP_TYPES from '../../constants/iconPropTypes'

const Icon = (props) => {
  const { name, fill, size } = props

  const isIconExist = !!ICONS_NAMES?.[name]

  return (
    <Fragment>
      {isIconExist ? cloneElement(ICONS_NAMES?.[name], { fill, size }) : null}
    </Fragment>
  )
}

Icon.propTypes = PROP_TYPES

export default Icon
