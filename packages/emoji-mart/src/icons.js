const categories = {
  activity: {
    outline: (
      <svg width="20" height="20" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>basketball</title>
        <g id="Canvas" transform="translate(1741 1293)">
          <g id="basketball">
          <use xlink:href="#path0_fill" transform="translate(-1741 -1293)"/>
          </g>
        </g>
        <defs>
          <path id="path0_fill" fill-rule="evenodd" d="M 11 0.0493164L 11 0L 10 0C 4.47717 0 0 4.47717 0 10C 0 15.5228 4.47717 20 10 20C 12.7257 20 15.1962 18.9099 17 17.1414C 17.2235 16.9222 17.4373 16.6921 17.6395 16.453C 19.1122 14.7113 20 12.4594 20 10L 20 9L 19.9507 9C 19.7474 6.95312 18.927 5.08789 17.6781 3.5929C 17.4857 3.36255 17.2831 3.14099 17.071 2.92896C 15.4825 1.34045 13.3622 0.283813 11 0.0493164ZM 10 19L 10 10L 6.67871 10C 6.67871 12.604 5.68335 14.9755 4.05237 16.7549C 5.63818 18.1523 7.72009 19 10 19ZM 3.33936 16.0529C 4.79285 14.4543 5.67871 12.3307 5.67871 10L 1 10C 1 12.3307 1.88586 14.4543 3.33936 16.0529ZM 1.05493 9L 5.62378 9C 5.40979 7.06445 4.58203 5.31372 3.33936 3.94714C 2.09668 5.31372 1.26892 7.06433 1.05493 9ZM 4.05237 3.24512C 5.47192 4.79382 6.40991 6.79126 6.62927 9L 10 9L 10 1C 7.72009 1 5.63818 1.84766 4.05237 3.24512ZM 11 1.05493L 11 9L 14.0494 9C 14.2527 6.95349 15.0728 5.0885 16.3213 3.59363C 14.9191 2.20996 13.0648 1.2832 11 1.05493ZM 17 4.34265C 15.9464 5.64465 15.2488 7.24634 15.0549 9L 18.9451 9C 18.7512 7.24634 18.0536 5.64465 17 4.34265ZM 19 10L 15 10C 15 12.1433 15.7491 14.1116 17 15.6573C 18.2509 14.1116 19 12.1433 19 10ZM 16.3213 16.4064C 14.8721 14.6713 14 12.4375 14 10L 11 10L 11 18.9451C 13.0648 18.7168 14.9191 17.79 16.3213 16.4064Z"/>
        </defs>
      </svg>
    ),
    solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z" />
      </svg>
    ),
  },

  custom: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z" />
    </svg>
  ),

  flags: {
    outline: (
      <svg width="12" height="18" viewBox="0 0 12 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>flags</title>
        <g id="Canvas" transform="translate(1621 1274)">
          <g id="flags">
          <use xlink:href="#path0_fill" transform="translate(-1621 -1273.5)"/>
          <use xlink:href="#path1_fill" transform="translate(-1621 -1273.5)"/>
          </g>
        </g>
        <defs>
          <path id="path0_fill" d="M 0 0L 1 0L 1 17L 0 17L 0 0Z"/>
          <path id="path1_fill" fill-rule="evenodd" d="M 11 1L 1 1L 1 8L 11 8L 11 1ZM 1 0L 0 0L 0 1L 0 8L 0 9L 1 9L 11 9L 12 9L 12 8L 12 1L 12 0L 11 0L 1 0Z"/>
        </defs>
      </svg>
    ),
    solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z" />
      </svg>
    ),
  },

  foods: {
    outline: (
      <svg width="16" height="19" viewBox="0 0 16 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>food</title>
        <g id="Canvas" transform="translate(1807 1277)">
          <g id="food">
          <use xlink:href="#path0_fill" transform="translate(-1807 -1277)"/>
          </g>
        </g>
        <defs>
          <path id="path0_fill" fill-rule="evenodd" d="M 9.25 5.13611C 10.4571 5.61359 11.866 5.5552 13.0929 4.85482C 14.6099 3.98873 15.4442 2.37178 15.3885 0.737568C 14.0405 -0.158916 12.2452 -0.274456 10.7281 0.591572C 10.1221 0.937589 9.62493 1.40348 9.25 1.94245C 9.23671 1.96155 9.22358 1.98074 9.2106 2.00002C 8.67316 2.79843 8.39986 3.75065 8.4325 4.70882C 8.69033 4.88029 8.96452 5.02319 9.25 5.13611ZM 12.5971 3.98639C 11.5865 4.56325 10.4223 4.57918 9.45461 4.13675ZM 9.45461 4.13675C 9.58319 3.05262 10.2085 2.03971 11.2239 1.46003C 12.2345 0.883142 13.3987 0.867199 14.3664 1.30964C 14.2379 2.39371 13.6124 3.40666 12.5971 3.98639L 9.45461 4.13675ZM 8.25 5.76732L 8.25 4.98323L 8.25 4.71504L 8.25 3.00002L 8.25 2.00002L 8.05077 2.00002L 8 2.00002L 7.25 2.00002L 7 2.00002L 7 3.00002L 7 6.40387L 7 7.49935C 6.6825 7.33288 6.34781 7.20481 6 7.12007C 5.67691 7.04135 5.34249 7.00002 5 7.00002C 2.23853 7.00002 0 8.6863 0 12C 0 15.3137 3.23853 19 6 19C 6.56238 19 7.0614 18.8886 7.49988 18.6832C 7.93835 18.8886 8.43762 19 9 19C 11.7615 19 15 15.3137 15 12.0001C 15 8.68636 12.7615 7.00008 10 7.00008C 9.74508 7.00008 9.49463 7.02296 9.25 7.06711C 8.90376 7.1296 8.56917 7.23469 8.25 7.37783L 8.25 6.30661L 8.25 5.76732ZM 7.41724 8.84723L 8 9.15278L 8 8.58589L 8.65919 8.29028C 9.11124 8.08214 9.49537 7.99389 10 8.00008C 11.1823 8.00008 12.1726 8.35976 12.857 8.99201C 13.5286 9.61233 14 10.5811 14 12.0001C 14 13.3537 13.3237 14.8804 12.2791 16.0887C 11.2169 17.3173 9.96878 18 9 18C 8.54716 18.006 8.2613 17.9422 7.92416 17.7777L 7.49994 17.5789L 7.0757 17.7776C 6.73846 17.9422 6.45279 18.006 6 18C 5.03122 18 3.78313 17.3172 2.72094 16.0886C 1.67634 14.8803 1 13.3536 1 12C 1 10.5811 1.47142 9.61227 2.14298 8.99195C 2.82744 8.3597 3.8177 8.00002 5 8.00002C 5.58272 7.99173 6.0257 8.11047 6.53564 8.38499L 7.25 8.75955L 7.25 8.92223L 7.41724 8.84723Z"/>
        </defs>
      </svg>
    ),
    solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z" />
      </svg>
    ),
  },

  frequent: {
    outline: (
      <svg width="20" height="21" viewBox="0 0 20 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>recents</title>
        <g id="Canvas" transform="translate(1923 1278)">
          <g id="recents">
            <use xlink:href="#path0_fill" transform="translate(-1923 -1277.5)"/>
          </g>
        </g>
        <defs>
          <path id="path0_fill" fill-rule="evenodd" d="M 10 19C 14.9706 19 19 14.9706 19 10C 19 5.02942 14.9706 1 10 1C 5.02942 1 1 5.02942 1 10C 1 14.9706 5.02942 19 10 19ZM 10 20C 15.5228 20 20 15.5228 20 10C 20 4.47717 15.5228 0 10 0C 4.47717 0 0 4.47717 0 10C 0 15.5228 4.47717 20 10 20ZM 9 4L 10 4L 10 10L 16 10L 16 11L 10 11L 9 11L 9 10L 9 4Z"/>
        </defs>
      </svg>
    ),
    solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z" />
      </svg>
    ),
  },

  nature: {
    outline: (
      <svg width="18" height="19" viewBox="0 0 18 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>nature</title>
        <g id="Canvas" transform="translate(1845 1276)">
          <g id="nature">
          <use xlink:href="#path0_fill" transform="translate(-1844.37 -1275.36)"/>
          <use xlink:href="#path1_fill" transform="translate(-1844.37 -1275.36)"/>
          </g>
        </g>
        <defs>
          <path id="path0_fill" fill-rule="evenodd" d="M 15.2324 1.51645C 16.2875 4.20923 15.7257 7.38698 13.5521 9.56061C 11.3784 11.7342 8.20055 12.296 5.50776 11.2408C 4.4526 8.54802 5.01438 5.37027 7.18806 3.19664C 9.36174 1.02301 12.5396 0.461281 15.2324 1.51645ZM 14.2592 10.2677C 16.8319 7.69503 17.4106 3.88345 15.9955 0.753319C 12.8654 -0.661842 9.05371 -0.083168 6.48096 2.48953C 3.9082 5.06222 3.32947 8.8738 4.74463 12.0039C 7.87476 13.4191 11.6864 12.8404 14.2592 10.2677Z"/>
          <path id="path1_fill" fill-rule="evenodd" d="M 15.7399 1.21493L 0.73994 17.7149L 0 17.0423L 15 0.54226L 15.7399 1.21493Z"/>
        </defs>
      </svg>
    ),
    solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z" />
      </svg>
    ),
  },

  objects: {
    outline: (
      <svg width="20" height="24" viewBox="0 0 20 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>objects</title>
        <g id="Canvas" transform="translate(1696 1281)">
          <g id="objects">
          <use xlink:href="#path0_fill" transform="translate(-1696 -1280.17)"/>
          <use xlink:href="#path1_fill" transform="translate(-1696 -1280.17)"/>
          <use xlink:href="#path2_fill" transform="translate(-1696 -1280.17)"/>
          </g>
        </g>
        <defs>
          <path id="path0_fill" fill-rule="evenodd" d="M 7 21.6716C 10.3137 21.6716 13 18.9853 13 15.6716C 13 12.3579 10.3137 9.67157 7 9.67157C 3.68629 9.67157 1 12.3579 1 15.6716C 1 18.9853 3.68629 21.6716 7 21.6716ZM 7 22.6716C 10.866 22.6716 14 19.5376 14 15.6716C 14 11.8056 10.866 8.67157 7 8.67157C 3.13401 8.67157 0 11.8056 0 15.6716C 0 19.5376 3.13401 22.6716 7 22.6716Z"/>
          <path id="path1_fill" fill-rule="evenodd" d="M 12 4.17157C 9.51472 4.17157 7.5 6.18629 7.5 8.67157L 6.5 8.67157C 6.5 5.634 8.96243 3.17157 12 3.17157L 13 3.17157L 13 4.17157L 12 4.17157Z"/>
          <path id="path2_fill" fill-rule="evenodd" d="M 19.8995 0.707092L 19.1924 0L 17.071 2.12134L 17.7782 2.82843L 19.8995 0.707092ZM 15.657 4.94971L 14.9498 4.24261L 12.8285 6.36395L 13.5356 7.07104L 15.657 4.94971ZM 12.8285 0.707092L 13.5356 0L 15.6569 2.12128L 14.9498 2.82843L 12.8285 0.707092ZM 17.7783 4.24268L 17.0712 4.94977L 19.1925 7.07111L 19.8995 6.36395L 17.7783 4.24268Z"/>
        </defs>
      </svg>
    ),
    solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z" />
      </svg>
    ),
  },

  people: {
    outline: (
      <svg width="20" height="21" viewBox="0 0 20 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>smileys</title>
        <g id="Canvas" transform="translate(1883 1278)">
          <g id="smileys">
            <use xlink:href="#path0_fill" transform="translate(-1883 -1277.5)"/>
            <mask id="mask0_outline_ins">
              <use xlink:href="#path0_fill" fill="white" transform="translate(-1883 -1277.5)"/>
            </mask>
            <g mask="url(#mask0_outline_ins)">
              <use xlink:href="#path1_stroke_2x" transform="translate(-1883 -1277.5)"/>
            </g>
          </g>
        </g>
        <defs>
          <path id="path0_fill" fill-rule="evenodd" d="M 19 10C 19 14.9706 14.9706 19 10 19C 5.02942 19 1 14.9706 1 10C 1 5.02942 5.02942 1 10 1C 14.9706 1 19 5.02942 19 10ZM 20 10C 20 15.5228 15.5228 20 10 20C 4.47717 20 0 15.5228 0 10C 0 4.47717 4.47717 0 10 0C 15.5228 0 20 4.47717 20 10ZM 10.0001 14.9445C 7.65149 14.9445 5.68518 13.3068 5.18103 11.1111L 6.21436 11.1111C 6.69421 12.7486 8.20752 13.9445 10.0001 13.9445C 11.7927 13.9445 13.306 12.7486 13.7859 11.1111L 14.8192 11.1111C 14.3151 13.3068 12.3488 14.9445 10.0001 14.9445ZM 7.77783 7.77771C 7.77783 8.39136 7.2804 8.88885 6.66675 8.88885C 6.0531 8.88885 5.55566 8.39136 5.55566 7.77771C 5.55566 7.16406 6.0531 6.66663 6.66675 6.66663C 7.2804 6.66663 7.77783 7.16406 7.77783 7.77771ZM 13.3333 8.88885C 13.9469 8.88885 14.4443 8.39136 14.4443 7.77771C 14.4443 7.16406 13.9469 6.66663 13.3333 6.66663C 12.7196 6.66663 12.2222 7.16406 12.2222 7.77771C 12.2222 8.39136 12.7196 8.88885 13.3333 8.88885Z"/>
          <path id="path1_stroke_2x" d="M 5.18103 11.1111L 5.18103 10.1111L 3.92541 10.1111L 4.20639 11.3349L 5.18103 11.1111ZM 6.21436 11.1111L 7.174 10.8299L 6.96337 10.1111L 6.21436 10.1111L 6.21436 11.1111ZM 13.7859 11.1111L 13.7859 10.1111L 13.0369 10.1111L 12.8262 10.8299L 13.7859 11.1111ZM 14.8192 11.1111L 15.7939 11.3349L 16.0748 10.1111L 14.8192 10.1111L 14.8192 11.1111ZM 10 20C 15.5229 20 20 15.5229 20 10L 18 10C 18 14.4183 14.4183 18 10 18L 10 20ZM 0 10C 0 15.5229 4.47713 20 10 20L 10 18C 5.5817 18 2 14.4183 2 10L 0 10ZM 10 0C 4.47713 0 0 4.47713 0 10L 2 10C 2 5.5817 5.5817 2 10 2L 10 0ZM 20 10C 20 4.47713 15.5229 0 10 0L 10 2C 14.4183 2 18 5.5817 18 10L 20 10ZM 10 21C 16.0751 21 21 16.0751 21 10L 19 10C 19 14.9705 14.9705 19 10 19L 10 21ZM -1 10C -1 16.0751 3.92489 21 10 21L 10 19C 5.02946 19 1 14.9705 1 10L -1 10ZM 10 -1C 3.92489 -1 -1 3.92489 -1 10L 1 10C 1 5.02946 5.02946 1 10 1L 10 -1ZM 21 10C 21 3.92489 16.0751 -1 10 -1L 10 1C 14.9705 1 19 5.02946 19 10L 21 10ZM 4.20639 11.3349C 4.81254 13.9748 7.17521 15.9445 10.0001 15.9445L 10.0001 13.9445C 8.12777 13.9445 6.55782 12.6388 6.15567 10.8873L 4.20639 11.3349ZM 6.21436 10.1111L 5.18103 10.1111L 5.18103 12.1111L 6.21436 12.1111L 6.21436 10.1111ZM 10.0001 12.9445C 8.66349 12.9445 7.53241 12.0529 7.174 10.8299L 5.25471 11.3923C 5.85602 13.4442 7.75155 14.9445 10.0001 14.9445L 10.0001 12.9445ZM 12.8262 10.8299C 12.4678 12.0529 11.3368 12.9445 10.0001 12.9445L 10.0001 14.9445C 12.2487 14.9445 14.1442 13.4442 14.7455 11.3923L 12.8262 10.8299ZM 14.8192 10.1111L 13.7859 10.1111L 13.7859 12.1111L 14.8192 12.1111L 14.8192 10.1111ZM 10.0001 15.9445C 12.825 15.9445 15.1877 13.9748 15.7939 11.3349L 13.8446 10.8873C 13.4424 12.6388 11.8725 13.9445 10.0001 13.9445L 10.0001 15.9445ZM 6.66675 9.88885C 7.83275 9.88885 8.77783 8.94357 8.77783 7.77771L 6.77783 7.77771C 6.77783 7.83914 6.72804 7.88885 6.66675 7.88885L 6.66675 9.88885ZM 4.55566 7.77771C 4.55566 8.94357 5.50074 9.88885 6.66675 9.88885L 6.66675 7.88885C 6.60546 7.88885 6.55566 7.83914 6.55566 7.77771L 4.55566 7.77771ZM 6.66675 5.66663C 5.50082 5.66663 4.55566 6.61178 4.55566 7.77771L 6.55566 7.77771C 6.55566 7.71635 6.60539 7.66663 6.66675 7.66663L 6.66675 5.66663ZM 8.77783 7.77771C 8.77783 6.61178 7.83268 5.66663 6.66675 5.66663L 6.66675 7.66663C 6.72811 7.66663 6.77783 7.71635 6.77783 7.77771L 8.77783 7.77771ZM 13.4443 7.77771C 13.4443 7.83914 13.3945 7.88885 13.3333 7.88885L 13.3333 9.88885C 14.4993 9.88885 15.4443 8.94357 15.4443 7.77771L 13.4443 7.77771ZM 13.3333 7.66663C 13.3946 7.66663 13.4443 7.71635 13.4443 7.77771L 15.4443 7.77771C 15.4443 6.61178 14.4992 5.66663 13.3333 5.66663L 13.3333 7.66663ZM 13.2222 7.77771C 13.2222 7.71635 13.2719 7.66663 13.3333 7.66663L 13.3333 5.66663C 12.1673 5.66663 11.2222 6.61178 11.2222 7.77771L 13.2222 7.77771ZM 13.3333 7.88885C 13.272 7.88885 13.2222 7.83914 13.2222 7.77771L 11.2222 7.77771C 11.2222 8.94357 12.1672 9.88885 13.3333 9.88885L 13.3333 7.88885Z"/>
        </defs>
      </svg>
    ),
    solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z" />
      </svg>
    ),
  },

  places: {
    outline: (
      <svg width="20" height="19" viewBox="0 0 20 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>travel</title>
        <g id="Canvas" transform="translate(1733 1276)">
          <g id="travel">
          <use xlink:href="#path0_fill" transform="translate(-1732.04 -1275.94)"/>
          </g>
        </g>
        <defs>
          <path id="path0_fill" fill-rule="evenodd" d="M 14.9468 0.599083C 15.7456 -0.199694 17.0407 -0.199694 17.8395 0.599083C 18.6382 1.39791 18.6382 2.69301 17.8395 3.4918L 14.5593 6.77195L 16.1495 14.7019L 16.2021 14.9644L 16.0128 15.1537L 14.0536 17.113L 13.5266 17.6399L 13.2388 16.9525L 10.6242 10.7071L 7.97907 13.3522L 8.70824 16.6681L 8.76703 16.9355L 8.57345 17.1291L 7.68282 18.0196L 7.26388 18.4386L 6.92133 17.9552L 5.06732 15.3389C 4.57022 15.3203 4.07743 15.1213 3.69732 14.7413C 3.31712 14.3612 3.11817 13.8683 3.09965 13.3711L 0.483428 11.5172L 0 11.1746L 0.418977 10.7557L 1.3096 9.86512L 1.50317 9.67157L 1.77052 9.73035L 5.08641 10.4595L 7.73147 7.81441L 1.48605 5.1998L 0.798608 4.91201L 1.32558 4.38503L 3.28481 2.4258L 3.47414 2.23647L 3.73667 2.28912L 11.6666 3.87929L 14.9468 0.599083ZM 17.1323 1.30617C 16.7241 0.897937 16.0622 0.897942 15.6539 1.30619L 12.1844 4.77573L 11.9951 4.96507L 11.7326 4.91242L 3.80258 3.32224L 2.55966 4.56517L 8.80508 7.17978L 9.49252 7.46757L 8.96555 7.99454L 5.59995 11.3601L 5.40638 11.5537L 5.13902 11.4949L 1.82312 10.7658L 1.54504 11.0439L 3.8973 12.7108L 4.13847 12.8817L 4.10499 13.1753C 4.06998 13.4825 4.17009 13.7999 4.40436 14.0341C 4.63873 14.2684 4.9561 14.3685 5.26313 14.3335L 5.55681 14.3001L 5.72771 14.5412L 7.39469 16.8936L 7.67278 16.6155L 6.94361 13.2996L 6.88482 13.0322L 7.07839 12.8386L 10.4441 9.47298L 10.9711 8.94601L 11.2589 9.63346L 13.8734 15.8789L 15.1164 14.6359L 13.5262 6.70603L 13.4735 6.44351L 13.6629 6.25417L 17.1323 2.78469C 17.5406 2.37645 17.5406 1.7145 17.1323 1.30617Z"/>
        </defs>
      </svg>
    ),
    solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z" />
      </svg>
    ),
  },

  symbols: {
    outline: (
      <svg width="19" height="16" viewBox="0 0 19 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>symbols</title>
        <g id="Canvas" transform="translate(1660 1274)">
          <g id="symbols">
          <use xlink:href="#path0_fill" transform="translate(-1659.5 -1274)"/>
          </g>
        </g>
        <defs>
          <path id="path0_fill" fill-rule="evenodd" d="M 5.05505 1C 2.79626 1 1 2.75369 1 4.875C 1 6.12493 1.61958 7.24229 2.59326 7.95439L 2.9367 8.20556L 2.90776 8.26242L 9 13.823L 15.0922 8.26242L 15.0633 8.20556L 15.4067 7.95439C 16.3804 7.24229 17 6.12493 17 4.875C 17 2.7537 15.2036 1 12.9449 1C 11.4353 1 10.1258 1.78696 9.42824 2.94437L 9.00003 3.65486L 8.57178 2.9444C 7.87409 1.78695 6.56457 1 5.05505 1ZM 0 4.875C 0 2.16379 2.28236 0 5.05505 0C 6.64635 0 8.07138 0.710132 8.99998 1.82632C 9.92852 0.710119 11.3536 0 12.9449 0C 15.7175 0 18 2.16378 18 4.875C 18 6.37567 17.2972 7.71291 16.2016 8.60376L 16.0476 8.7443L 9.33707 14.8693L 9 15.177L 8.66293 14.8693L 1.95236 8.7443L 1.79838 8.60376C 0.702813 7.71291 0 6.37567 0 4.875Z"/>
        </defs>
      </svg>
    ),
    solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z" />
      </svg>
    ),
  },
}

const search = {
  loupe: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
    </svg>
  ),

  delete: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
    </svg>
  ),
}

export default { categories, search }
