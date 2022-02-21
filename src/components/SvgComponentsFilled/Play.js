import React from 'react'

const Play = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M17.875,13.1609964 C17.828125,13.2241798 17.609375,13.4927096 17.4375,13.6664642 L17.34375,13.7612394 C16.03125,15.1986634 12.765625,17.3626974 11.109375,18.0577157 C11.109375,18.0735115 10.125,18.4842041 9.65625,18.5 L9.59375,18.5 C8.875,18.5 8.203125,18.0893074 7.859375,17.4258809 C7.671875,17.0625759 7.5,16.0042527 7.484375,15.9884569 C7.34375,15.0407047 7.25,13.5890644 7.25,11.9921021 C7.25,10.31774 7.34375,8.80133657 7.515625,7.86938032 C7.515625,7.85358445 7.6875,7.00060753 7.796875,6.7162819 C7.96875,6.30558931 8.28125,5.95808019 8.671875,5.73693803 C8.984375,5.57897934 9.3125,5.5 9.65625,5.5 C10.015625,5.51579587 10.6875,5.75431349 10.953125,5.86330498 C12.703125,6.55832321 16.046875,8.83292831 17.328125,10.2229648 C17.546875,10.4441069 17.78125,10.7126367 17.84375,10.7758202 C18.109375,11.1233293 18.25,11.5498177 18.25,12.0094775 C18.25,12.4185905 18.125,12.8292831 17.875,13.1609964"
        id="Play"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Play
