import React from 'react'

const ArrowCircleBrokenDownRightOutlined = (props) => {
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
        d="M9.41051 2.33938C12.7467 1.44846 16.4538 2.31164 19.0711 4.92893C22.9764 8.83418 22.9764 15.1658 19.0711 19.0711C15.1659 22.9763 8.83424 22.9763 4.92899 19.0711C2.3117 16.4538 1.44852 12.7466 2.33944 9.41045M15.0002 9.00001V15M15.0002 15H9.0002M15.0002 15L5.00001 4.99995"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowCircleBrokenDownRightOutlined
