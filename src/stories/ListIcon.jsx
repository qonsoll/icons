import { Box, Col, Container, Input, Row } from '@qonsoll/react-design'
import { CardStyled, TextStyled } from './ListIcon.styled'
import React, { useCallback, useState } from 'react'

import ICONS_NAMES from '../constants/namesMap'
import { Icon } from '..'
import { message } from 'antd'

const useShareIdentifier = () =>
  useCallback((identifier, e) => {
    e && e?.stopPropagation()
    navigator?.clipboard?.writeText(identifier)
    message.success('Successfully copied', 5)
  }, [])

const Card = ({ name, onClick }) => {
  const shareIdentifier = useShareIdentifier()

  const handleCopyIcon = (e) => {
    shareIdentifier(name, e)
    onClick(name)
  }

  return (
    <CardStyled onClick={handleCopyIcon}>
      <Box display="flex" justifyContent="center" alignItems="center" mb="6px">
        <Icon name={name} />
      </Box>
      <TextStyled>{name}</TextStyled>
    </CardStyled>
  )
}

const ListIcon = ({ onClick }) => {
  const [filter, setFilter] = useState('')

  const handleChange = (e) => setFilter(e.target.value.toLocaleLowerCase())
  return (
    <Container>
      <Row noGutter>
        <Col cw="12">
          <Input
            onChange={handleChange}
            placeholder="Write icon name..."
            height="24px"
            mb="12px"
            px="6px"
          />
        </Col>
        {Object.keys(ICONS_NAMES)
          .filter((name) => name.toLowerCase().includes(filter))
          .map((iconName, index) => (
            <Col key={index} cw="2">
              <Card name={iconName} onClick={onClick} />
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default ListIcon
