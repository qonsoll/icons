import styled from 'styled-components'

const CardStyled = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  display: flex;
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

const ListIconStyled = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-columns: -webkit-max-content;
  grid-auto-columns: max-content;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  text-align: center;
`

const TextStyled = styled.span`
  display: inline-block;
  font-size: 0.9rem;
  line-height: 1.25rem;
  overflow: hidden;
  user-select: all;
  white-space: pre-line;
`

export { CardStyled, ListIconStyled, TextStyled }
