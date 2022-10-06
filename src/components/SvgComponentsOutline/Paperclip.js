import React from 'react'

const PaperclipOutlined = (props) => {
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
        d="M21.1525 10.8995L12.1369 19.9151C10.0866 21.9654 6.76253 21.9654 4.71228 19.9151C2.66203 17.8649 2.66203 14.5408 4.71228 12.4905L13.7279 3.47489C15.0947 2.10806 17.3108 2.10806 18.6776 3.47489C20.0445 4.84173 20.0445 7.05781 18.6776 8.42464L10.0156 17.0867C9.33216 17.7701 8.22412 17.7701 7.54071 17.0867C6.85729 16.4033 6.85729 15.2952 7.54071 14.6118L15.1421 7.01043"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PaperclipOutlined
