import React from 'react'

const GamingPad1Outlined = (props) => {
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
        d="M6.00001 11H10M8.00001 9V13M15 12H15.01M18 10H18.01M10.449 5H13.5511C16.1759 5 17.4884 5 18.5186 5.49743C19.4256 5.9354 20.1792 6.63709 20.6806 7.51059C21.2502 8.5027 21.3437 9.81181 21.5307 12.43L21.7768 15.8745C21.8974 17.5634 20.5598 19 18.8666 19C18.0007 19 17.1795 18.6154 16.6252 17.9502L16.25 17.5C15.9069 17.0882 15.7353 16.8823 15.5399 16.7159C15.1303 16.3672 14.6345 16.1349 14.1044 16.0436C13.8515 16 13.5835 16 13.0475 16H10.9526C10.4165 16 10.1485 16 9.89565 16.0436C9.36551 16.1349 8.86969 16.3672 8.46012 16.7159C8.26475 16.8823 8.09317 17.0882 7.75001 17.5L7.37485 17.9502C6.82052 18.6154 5.99936 19 5.13347 19C3.44025 19 2.10263 17.5634 2.22326 15.8745L2.4693 12.43C2.65631 9.81181 2.74982 8.5027 3.31938 7.51059C3.82086 6.63709 4.57446 5.9354 5.48147 5.49743C6.51164 5 7.82408 5 10.449 5Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default GamingPad1Outlined
