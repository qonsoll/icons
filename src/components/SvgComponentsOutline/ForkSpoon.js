import React from 'react'

const ForkSpoonOutlined = (props) => {
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
        d="M17 13V3M17 13H16.5799C15.6116 13 14.7265 13.5471 14.2934 14.4131V14.4131C13.7838 15.4324 13.6823 16.6078 14.0098 17.6993L14.4253 19.0843C14.7664 20.2214 15.8129 21 17 21V21C18.1871 21 19.2336 20.2214 19.5747 19.0843L19.9902 17.6993C20.3177 16.6078 20.2162 15.4324 19.7066 14.4131V14.4131C19.2735 13.5471 18.3884 13 17.4201 13H17ZM10 3V9L7 11M7 21V11M7 11V3M7 11L4 9V3"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ForkSpoonOutlined
