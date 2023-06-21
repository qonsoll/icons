import React from 'react'

const Activities = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M9.11449014,5.53732879 C11.6543641,8.07649576 7.04265719,8.9844143 11.0317407,12.9723874 C15.0208243,16.9603606 15.9257751,12.3467178 18.4656491,14.8848116 C20.9142765,17.3327574 22.32162,17.8232052 19.2192381,20.9247236 C19.206427,20.9350191 19.1913548,20.9490587 19.1738738,20.9662735 L19.1356559,21.0047681 C19.1148971,21.0259636 19.0916309,21.0499552 19.0657092,21.0761738 L19.0102814,21.1314119 C18.213026,21.9126635 15.4080941,24.0410072 7.68460336,16.3196663 C-0.0398429122,8.59737018 2.08643681,5.79056321 2.86733363,4.99295757 L2.94799457,4.91245538 C3.00553981,4.8560438 3.04994031,4.81383379 3.07396994,4.78394958 C6.18386634,1.67384566 6.6658627,3.08938295 9.11449014,5.53732879 Z M20.4920813,2.25077893 C20.826213,1.91640702 21.4066534,1.91640702 21.7407851,2.25077893 C21.9083557,2.41897814 22.0002167,2.64189275 22.0002167,2.87797958 C22.0002167,3.11406642 21.9083557,3.33698103 21.7407851,3.50518023 L21.7407851,3.50518023 L19.3372573,5.91772424 L21.7407851,8.33026826 C21.9083557,8.49846746 22.0002167,8.72138207 22.0002167,8.95746891 C22.0002167,9.19355574 21.9083557,9.41647035 21.7407851,9.58466955 C21.574224,9.75185551 21.3531519,9.8440611 21.1169379,9.8440611 C20.8807239,9.8440611 20.6596519,9.75185551 20.4920813,9.58466955 L20.4920813,9.58466955 L18.0885535,7.17111229 L15.6840162,9.58466955 C15.3498844,9.91904147 14.7694441,9.91904147 14.4353123,9.58466955 C14.2687512,9.41647035 14.1768902,9.19355574 14.1768902,8.95746891 C14.1768902,8.72138207 14.2687512,8.49846746 14.4353123,8.33026826 L14.4353123,8.33026826 L16.8388401,5.91772424 L14.4353123,3.50518023 C14.2687512,3.33698103 14.1768902,3.11406642 14.1768902,2.87797958 C14.1768902,2.64189275 14.2687512,2.41897814 14.4353123,2.25077893 C14.7694441,1.91640702 15.3498844,1.91640702 15.6840162,2.25077893 L15.6840162,2.25077893 L18.0885535,4.6643362 Z"
        id="Stroke-2"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Activities