import React from 'react'

const MoonEclipseOutlined = (props) => {
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
        d="M20.0017 6.00022C22.6667 9.54505 22.6661 14.4578 20 18.0021M12 22C13.5711 22 15.0575 21.6377 16.3803 20.9921C16.2542 20.9974 16.1274 21 16 21C11.0294 21 7 16.9706 7 12C7 7.02944 11.0294 3 16 3C16.1274 3 16.2542 3.00265 16.3803 3.00789C15.0575 2.36229 13.5711 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default MoonEclipseOutlined