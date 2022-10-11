import React from 'react'

const Activities = (props) => {
  const { size = '16', fill = '#424851' } = props

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M9.66914346,14.9999068 L11.4387166,16.7427775 C11.7501025,17.0493729 12.2498975,17.0493729 12.5612834,16.7427775 L14.3298155,15.0017656 C16.7431456,15.25184 18.5,15.9904255 18.5,17.7052705 C18.5,19.9375588 15.5056271,20.4954258 12,20.4954258 C8.47567838,20.4954258 5.5,19.917049 5.5,17.6855811 C5.5,15.9722521 7.26395228,15.2453064 9.66914346,14.9999068 Z M17.4350721,14.228878 C18.7468371,14.2045616 20.1570964,14.3846829 20.6782208,14.5125691 C21.7822523,14.7296153 22.5084239,15.1727139 22.8092792,15.8166477 C23.0635736,16.3453039 23.0635736,16.9586171 22.8092792,17.4863727 C22.3490422,18.4851456 20.8653599,18.8057616 20.2887206,18.8886175 C20.169632,18.9066296 20.0738239,18.8030598 20.0863596,18.6832791 C20.3809471,15.9157145 18.0376781,14.6035304 17.4314905,14.3018271 C17.4055238,14.288318 17.4001514,14.267604 17.4028376,14.2549956 C17.4046284,14.2459895 17.4153733,14.2315798 17.4350721,14.228878 Z M6.31858262,14.2270117 L6.56559944,14.2292382 C6.5852983,14.23194 6.59514773,14.2463497 6.59693854,14.2544552 C6.59962474,14.2679643 6.59425233,14.2877776 6.56918105,14.3021873 C5.96209801,14.6038906 3.6188291,15.9160747 3.91341659,18.6827387 C3.92595223,18.8034201 3.83103954,18.9060892 3.71195098,18.8889777 C3.13531163,18.8061219 1.65162933,18.4855059 1.19139233,17.4867329 C0.936202556,16.9580768 0.936202556,16.3456641 1.19139233,15.817008 C1.49224764,15.1730741 2.21752385,14.7299756 3.3215554,14.5120287 C3.84357518,14.3850432 5.25293906,14.2049218 6.56559944,14.2292382 Z M11.976729,8.812 C13.6871565,8.812 15.1789387,9.21503726 16.0603944,9.69771012 L16.0602895,9.73670437 C16.0602895,11.9568688 14.2532749,13.7370823 11.997961,13.7370823 C9.74341482,13.7370823 7.93563262,11.9568688 7.93563262,9.73670437 L7.935,9.685 L8.09712575,9.59207884 C9.04221136,9.07974471 10.3578954,8.812 11.976729,8.812 Z M17.6633998,5.7058956 C19.9198147,5.7058956 21.6918166,7.84123428 21.0883152,10.2197368 C20.680907,11.8210157 19.2061787,12.8846323 17.5631147,12.8414031 C17.3983606,12.8369001 17.2362927,12.8215898 17.0795972,12.7945716 C16.9658811,12.7747582 16.9085753,12.6459715 16.9730443,12.5505072 C17.5998262,11.6228822 17.9570919,10.5070304 17.9570919,9.30922334 C17.9570919,8.05918112 17.5666963,6.89379595 16.8888765,5.93825215 C16.8673868,5.90853212 16.8512695,5.86260118 16.8727592,5.82837812 C16.8906673,5.80045931 16.9237972,5.7860496 16.9551363,5.77884475 C17.1834639,5.73201319 17.4180595,5.7058956 17.6633998,5.7058956 Z M6.33592864,5.70580554 C6.58126899,5.70580554 6.8158645,5.73192313 7.0450876,5.77875469 C7.07553129,5.78595954 7.10955659,5.80126986 7.12746465,5.82828806 C7.14805891,5.86251112 7.13283706,5.90844206 7.1113474,5.93816209 C6.43352754,6.89370588 6.04313196,8.05909106 6.04313196,9.30913328 C6.04313196,10.5069403 6.40039764,11.6227921 7.02717954,12.5504171 C7.09164854,12.6458814 7.03434276,12.7746682 6.92062662,12.7944815 C6.76303574,12.8224003 6.60186325,12.8368101 6.43710915,12.8413131 C4.79404516,12.8845422 3.31931689,11.8209256 2.91190865,10.2196467 C2.30751182,7.84114422 4.0795138,5.70580554 6.33592864,5.70580554 Z M11.9848821,3.5 C13.4501017,3.5 15.9035604,3.79456 16.0259584,4.88432 L16.0328504,4.92472 L16.035498,4.96656 L16.0625,8.5176 C15.1956889,8.02448 13.6981316,7.60816 11.9769594,7.60816 C10.3741538,7.60816 9.07149639,7.87590471 8.13576807,8.38823884 L7.94089545,8.50176 L7.94089545,5.0032 C7.93992532,4.99216 7.9375,4.98128 7.9375,4.96992 C7.9375,3.8096 10.4816658,3.5 11.9848821,3.5 Z M11.9999078,4.56864 C11.8035451,4.56864 11.6397792,4.7057175 11.6019059,4.88801281 L11.5936542,4.96864 L11.5936542,5.51792 L11.0357868,5.51792 C10.8113724,5.51792 10.6293708,5.69712 10.6293708,5.91808 C10.6293708,6.11142 10.7685913,6.272665 10.9537366,6.30995531 L11.0356243,6.31808 L11.5936542,6.31808 L11.5936542,6.86736 C11.5936542,7.08832 11.7754933,7.26736 11.9999078,7.26736 C12.1962704,7.26736 12.3600363,7.1302825 12.3979096,6.94798719 L12.4061613,6.86736 L12.4061613,6.31808 L12.9641912,6.31808 C13.1886057,6.31808 13.3704448,6.13904 13.3704448,5.91808 C13.3704448,5.72474 13.2312242,5.563495 13.0460789,5.52620469 L12.9641912,5.51808 L12.4061613,5.51808 L12.4061613,4.96864 C12.4061613,4.74768 12.2243222,4.56864 11.9999078,4.56864 Z"
        id="3-Friends"
        fill={fill}
      ></path>
    </svg>
  )
}

export default Activities