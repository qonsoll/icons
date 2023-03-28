import React, { useState } from 'react'

import Box from '../components/Box'
import IconSimpleView from './IconSimpleView'
import { InputStyled } from './ListIcons.styled'
import PropTypes from 'prop-types'
import { filterIcons } from '../helpers'

const ListIcons = (props) => {
  const { showInActionsCopied, size, fill } = props

  // [STATE_HOOKS]
  const [filter, setFilter] = useState('')

  // [HELPER_FUNCTIONS]
  const handleChange = (e) => setFilter(e.target.value.toLocaleLowerCase())

  return (
    <Box width="100%" display="flex">
      <Box width="inherit">
        <InputStyled onChange={handleChange} placeholder="Write icon name..." />
      </Box>
      {filterIcons(filter).map((iconName, index) => (
        <Box key={`IconSimpleView-${index}`} width="30%" mr={2}>
          <IconSimpleView
            name={iconName}
            showInActionsCopied={showInActionsCopied}
            size={size}
            fill={fill}
          />
        </Box>
      ))}
    </Box>
  )
}

ListIcons.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showInActionsCopied: PropTypes.func
}

export default ListIcons
