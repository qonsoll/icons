import React from 'react'

const MaleOutlined = (props) => {
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
        d="M21 4H22C22 3.44772 21.5523 3 21 3V4ZM17 3C16.4477 3 16 3.44772 16 4C16 4.55228 16.4477 5 17 5V3ZM20 8C20 8.55228 20.4477 9 21 9C21.5523 9 22 8.55228 22 8H20ZM15 15C15 17.7614 12.7614 20 10 20V22C13.866 22 17 18.866 17 15H15ZM10 20C7.23858 20 5 17.7614 5 15H3C3 18.866 6.13401 22 10 22V20ZM5 15C5 12.2386 7.23858 10 10 10V8C6.13401 8 3 11.134 3 15H5ZM10 10C12.7614 10 15 12.2386 15 15H17C17 11.134 13.866 8 10 8V10ZM14.9497 11.4645L21.7071 4.70711L20.2929 3.29289L13.5355 10.0503L14.9497 11.4645ZM17 5H21V3H17V5ZM20 4V8H22V4H20Z"
        fill={fill}
      />
    </svg>
  )
}

export default MaleOutlined
