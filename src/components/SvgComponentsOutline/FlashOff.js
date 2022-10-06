import React from 'react'

const FlashOffOutlined = (props) => {
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
        d="M8 8L4.09346 12.6879C3.74465 13.1064 3.57024 13.3157 3.56758 13.4925C3.56526 13.6461 3.63373 13.7923 3.75326 13.8889C3.89075 14 4.16318 14 4.70803 14H12L11 22L16 16M15.65 10H19.292C19.8368 10 20.1093 10 20.2467 10.1111C20.3663 10.2077 20.4347 10.3539 20.4324 10.5075C20.4298 10.6843 20.2554 10.8936 19.9065 11.3121L18.5502 12.9397M10.5728 4.91265L13 2L12.4002 6.79771M21 21L3 3"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default FlashOffOutlined
