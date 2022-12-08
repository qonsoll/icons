import React from 'react'

const WineGlassOutlined = (props) => {
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
        d="M12 13V21M12 13C15.3137 13 18 10.3137 18 7V3H6V7C6 10.3137 8.68629 13 12 13ZM8 21H16"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default WineGlassOutlined
