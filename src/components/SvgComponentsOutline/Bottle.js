import React from 'react'

const BottleOutlined = (props) => {
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
        d="M19.25 3.25L14.7652 6.38931C14.4254 6.62718 14.0399 6.792 13.6332 6.87335L11.3906 7.32186C10.8099 7.43802 10.2765 7.72348 9.85767 8.14229L9 8.99996M19.25 3.25L20.75 4.75M19.25 3.25L18.5 2.5M20.75 4.75L17.6106 9.23472C17.3728 9.57455 17.2079 9.96001 17.1266 10.3668L16.6781 12.6093C16.5619 13.1901 16.2765 13.7235 15.8577 14.1423L15 15M20.75 4.75L21.5 5.5M10 20L8.91421 21.0858C8.13317 21.8668 6.86683 21.8668 6.08578 21.0858L2.91421 17.9142C2.13316 17.1332 2.13316 15.8668 2.91421 15.0858L3.99998 14M10 20L3.99998 14M10 20L15 15M3.99998 14L9 8.99996M15 15L9 8.99996"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default BottleOutlined
