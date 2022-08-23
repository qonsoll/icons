import React from 'react'

const DoubleCheckmark = (props) => {
  const { size = '16', fill = '#848b95' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M16.345 4.49697L17.1566 5.10668C17.8289 5.61178 17.9547 6.55355 17.4375 7.21018L8.13492 19.0212C7.63467 19.6564 6.71998 19.7894 6.05578 19.3484L5.93433 19.259L0.18422 14.5791C-0.0329883 14.4023 -0.0623351 14.087 0.118672 13.8749L0.774157 13.1067C1.31718 12.4703 2.28564 12.3843 2.93727 12.9146L6.67387 15.9557L15.6271 4.58842C15.7995 4.36955 16.1209 4.3286 16.345 4.49697Z"
        fill={fill}
      />
      <path
        d="M22.5052 4.49697L23.2978 5.10668C23.9545 5.61178 24.0773 6.55355 23.5722 7.21018L14.4868 19.0212C13.9982 19.6564 13.1049 19.7894 12.4562 19.3484L12.3376 19.259L10.5146 17.9109C10.3024 17.7341 10.3378 17.5186 10.5146 17.3065L11.8783 15.5628C12.1289 15.2409 12.4648 15.53 12.4648 15.53L13.0598 15.9557L21.804 4.58842C21.9724 4.36955 22.2863 4.3286 22.5052 4.49697Z"
        fill={fill}
      />
    </svg>
  )
}

export default DoubleCheckmark