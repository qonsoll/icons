import React from 'react'

const Activities = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M16.3399,2.0001 C19.7299,2.0001 21.9999,4.3791 21.9999,7.9191 L21.9999,7.9191 L21.9999,16.0891 C21.9999,19.6201 19.7299,22.0001 16.3399,22.0001 L16.3399,22.0001 L7.6699,22.0001 C4.2799,22.0001 1.9999,19.6201 1.9999,16.0891 L1.9999,16.0891 L1.9999,7.9191 C1.9999,4.3791 4.2799,2.0001 7.6699,2.0001 L7.6699,2.0001 Z M11.6499,6.9191 C11.2399,6.9191 10.8999,7.2601 10.8999,7.6691 L10.8999,7.6691 L10.8999,12.7201 C10.8999,12.9801 11.0399,13.2301 11.2699,13.3601 L11.2699,13.3601 L15.1899,15.7001 C15.3099,15.7801 15.4499,15.8101 15.5799,15.8101 C15.8299,15.8101 16.0799,15.6801 16.2199,15.4401 C16.4399,15.0891 16.3199,14.6291 15.9599,14.4101 L15.9599,14.4101 L12.3999,12.2901 L12.3999,7.6691 C12.3999,7.2601 12.0699,6.9191 11.6499,6.9191 Z"
        id="Time-Square"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Activities
