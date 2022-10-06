import React from 'react'

const LetterSpacing2Outlined = (props) => {
  const { size = '24', fill = 'black' } = props

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 18H22M2 18L5 15M2 18L5 21M22 18L19 15M22 18L19 21M7 3H17M12 3V14"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default LetterSpacing2Outlined
