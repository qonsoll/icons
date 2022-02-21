import React from 'react'

const ShieldDDos = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M12.5707588,2.0995642 L19.208183,4.32651721 C19.9511557,4.57461017 20.453518,5.25711096 20.4575449,6.02198254 L20.4998279,12.6626368 C20.5129155,14.675818 19.7790035,16.6282017 18.4350081,18.1579449 C17.8168709,18.8600578 17.0245681,19.4631296 16.0127963,20.0024621 L12.4449165,21.909738 C12.3331686,21.9685743 12.2103466,21.998973 12.0865178,21.9999774 C11.962689,22.0009343 11.8388602,21.9715161 11.728119,21.9136604 L8.12701688,20.0505117 C7.10417099,19.5200047 6.30482095,18.9257583 5.68064334,18.2334514 C4.31449976,16.719398 3.55541924,14.7758397 3.54233165,12.7597166 L3.50002418,6.12396542 C3.4960217,5.35811323 3.98932336,4.67070942 4.72826911,4.41281041 L11.3405248,2.10642843 C11.7331527,1.96718258 12.1710838,1.96424076 12.5707588,2.0995642 Z M14.421,15.5 L9.578,15.5 C9.57769281,15.5138301 9.57739724,15.5264431 9.57720018,15.5390576 L9.57690459,15.5769046 C9.57690459,16.9151432 10.6617614,18 12,18 C12.0252329,18 12.0504642,17.9996059 12.0756848,17.9988177 C13.4132705,17.9570182 14.4637127,16.8388055 14.4219131,15.5012198 L14.421,15.5 Z M14.75,5.54955318 C14.7350021,5.54955318 14.7200346,5.5509028 14.7052786,5.5535857 L12.4552786,5.96267661 C12.336406,5.98428982 12.25,6.08782255 12.25,6.20864409 L12.25,8.056 L11.75,8.056 L11.75,6.20864409 C11.75,6.10795947 11.6899959,6.01928098 11.6012024,5.98001063 L11.5447214,5.96267661 L9.29472136,5.5535857 C9.27996538,5.5509028 9.2649979,5.54955318 9.25,5.54955318 C9.11192881,5.54955318 9,5.66148199 9,5.79955318 L9,5.79955318 L9,8.29135591 C9,8.41217745 9.08640597,8.51571018 9.20527864,8.53732339 L9.20527864,8.53732339 L11.4552786,8.9464143 C11.4700346,8.9490972 11.4850021,8.95044682 11.5,8.95044682 L11.5,8.95044682 L11.5,10 L10.2346191,10 C9.994564,10 9.79306948,10.1694439 9.74533217,10.3966787 L9.73486304,10.4843826 L9.625,14 L14.374,14 L14.265137,10.4843826 C14.2576389,10.2444447 14.081984,10.048341 13.8533691,10.0077246 L13.7653809,10 L12.5,10 L12.5,8.95044682 L12.5,8.95044682 C12.5149979,8.95044682 12.5299654,8.9490972 12.5447214,8.9464143 L14.7947214,8.53732339 C14.913594,8.51571018 15,8.41217745 15,8.29135591 L15,5.79955318 C15,5.66148199 14.8880712,5.54955318 14.75,5.54955318 Z"
        id="ShieldDDos"
        fill={fill}
      ></path>
    </svg>
  )
}

export default ShieldDDos
