import React from 'react'

const BellPlusOutlined = (props) => {
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
        d="M9.35418 21C10.0593 21.6224 10.9856 22 12 22C13.0144 22 13.9407 21.6224 14.6458 21M18 8V2M15 5H21M13 2.08389C12.6717 2.02841 12.3373 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 11.0902 5.22047 13.206 4.34966 14.6054C3.61513 15.7859 3.24786 16.3761 3.26132 16.5408C3.27624 16.7231 3.31486 16.7926 3.46178 16.9016C3.59446 17 4.19259 17 5.38885 17H18.6111C19.8074 17 20.4055 17 20.5381 16.9016C20.6851 16.7926 20.7237 16.7231 20.7386 16.5408C20.7521 16.3761 20.3848 15.7858 19.6502 14.6052C19.1581 13.8144 18.6952 12.7948 18.3857 11.5"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default BellPlusOutlined
