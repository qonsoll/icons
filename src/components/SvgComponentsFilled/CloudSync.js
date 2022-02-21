import React from 'react'

const CloudSync = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M9.5,3 C11.8457077,3 13.8484392,4.46845584 14.6390624,6.53623543 C15.1771932,6.19640444 15.8156602,6 16.5,6 C18.4329966,6 20,7.56700338 20,9.5 C20,9.75033891 19.9737176,9.99453924 19.9237617,10.2299922 C21.7110673,10.8253476 23,12.5121506 23,14.5 C23,16.9852814 20.9852814,19 18.5,19 L5.5,19 C3.01471863,19 1,16.9852814 1,14.5 C1,12.4451591 2.37727185,10.7119973 4.25904708,10.173283 C4.09087292,9.64582879 4,9.08352665 4,8.5 C4,5.46243388 6.46243388,3 9.5,3 Z M15.0025804,9 C14.4502957,9 14.0025804,9.44771525 14.0025804,10 C14.0025804,10.5522847 14.4502957,11 15.0025804,11 L15.0025804,11 L15.1518428,11.0054857 C16.1867026,11.0818349 17.0025804,11.9456382 17.0025804,13 L17.0025804,13 L16.9970947,13.1492623 C16.9207455,14.1841222 16.0569422,15 15.0025804,15 L15.0025804,15 L14.6215804,15 L14.8970076,14.4472136 L14.9431447,14.3398958 C15.1138946,13.8692292 14.9084883,13.33492 14.449794,13.1055728 C13.9558155,12.8585836 13.3551425,13.0588079 13.1081532,13.5527864 L13.1081532,13.5527864 L12.1081532,15.5527864 L12.0623607,15.6586153 C11.8273169,16.2978691 12.2983238,17 13.0025804,17 L13.0025804,17 L15.0025804,17 L15.2022208,16.9951047 C17.318612,16.8910789 19.0025804,15.1421954 19.0025804,13 C19.0025804,10.790861 17.2117194,9 15.0025804,9 Z M11,9 L9,9 L8.80035966,9.00489531 C6.68396847,9.10892112 5,10.8578046 5,13 C5,15.209139 6.790861,17 9,17 C9.55228475,17 10,16.5522847 10,16 C10,15.4477153 9.55228475,15 9,15 L9,15 L8.85073766,14.9945143 C7.81587779,14.9181651 7,14.0543618 7,13 L7,13 L7.00548574,12.8507377 C7.08183488,11.8158778 7.9456382,11 9,11 L9,11 L9.381,11 L9.10557281,11.5527864 L9.05943572,11.6601042 C8.88868578,12.1307708 9.09409209,12.66508 9.5527864,12.8944272 C10.0467649,13.1414164 10.6474379,12.9411921 10.8944272,12.4472136 L10.8944272,12.4472136 L11.8944272,10.4472136 L11.9402197,10.3413847 C12.1752635,9.70213089 11.7042567,9 11,9 L11,9 Z"
        id="CloudSync"
        fill={fill}
      ></path>
    </svg>
  )
}

export default CloudSync
