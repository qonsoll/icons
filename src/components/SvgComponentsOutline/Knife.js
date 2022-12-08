import React from 'react'

const KnifeOutlined = (props) => {
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
        d="M13.7344 8.48437L18.75 13.5C18.75 13.5 12 22.5 2.25 20.25L18.5531 3.55312C18.9037 3.20254 19.3792 3.00558 19.875 3.00558C20.3708 3.00558 20.8463 3.20254 21.1969 3.55312C21.5475 3.90371 21.7444 4.3792 21.7444 4.875C21.7444 5.3708 21.5475 5.84629 21.1969 6.19687L16.4813 11.2312"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default KnifeOutlined
