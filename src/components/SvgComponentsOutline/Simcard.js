import React from 'react'

const SimcardOutlined = (props) => {
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
        d="M4 6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13.8C8 13.52 8 13.38 8.0545 13.273C8.10243 13.1789 8.17892 13.1024 8.273 13.0545C8.37996 13 8.51997 13 8.8 13H15.2C15.48 13 15.62 13 15.727 13.0545C15.8211 13.1024 15.8976 13.1789 15.9455 13.273C16 13.38 16 13.52 16 13.8V17.2C16 17.48 16 17.62 15.9455 17.727C15.8976 17.8211 15.8211 17.8976 15.727 17.9455C15.62 18 15.48 18 15.2 18H8.8C8.51997 18 8.37996 18 8.273 17.9455C8.17892 17.8976 8.10243 17.8211 8.0545 17.727C8 17.62 8 17.48 8 17.2V13.8Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SimcardOutlined
