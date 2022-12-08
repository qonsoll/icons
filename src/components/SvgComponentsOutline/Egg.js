import React from 'react'

const EggOutlined = (props) => {
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
        d="M19 14.0769C19 15.913 18.2625 17.6739 16.9497 18.9723C15.637 20.2706 13.8565 21 12 21C10.1435 21 8.36301 20.2706 7.05025 18.9723C5.7375 17.6739 5 15.913 5 14.0769C5 8.53846 9.2 3 12 3C14.8 3 19 8.53846 19 14.0769Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default EggOutlined
