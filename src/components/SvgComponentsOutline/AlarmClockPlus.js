import React from 'react'

const AlarmClockPlusOutlined = (props) => {
  const {
    size = '24',
    strokeWidth = '2',
    fill = 'none',
    stroke = 'black'
  } = props

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 3L2 6M22 6L19 3M6 19L4 21M18 19L20 21M12 16V10M9 13H15M12 21C14.1217 21 16.1566 20.1571 17.6569 18.6569C19.1571 17.1566 20 15.1217 20 13C20 10.8783 19.1571 8.84344 17.6569 7.34315C16.1566 5.84285 14.1217 5 12 5C9.87827 5 7.84344 5.84285 6.34315 7.34315C4.84285 8.84344 4 10.8783 4 13C4 15.1217 4.84285 17.1566 6.34315 18.6569C7.84344 20.1571 9.87827 21 12 21Z"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default AlarmClockPlusOutlined
