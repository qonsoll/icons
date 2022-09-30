import React from 'react'

const AccidentOutlined = (props) => {
  const { size = '20', fill = 'black' } = props

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 16V17C8.55228 17 9 16.5523 9 16H8ZM1.85749 5.4855C1.57334 5.01192 0.959085 4.85836 0.485504 5.14251C0.011924 5.42666 -0.141641 6.04092 0.142507 6.5145L1.85749 5.4855ZM1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12L1 10ZM1 15C0.447715 15 0 15.4477 0 16C0 16.5523 0.447715 17 1 17L1 15ZM5.10557 7.44721C5.35256 7.94119 5.95324 8.14142 6.44721 7.89443C6.94119 7.64744 7.14142 7.04676 6.89443 6.55279L5.10557 7.44721ZM4 3L4.44721 2.10557C4.06222 1.91308 3.59725 1.98853 3.29289 2.29289C2.98853 2.59725 2.91308 3.06222 3.10557 3.44721L4 3ZM8 5L7.55279 5.89443C7.82408 6.03008 8.14229 6.03526 8.41786 5.90851C8.69343 5.78177 8.89658 5.5368 8.97014 5.24254L8 5ZM9 1L9.8 0.4C9.56854 0.0913815 9.18019 -0.0565751 8.80205 0.0197869C8.42391 0.0961488 8.12342 0.38321 8.02986 0.757464L9 1ZM12 5L11.2 5.6C11.5184 6.02459 12.1131 6.12645 12.5547 5.83205L12 5ZM15 3L15.8944 3.44721C16.0972 3.04165 16.0017 2.55041 15.6618 2.25032C15.3219 1.95024 14.8226 1.91643 14.4453 2.16795L15 3ZM12.1056 6.55279C11.8586 7.04676 12.0588 7.64744 12.5528 7.89443C13.0468 8.14142 13.6474 7.94119 13.8944 7.44721L12.1056 6.55279ZM12 16H11C11 16.5523 11.4477 17 12 17V16ZM19 7C19.5523 7 20 6.55228 20 6C20 5.44772 19.5523 5 19 5V7ZM19 12C19.5523 12 20 11.5523 20 11C20 10.4477 19.5523 10 19 10V12ZM19 17C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15V17ZM16.4971 7.25722L15.5686 6.88583L16.4971 7.25722ZM9 16V13H7V16H9ZM6 10H4V12H6V10ZM0.142507 6.5145L3.14251 11.5145L4.85749 10.4855L1.85749 5.4855L0.142507 6.5145ZM4 10H1L1 12H4V10ZM8 15H5.73144V17H8V15ZM2.26856 15H1L1 17H2.26856V15ZM4 14C2.3492 14 1 15.3417 1 17H3C3 16.4492 3.4508 16 4 16V14ZM1 17C1 18.6569 2.34315 20 4 20V18C3.44772 18 3 17.5523 3 17H1ZM4 20C5.65685 20 7 18.6569 7 17H5C5 17.5523 4.55228 18 4 18V20ZM7 17C7 15.3417 5.6508 14 4 14V16C4.5492 16 5 16.4492 5 17H7ZM6.89443 6.55279L4.89443 2.55279L3.10557 3.44721L5.10557 7.44721L6.89443 6.55279ZM3.55279 3.89443L7.55279 5.89443L8.44721 4.10557L4.44721 2.10557L3.55279 3.89443ZM8.97014 5.24254L9.97014 1.24254L8.02986 0.757464L7.02986 4.75746L8.97014 5.24254ZM8.2 1.6L11.2 5.6L12.8 4.4L9.8 0.4L8.2 1.6ZM12.5547 5.83205L15.5547 3.83205L14.4453 2.16795L11.4453 4.16795L12.5547 5.83205ZM14.1056 2.55279L12.1056 6.55279L13.8944 7.44721L15.8944 3.44721L14.1056 2.55279ZM13 16V13H11V16H13ZM14 12H15V10H14V12ZM15.5686 6.88583L14.0715 10.6286L15.9285 11.3714L17.4256 7.62861L15.5686 6.88583ZM19 5H18.3541V7H19V5ZM15 12L19 12V10L15 10V12ZM12 17H14.2686V15H12V17ZM17.7314 17H19V15H17.7314V17ZM16 16C16.5492 16 17 16.4492 17 17H19C19 15.3417 17.6508 14 16 14V16ZM17 17C17 17.5523 16.5523 18 16 18V20C17.6569 20 19 18.6569 19 17H17ZM16 18C15.4477 18 15 17.5523 15 17H13C13 18.6569 14.3431 20 16 20V18ZM15 17C15 16.4492 15.4508 16 16 16V14C14.3492 14 13 15.3417 13 17H15ZM17.4256 7.62861C17.5775 7.24895 17.9452 7 18.3541 7V5C17.1274 5 16.0242 5.74685 15.5686 6.88583L17.4256 7.62861ZM13 13C13 12.4477 13.4477 12 14 12V10C12.3431 10 11 11.3431 11 13H13ZM9 13C9 11.3431 7.65685 10 6 10V12C6.55228 12 7 12.4477 7 13H9Z"
        fill={fill}
      />
    </svg>
  )
}

export default AccidentOutlined
