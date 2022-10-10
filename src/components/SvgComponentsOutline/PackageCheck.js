import React from 'react'

const PackageCheckOutlined = (props) => {
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
        d="M20.5 7.27777L12 12M12 12L3.49997 7.27777M12 12L12 21.5M14 20.8889L12.777 21.5683C12.4934 21.7259 12.3516 21.8047 12.2015 21.8356C12.0685 21.8629 11.9315 21.8629 11.7986 21.8356C11.6484 21.8047 11.5066 21.7259 11.223 21.5683L3.82297 17.4572C3.52346 17.2908 3.37368 17.2076 3.26463 17.0893C3.16816 16.9846 3.09515 16.8605 3.05048 16.7253C3 16.5725 3 16.4012 3 16.0586V7.94147C3 7.59883 3 7.42751 3.05048 7.27471C3.09515 7.13953 3.16816 7.01545 3.26463 6.91076C3.37368 6.79242 3.52345 6.70922 3.82297 6.54282L11.223 2.43171C11.5066 2.27415 11.6484 2.19537 11.7986 2.16448C11.9315 2.13715 12.0685 2.13715 12.2015 2.16448C12.3516 2.19537 12.4934 2.27415 12.777 2.43171L20.177 6.54282C20.4766 6.70922 20.6263 6.79242 20.7354 6.91076C20.8318 7.01545 20.9049 7.13953 20.9495 7.27471C21 7.4275 21 7.59883 21 7.94147L21 12.5M7.5 4.50002L16.5 9.50002M16 18L18 20L22 16"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PackageCheckOutlined
