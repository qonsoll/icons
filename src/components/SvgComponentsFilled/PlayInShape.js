import React from 'react'

const PlayInShape = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M12,2 C17.511583,2 22,6.48625181 22,12.0057887 C22,17.5137482 17.511583,22 12,22 C6.48841699,22 2,17.5137482 2,12.0057887 C2,6.48625181 6.48841699,2 12,2 Z M10.8610039,8.02990835 C10.6486486,8.02990835 10.4459459,8.07814761 10.2528958,8.17462615 C10.011583,8.30969609 9.81853282,8.52194887 9.71235521,8.77279305 C9.64478764,8.94645441 9.53861004,9.46743849 9.53861004,9.47708635 C9.43243243,10.0463097 9.37451737,10.9725036 9.37451737,11.9951761 C9.37451737,12.970574 9.43243243,13.8572118 9.51930502,14.436083 C9.52895753,14.4457308 9.63513514,15.092137 9.75096525,15.3140376 C9.96332046,15.7192475 10.3783784,15.9700917 10.8223938,15.9700917 L10.8223938,15.9700917 L10.8610039,15.9700917 C11.1505792,15.9604438 11.7586873,15.7095996 11.7586873,15.6999518 C12.7818533,15.2754462 14.7992278,13.9536903 15.6100386,13.0757356 L15.6100386,13.0757356 L15.6679537,13.0178485 C15.7741313,12.9117221 15.9092664,12.7477086 15.9382239,12.7091172 C16.0926641,12.5065123 16.1698842,12.2556681 16.1698842,12.0057887 C16.1698842,11.7250362 16.0830116,11.4645441 15.9189189,11.2522914 C15.8803089,11.2137 15.7355212,11.0496864 15.6003861,10.9146165 C14.8088803,10.0656054 12.7432432,8.67631452 11.6621622,8.25180897 C11.4980695,8.18523878 11.0830116,8.0395562 10.8610039,8.02990835 Z"
        id="PlayInShape"
        fill={fill}
      ></path>
    </svg>
  )
}

export default PlayInShape
