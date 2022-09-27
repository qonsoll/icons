import React from 'react'

const PlugStationOutlined = (props) => {
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
        d="M17.4009 19.2C19.5864 17.558 21 14.9441 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21V16M10 8V11M14 8V11M8 11H16V12.8C16 13.9201 16 14.4802 15.782 14.908C15.5903 15.2843 15.2843 15.5903 14.908 15.782C14.4802 16 13.9201 16 12.8 16H11.2C10.0799 16 9.51984 16 9.09202 15.782C8.71569 15.5903 8.40973 15.2843 8.21799 14.908C8 14.4802 8 13.9201 8 12.8V11Z"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default PlugStationOutlined
