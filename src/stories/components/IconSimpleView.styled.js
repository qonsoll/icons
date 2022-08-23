import styled from 'styled-components'

const IconSimpleViewStyled = styled.div`
  cursor: pointer;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 6px;
  padding: 12px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  :hover {
    box-shadow: rgba(208, 255, 0, 0.02) 0px 1px 3px 0px,
      rgba(102, 72, 191, 1) 0px 0px 0px 1px;
  }
`

const TextStyled = styled.span`
  display: inline-block;
  font-size: 0.9rem;
  line-height: 1.25rem;
  overflow: hidden;
  user-select: all;
  white-space: pre-line;
  overflow: hidden;
  text-overflow: ellipsis;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
`

export { IconSimpleViewStyled, TextStyled, IconWrapper }
