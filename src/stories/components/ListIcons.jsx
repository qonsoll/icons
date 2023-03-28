import { Col, Row } from 'antd'
import React, { useState } from 'react'

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
    <Row gutter={[12, 12]}>
      <Col span={24}>
        <InputStyled onChange={handleChange} placeholder="Write icon name..." />
      </Col>
      {filterIcons(filter).map((iconName, index) => (
        <Col key={`IconSimpleView-${index}`} xs={8} sm={6} md={4}>
          <IconSimpleView
            name={iconName}
            showInActionsCopied={showInActionsCopied}
            size={size}
            fill={fill}
          />
        </Col>
      ))}
    </Row>
  )
}

ListIcons.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showInActionsCopied: PropTypes.func
}

export default ListIcons
