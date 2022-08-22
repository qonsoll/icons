import { Col, Container, Row } from '@qonsoll/react-design'
import React, { useState } from 'react'

import ICONS_NAMES from '../../constants/namesMap'
import IconSimpleView from './IconSimpleView'
import { InputStyled } from './ListIcons.styled'

const ListIcons = (props) => {
  // [ADDITIONAL_HOOKS]
  const { onClick, size, stroke, strokeWidth, fill } = props

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
        {Object.keys(ICONS_NAMES)
          .filter((name) => name.toLowerCase().includes(filter))
          .map((iconName, index) => (
            <Col key={index} cw="2">
              <IconSimpleView
                name={iconName}
                onClick={onClick}
                iconActions={iconActions}
              />
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default ListIcons
