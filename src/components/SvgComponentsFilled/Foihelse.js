import React from 'react'

const Activities = (props) => {
  const { size = '16', fill = '#1D6FDC' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <g
        id="Symbols"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Group">
          <circle
            id="🎨-COLOR-—-Symbol-background"
            fill={fill}
            cx="16"
            cy="16"
            r="16"
          ></circle>
          <path
            d="M12,8.4 C13.1045695,8.4 14,9.2954305 14,10.4 L13.999,14.399 L18,14.4 C19.1045695,14.4 20,15.2954305 20,16.4 C20,17.5045695 19.1045695,18.4 18,18.4 L13.999,18.4 L14,22.4 C14,23.5045695 13.1045695,24.4 12,24.4 C10.8954305,24.4 10,23.5045695 10,22.4 L10,10.4 C10,9.2954305 10.8954305,8.4 12,8.4 Z M6,14.4 C7.1045695,14.4 8,15.2954305 8,16.4 C8,17.5045695 7.1045695,18.4 6,18.4 C4.8954305,18.4 4,17.5045695 4,16.4 C4,15.2954305 4.8954305,14.4 6,14.4 Z M22,8.4 C23.1045695,8.4 24,9.2954305 24,10.4 C24,11.5045695 23.1045695,12.4 22,12.4 L18,12.4 C16.8954305,12.4 16,11.5045695 16,10.4 C16,9.2954305 16.8954305,8.4 18,8.4 L22,8.4 Z"
            id="🎨-COLOR-—-Symbol"
            fill="#FFFFFF"
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Activities
