import React from 'react'

const Contrast1Outlined = (props) => {
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
        d="M12 2C12.5917 2 13.1713 2.05139 13.7348 2.14994M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22M12 2V22M17.738 3.809C18.6922 4.47869 19.5241 5.31089 20.1934 6.26541M21.8501 10.2656C21.9486 10.8289 22 11.4085 22 12C22 12.5915 21.9486 13.1711 21.8501 13.7344M20.1892 17.7406C19.5203 18.693 18.6896 19.5233 17.7369 20.1917M13.7328 21.8504C13.17 21.9487 12.591 22 12 22"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Contrast1Outlined
