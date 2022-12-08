import React from 'react'

const MartiniGlassCrossedOutlined = (props) => {
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
        d="M12 16L5 7H9M12 16L12 21M12 16L14.625 12.625M9 21H15M8.11111 11H13M19 17L14.625 12.625M5 3L9 7M14.625 12.625L13 11M13 11L9 7M14 7L19 7L17.4444 9L17 9.57143"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default MartiniGlassCrossedOutlined
