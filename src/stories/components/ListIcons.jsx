import { Col, Container, Row } from '@qonsoll/react-design'
import React, { useState } from 'react'

import IconSimpleView from './IconSimpleView'
import { InputStyled } from './ListIcons.styled'
import PropTypes from 'prop-types'
import { filterIcons } from '../helpers'

const ListIcons = (props) => {
  const { showInActionsCopied, size, stroke, strokeWidth, fill } = props

  // [STATE_HOOKS]
  const [filter, setFilter] = useState('')

  // [HELPER_FUNCTIONS]
  const handleChange = (e) => setFilter(e.target.value.toLocaleLowerCase())

  // [COMPUTED_PROPERTIES]
  const iconActions = { size, stroke, strokeWidth, fill }

  return (
    <Container>
      <Row noGutter>
        <Col cw="12">
          <InputStyled
            onChange={handleChange}
            placeholder="Write icon name..."
          />
        </Col>
        {filterIcons(filter).map((iconName, index) => (
          <Col key={`IconSimpleView-${index}`} cw="2">
            <IconSimpleView
              name={iconName}
              showInActionsCopied={showInActionsCopied}
              iconActions={iconActions}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
ListIcons.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  showInActionsCopied: PropTypes.func,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default ListIcons
