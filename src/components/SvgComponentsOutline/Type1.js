import React from 'react'

const Type1Outlined = (props) => {
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
        d="M4 7C4 6.06812 4 5.60218 4.15224 5.23463C4.35523 4.74458 4.74458 4.35523 5.23463 4.15224C5.60218 4 6.06812 4 7 4H17C17.9319 4 18.3978 4 18.7654 4.15224C19.2554 4.35523 19.6448 4.74458 19.8478 5.23463C20 5.60218 20 6.06812 20 7M9 20H15M12 4V20"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Type1Outlined
