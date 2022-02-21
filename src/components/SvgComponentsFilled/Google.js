import React from 'react'

const Google = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M3.2725,7.50833333 L6.5975,10.0875 C6.39333333,10.6916667 6.28083333,11.3333333 6.28083333,12 C6.28083333,12.5555556 6.36185185,13.09375 6.50459877,13.6073495 L6.596,13.909 L6.5975,13.9083333 C7.38916667,16.2791667 9.60166667,18.0375 12.21,18.0375 C13.4561538,18.0375 14.5354438,17.7357249 15.3987119,17.2141045 L15.61,17.0791667 C16.5912682,16.4200414 17.2654846,15.4621661 17.5473121,14.3356068 L17.6016667,14.0916667 L12.21,14.0916667 L12.21,10.3333333 L21.6266667,10.3333333 C21.7225,10.9416667 21.785,11.575 21.785,12.2291667 C21.785,15.1498397 20.7911021,17.6429056 19.0440761,19.3786947 L18.8308333,19.5833333 C17.1790217,21.1132079 14.908923,22 12.21,22 C8.4072973,22 5.10554419,19.8778671 3.41004936,16.7504235 L3.2725,16.4875 L3.274,16.486 L3.12433773,16.1770596 C2.53662722,14.9065089 2.21,13.4923077 2.21,12 C2.21,10.3833333 2.59333333,8.85833333 3.2725,7.50833333 Z M12.21,2 C14.7886232,2 16.970775,2.90730939 18.6725866,4.39739185 L18.9016667,4.60416667 L16.0475,7.45833333 C15.0058333,6.46666667 13.685,5.95833333 12.21,5.95833333 C9.68580645,5.95833333 7.5323205,7.6050555 6.68229029,9.86001505 L6.60166667,10.0875 L3.27666667,7.50833333 C4.9225,4.24166667 8.30166667,2 12.21,2 Z"
        id="Google"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Google
