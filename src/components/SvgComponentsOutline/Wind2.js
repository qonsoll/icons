import React from 'react'

const Wind2Outlined = (props) => {
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
        d="M9.50926 4.66667C9.87547 4.2575 10.4077 4 11 4C12.1046 4 13 4.89543 13 6C13 7.10457 12.1046 8 11 8H1.99999M12.5093 19.3333C12.8755 19.7425 13.4077 20 14 20C15.1046 20 16 19.1046 16 18C16 16.8954 15.1046 16 14 16H1.99999M16.7639 7C17.3132 6.38625 18.1115 6 19 6C20.6568 6 22 7.34315 22 9C22 10.6569 20.6568 12 19 12H1.99997"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Wind2Outlined
