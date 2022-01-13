import React from 'react'

const AlertInfo = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M16.3399,1.9992 C19.7299,1.9992 21.9999,4.3792 21.9999,7.9192 L21.9999,7.9192 L21.9999,16.0902 C21.9999,19.6202 19.7299,21.9992 16.3399,21.9992 L16.3399,21.9992 L7.6699,21.9992 C4.2799,21.9992 1.9999,19.6202 1.9999,16.0902 L1.9999,16.0902 L1.9999,7.9192 C1.9999,4.3792 4.2799,1.9992 7.6699,1.9992 L7.6699,1.9992 Z M11.9899,10.4802 C11.5099,10.4802 11.1199,10.8792 11.1199,11.3602 L11.1199,11.3602 L11.1199,15.7802 C11.1199,16.2602 11.5099,16.6502 11.9899,16.6502 C12.4799,16.6502 12.8699,16.2602 12.8699,15.7802 L12.8699,15.7802 L12.8699,11.3602 C12.8699,10.8792 12.4799,10.4802 11.9899,10.4802 Z M12.0099,7.3102 C11.5199,7.3102 11.1299,7.7002 11.1299,8.1902 C11.1299,8.6692 11.5199,9.0602 11.9899,9.0602 C12.4899,9.0602 12.8799,8.6692 12.8799,8.1902 C12.8799,7.7002 12.4899,7.3102 12.0099,7.3102 Z"
        id="Info-Square"
        fill={fill}
      ></path>
    </svg>
  )
}

export default AlertInfo
