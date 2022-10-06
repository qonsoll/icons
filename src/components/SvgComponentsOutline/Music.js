import React from 'react'

const MusicOutlined = (props) => {
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
        d="M14.5 18V5.58885C14.5 4.73164 14.5 4.30303 14.6805 4.04489C14.8382 3.81949 15.0817 3.66898 15.3538 3.62877C15.6655 3.58273 16.0488 3.77441 16.8155 4.15777L20.5 6M14.5 18C14.5 19.6569 13.1569 21 11.5 21C9.84315 21 8.5 19.6569 8.5 18C8.5 16.3431 9.84315 15 11.5 15C13.1569 15 14.5 16.3431 14.5 18ZM6.5 10V4M3.5 7H9.5"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default MusicOutlined
