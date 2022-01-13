import React from 'react'

const Activities = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M13.2524752,2 C13.509901,2 13.7079208,2.21 13.7079208,2.46 L13.7079208,2.46 L13.7079208,5.68 C13.7079208,7.51 15.2029703,9.01 17.0148515,9.02 C17.7673267,9.02 18.3613861,9.03 18.8168317,9.03 C19.1237624,9.03 19.6287129,9.02 20.0544554,9.02 C20.3019802,9.02 20.5,9.22 20.5,9.47 L20.5,9.47 L20.5,17.51 C20.5,19.99 18.509901,22 16.0445545,22 L16.0445545,22 L8.17326733,22 C5.5990099,22 3.5,19.89 3.5,17.29 L3.5,17.29 L3.5,6.51 C3.5,4.03 5.5,2 7.96534653,2 L7.96534653,2 Z M11.8168317,9.77 C11.4108911,9.77 11.0742574,10.1 11.0742574,10.51 L11.0742574,10.51 L11.0742574,12.24 L9.37128713,12.24 C8.96534653,12.24 8.62871287,12.57 8.62871287,12.99 C8.62871287,13.4 8.96534653,13.73 9.37128713,13.73 L9.37128713,13.73 L11.0742574,13.73 L11.0742574,15.46 C11.0742574,15.87 11.4108911,16.2 11.8168317,16.2 C12.2227723,16.2 12.549505,15.87 12.549505,15.46 L12.549505,15.46 L12.549505,13.73 L14.2623762,13.73 C14.6683168,13.73 15.0049505,13.4 15.0049505,12.99 C15.0049505,12.57 14.6683168,12.24 14.2623762,12.24 L14.2623762,12.24 L12.549505,12.24 L12.549505,10.51 C12.549505,10.1 12.2227723,9.77 11.8168317,9.77 Z M15.149604,2.9062 C15.149604,2.4752 15.6674257,2.2612 15.9634653,2.5722 C17.0337624,3.6962 18.9040594,5.6612 19.949604,6.7592 C20.2387129,7.0622 20.0268317,7.5652 19.61,7.5662 C18.7961386,7.5692 17.8367327,7.5662 17.1466337,7.5592 C16.0515842,7.5592 15.149604,6.6482 15.149604,5.5422 L15.149604,5.5422 Z"
        id="Paper-Plus"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Activities
