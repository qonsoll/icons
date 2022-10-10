import React from 'react'

const Cursor1Outlined = (props) => {
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
        d="M13 12.9999L19 18.9999M17.9642 10.7512L12.9534 12.4531C12.8164 12.4996 12.7479 12.5229 12.691 12.562C12.6405 12.5967 12.5968 12.6404 12.5622 12.6908C12.523 12.7478 12.4997 12.8163 12.4532 12.9533L10.7513 17.964C10.5403 18.5854 10.4348 18.896 10.2698 18.99C10.1268 19.0713 9.95293 19.0772 9.8048 19.0056C9.63386 18.923 9.50768 18.6201 9.25533 18.0144L3.74711 4.79312C3.51295 4.23109 3.39588 3.95007 3.45284 3.77426C3.50227 3.62172 3.62184 3.50214 3.77438 3.45272C3.95019 3.39576 4.23121 3.51283 4.79324 3.74699L18.0145 9.25521C18.6203 9.50756 18.9231 9.63374 19.0057 9.80468C19.0773 9.95281 19.0715 10.1267 18.9901 10.2696C18.8961 10.4346 18.5855 10.5402 17.9642 10.7512Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Cursor1Outlined
