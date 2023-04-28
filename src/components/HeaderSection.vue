<template>
  <div class="header">
    <div class="container-fluid">
      <div class="d-flex align-items-center justify-content-between">
        <div class="header__left d-flex align-items-center">
          <div class="header__burger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample">
            <div class="header__burger-line"></div>
            <div class="header__burger-line"></div>
            <div class="header__burger-line"></div>
          </div>
          <a href="/">
            <img src="@/assets/img/header/logo.png" class="header__logo header__logo--desktop" alt="logo" />
          </a>

          <nav class="navbar navbar-expand-lg header__navbar">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/livecasino">Лайв Казино</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/casino">Казино</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/promo">Акции</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/tournaments">Турниры</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <a href="/">
          <img src="@/assets/img/header/logo.png" class="header__logo header__logo--mobile" alt="logo" />
        </a>

        <div class="header__right d-flex align-items-center">
          <div class="header__button-holder d-flex align-items-center gap-3">
            <button class="btn btn-primary header__button header__button1" type="button" data-bs-toggle="modal"
              data-bs-target="#loginModal">
              Вход
            </button>
            <button class="btn btn-primary header__button header__button2" type="button" data-bs-toggle="modal"
              data-bs-target="#regModal">
              Регистрация
            </button>

            <div class="header__dropdown dropdown">
              <button class="
                  btn btn-secondary
                  dropdown-toggle
                  header__dropdown-button
                " type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="@/assets/img/header/ru.svg" alt="ru" />
              </button>
              <ul class="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <div class="dropdown-item-group">
                  <li>
                    <a class="dropdown-item" href="#"><img src="@/assets/img/header/gb.svg" alt="ru" /></a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><img src="@/assets/img/header/ru.svg" alt="ru" /></a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><img src="../assets/img/header/fr.svg" alt="ru" /></a>
                  </li>
                </div>

                <div class="dropdown-item-group">
                  <li>
                    <a class="dropdown-item" href="#"><img src="../assets/img/header/es.svg" alt="ru" /></a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><img src="../assets/img/header/pt.svg" alt="ru" /></a>
                  </li>
                  <li></li>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <button _nghost-wlc-app-c77="" wlc-button="" type="button" data-bs-toggle="modal" data-bs-target="#loginModal"
          data-wlc-element="wlc-btn wlc-btn-signup" class="
            wlc-btn
            wlc-btn-signup
            wlc-btn-signup--size-default
            wlc-btn-signup--theme-default
            wlc-btn-signup--theme-mod-default
            wlc-btn-signup--type-default
            ng-star-inserted
            header__login
          ">
          <span _ngcontent-wlc-app-c77="" class="wlc-btn wlc-btn-signup__text">
            <span _ngcontent-wlc-app-c77="" wlc-icon="" data-wlc-element="wlc-icon" class="
                wlc-icon
                wlc-icon--theme-default
                wlc-icon--theme-mod-default
                wlc-icon--type-default
                ng-star-inserted
                wlc-icon--loaded wlc-icon--svg
              "><span class="wlc-icon-content ng-star-inserted"><svg width="36" height="36" viewBox="0 0 36 36"
                  fill="#869094" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17.9298 33.8597C26.7277 33.8597 33.8597 26.7277 33.8597 17.9298C33.8597 9.13203 26.7277 2 17.9298 2C9.13203 2 2 9.13203 2 17.9298C2 26.7277 9.13203 33.8597 17.9298 33.8597ZM17.9298 35.8597C27.8322 35.8597 35.8597 27.8322 35.8597 17.9298C35.8597 8.02746 27.8322 0 17.9298 0C8.02746 0 0 8.02746 0 17.9298C0 27.8322 8.02746 35.8597 17.9298 35.8597Z"
                    fill="#869094"></path>
                  <path
                    d="M23.3664 10.0113C23.3477 10.0098 23.332 10 23.3125 10H15.25C14.0095 10 13 11.0095 13 12.25V13C13 13.414 13.3359 13.75 13.75 13.75C14.164 13.75 14.4999 13.414 14.4999 13V12.25C14.4999 11.8368 14.8366 11.5 15.25 11.5H18.7442L18.5154 11.5765C17.908 11.7865 17.5 12.3588 17.5 13V24.25H15.25C14.8366 24.25 14.4999 23.9132 14.4999 23.5V22C14.4999 21.586 14.164 21.25 13.75 21.25C13.3359 21.25 13 21.586 13 22V23.5C13 24.7405 14.0095 25.75 15.25 25.75H17.5V26.5C17.5 27.3272 18.1726 28 18.9999 28C19.1604 28 19.3127 27.9768 19.4777 27.9257L23.9837 26.4235C24.5919 26.2135 25 25.6412 25 25V11.5C25 10.6255 24.2462 9.93999 23.3664 10.0113Z"
                    fill="#869094"></path>
                  <path
                    d="M15.0302 16.9699L12.0302 13.9699C11.8157 13.7554 11.4933 13.6909 11.2127 13.8072C10.933 13.9234 10.75 14.1972 10.75 14.5001V16.7501H7.74995C7.33604 16.7501 7 17.0862 7 17.5001C7 17.9141 7.33604 18.2502 7.74995 18.2502H10.75V20.5002C10.75 20.8031 10.933 21.0768 11.2127 21.1931C11.4933 21.3093 11.8157 21.2449 12.0302 21.0304L15.0302 18.0303C15.3235 17.7371 15.3235 17.2632 15.0302 16.9699Z"
                    fill="#869094"></path>
                </svg> </span><!----><!----></span><!---->
          </span>
        </button>
      </div>
    </div>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Меню</h5>

        <div class="offcanvas__closer" data-bs-dismiss="offcanvas" aria-label="Close">
          <div class="offcanvas__closer-line offcanvas__closer-line1"></div>
          <div class="offcanvas__closer-line offcanvas__closer-line2"></div>
        </div>
      </div>
      <div class="offcanvas-body">
        <div class="offcanvas__logo-holder d-flex justify-content-center">
          <a href="/">
            <img class="offcanvas__logo" src="@/assets/img/header/logo.png" alt="logo" />
          </a>
        </div>

        <div class="row">
          <div class="
              offcanvas__button-holder
              d-flex
              flex-column
              align-items-center
            ">
            <button class="btn btn-primary offcanvas__button offcanvas__button1" type="button" data-bs-toggle="modal"
              data-bs-target="#loginModal">
              Вход
            </button>
            <button class="btn btn-primary offcanvas__button offcanvas__button2" type="button" data-bs-toggle="modal"
              data-bs-target="#regModal">
              Регистрация
            </button>
          </div>
        </div>

        <ul class="nav flex-column d-none d-lg-block">
          <li class="nav-item offcanvas__nav-item">
            <a class="nav-link active" href="/livecasino">
              <div class="d-flex align-items-center">
                <svg class="offcanvas__menu-icon" width="50" height="50" viewBox="0 0 50 50" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                      d="M44.0121 47.2376L42.7375 41.969C42.2001 39.7477 40.4961 37.9958 38.2905 37.3968L35.325 36.5914C35.2269 36.5531 35.1267 36.5266 35.026 36.5102L33.1691 36.0059C32.1184 35.7206 31.2728 34.9381 30.907 33.9127L30.6341 33.1478H37.7906C39.8824 33.1478 41.5841 31.4461 41.5841 29.3543V16.5739C41.5841 7.43499 34.1492 0 25.0103 0C15.8714 0 8.43642 7.43499 8.43642 16.5739V29.3543C8.43642 31.4461 10.1381 33.1478 12.23 33.1478H19.0058L18.7379 33.9652C18.4042 34.9835 17.5946 35.7829 16.5721 36.1038L11.2982 37.759C9.16316 38.4289 7.53778 40.2027 7.05635 42.3879L5.97779 47.2825C5.83125 47.9476 5.99199 48.6337 6.41869 49.1647C6.8454 49.6956 7.48081 50.0001 8.16193 50.0001H41.8384C42.5285 50.0001 43.1691 49.6891 43.5959 49.1467C44.0226 48.6044 44.1743 47.9086 44.0121 47.2376ZM12.23 30.2111C11.7576 30.2111 11.3731 29.8267 11.3731 29.3543V16.5739C11.3731 9.0543 17.4907 2.93672 25.0103 2.93672C32.5299 2.93672 38.6474 9.0543 38.6474 16.5739V29.3543C38.6474 29.8267 38.263 30.2111 37.7906 30.2111H32.0885C34.4672 28.0851 35.9802 24.9114 35.9802 21.3712V14.7833C35.9802 13.9724 35.3228 13.315 34.5118 13.315H15.5086C14.6977 13.315 14.0403 13.9724 14.0403 14.7833V21.3712C14.0403 24.9114 15.5534 28.0851 17.932 30.2111H12.23ZM16.977 21.3712V16.2517H33.0435V21.3712C33.0435 26.1376 29.4398 30.0153 25.0103 30.0153C20.5807 30.0153 16.977 26.1376 16.977 21.3712ZM27.8727 34.1473C27.4069 34.5894 26.4183 35.2203 24.566 35.2203C23.0617 35.2203 22.1921 34.5994 21.7645 34.1594L22.2792 32.5888C23.1526 32.8259 24.0677 32.952 25.0102 32.952C25.8135 32.952 26.5966 32.8595 27.3512 32.6857L27.8727 34.1473ZM17.4514 38.9058C18.6354 38.5342 19.6669 37.8205 20.4324 36.8808C21.4017 37.5853 22.7706 38.1569 24.566 38.1569C26.843 38.1569 28.3477 37.448 29.2387 36.8143C30.0327 37.7626 31.1004 38.4668 32.3192 38.8155C31.0452 40.1426 28.6637 41.8448 24.828 41.8448C20.6205 41.8448 18.3114 40.2344 17.1583 38.9976L17.4514 38.9058ZM9.03316 47.0633L9.92416 43.0197C10.1799 41.8589 11.0433 40.9167 12.1774 40.5608L14.1573 39.9395C15.388 41.6947 18.458 44.7816 24.8281 44.7816C30.8658 44.7816 34.1386 41.415 35.4326 39.6637L37.5208 40.2308C38.6924 40.5489 39.5976 41.4796 39.883 42.6597L40.9484 47.0634H9.03316V47.0633Z"
                      fill="white"></path>
                  </g>
                  <defs>
                    <clipPath>
                      <rect width="50" height="50" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>

                <p class="offcanvas__menu-text">Лайв Казино</p>
              </div>
            </a>
          </li>
          <li class="nav-item offcanvas__nav-item ">
            <a class="nav-link" href="#2">
              <div class="d-flex align-items-center">
                <svg class="offcanvas__menu-icon" width="50" height="50" viewBox="0 0 50 50" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M42.6777 7.32227C37.9558 2.60049 31.6777 0 25 0C18.3223 0 12.0442 2.60049 7.32227 7.32227C2.60049 12.0442 0 18.3223 0 25C0 31.6777 2.60049 37.9558 7.32227 42.6777C12.0442 47.3995 18.3223 50 25 50C31.6777 50 37.9558 47.3995 42.6777 42.6777C47.3995 37.9558 50 31.6777 50 25C50 18.3223 47.3995 12.0442 42.6777 7.32227ZM47.0703 25C47.0703 27.4732 46.6613 29.8528 45.9075 32.0746L43.1926 30.9501C43.8069 29.0763 44.1406 27.0766 44.1406 25C44.1406 22.9234 43.8069 20.9237 43.1926 19.0499L45.9075 17.9254C46.6613 20.1472 47.0703 22.5268 47.0703 25ZM25 41.2109C16.0612 41.2109 8.78906 33.9388 8.78906 25C8.78906 16.0612 16.0612 8.78906 25 8.78906C33.9388 8.78906 41.2109 16.0612 41.2109 25C41.2109 33.9388 33.9388 41.2109 25 41.2109ZM2.92969 25C2.92969 22.5268 3.33867 20.1472 4.09248 17.9254L6.80742 19.0499C6.19307 20.9237 5.85938 22.9234 5.85938 25C5.85938 27.0766 6.19307 29.0763 6.80742 30.9501L4.09248 32.0746C3.33867 29.8528 2.92969 27.4732 2.92969 25ZM44.7814 15.2207L42.0687 16.3443C40.2277 12.7286 37.2714 9.77227 33.6557 7.93125L34.7793 5.21855C39.1068 7.3667 42.6333 10.8932 44.7814 15.2207ZM32.0746 4.09248L30.9501 6.80742C29.0763 6.19307 27.0766 5.85938 25 5.85938C22.9234 5.85938 20.9237 6.19307 19.0499 6.80742L17.9254 4.09248C20.1472 3.33867 22.5268 2.92969 25 2.92969C27.4732 2.92969 29.8528 3.33867 32.0746 4.09248ZM15.2207 5.21855L16.3443 7.93125C12.7286 9.77227 9.77227 12.7286 7.93125 16.3443L5.21855 15.2207C7.3667 10.8932 10.8932 7.3667 15.2207 5.21855ZM5.21855 34.7793L7.93125 33.6557C9.77227 37.2714 12.7286 40.2277 16.3443 42.0687L15.2207 44.7814C10.8932 42.6333 7.3667 39.1068 5.21855 34.7793ZM17.9254 45.9075L19.0499 43.1926C20.9237 43.8069 22.9234 44.1406 25 44.1406C27.0766 44.1406 29.0763 43.8069 30.9501 43.1926L32.0746 45.9075C29.8528 46.6613 27.4732 47.0703 25 47.0703C22.5268 47.0703 20.1472 46.6613 17.9254 45.9075ZM34.7793 44.7814L33.6557 42.0687C37.2714 40.2277 40.2277 37.2714 42.0687 33.6557L44.7814 34.7793C42.6333 39.1068 39.1068 42.6333 34.7793 44.7814Z"
                    fill="white"></path>
                  <path
                    d="M25 11.7188C17.6767 11.7188 11.7188 17.6767 11.7188 25C11.7188 32.3233 17.6767 38.2812 25 38.2812C32.3233 38.2812 38.2812 32.3233 38.2812 25C38.2812 17.6767 32.3233 11.7188 25 11.7188ZM25 35.3516C19.2921 35.3516 14.6484 30.7079 14.6484 25C14.6484 19.2921 19.2921 14.6484 25 14.6484C30.7079 14.6484 35.3516 19.2921 35.3516 25C35.3516 30.7079 30.7079 35.3516 25 35.3516Z"
                    fill="white"></path>
                </svg>

                <p class="offcanvas__menu-text">Казино</p>
              </div>
            </a>
          </li>
          <li class="nav-item offcanvas__nav-item">
            <a class="nav-link" href="#3">
              <div class="d-flex align-items-center">
                <svg class="offcanvas__menu-icon" width="50" height="50" viewBox="0 0 50 50" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                      d="M50 21.3082C50 16.3337 46.3274 12.2026 41.5557 11.4913V4.86855C41.5557 2.18398 39.3752 0 36.6951 0C34.015 0 31.8347 2.18398 31.8347 4.86855V5.5457L18.3289 10.8358H10.8787C4.88018 10.8357 0 15.7239 0 21.7323C0 27.3612 4.2832 32.0068 9.75644 32.5712L14.4115 48.9348C14.5908 49.5652 15.1659 50 15.8203 50H23.2422C23.6975 50 24.1269 49.788 24.404 49.4263C24.6813 49.0646 24.7749 48.5942 24.6573 48.1537L20.7681 33.5844L31.8346 37.919V38.5962C31.8346 41.2808 34.0149 43.4647 36.695 43.4647C39.3751 43.4647 41.5556 41.2808 41.5556 38.5962V31.1251C46.3274 30.4138 50 26.2826 50 21.3082ZM12.5345 13.7703H17.1402V29.6944H12.5345V13.7703ZM2.92969 21.7323C2.92969 17.7765 5.82529 14.4864 9.60478 13.8738V29.5908C5.82529 28.9782 2.92969 25.6883 2.92969 21.7323ZM16.9261 47.0655L12.8192 32.629H17.4804L21.3342 47.0655H16.9261ZM20.0699 30.16V13.3048L31.8347 8.69668V34.7683L20.0699 30.16ZM38.626 38.5962C38.626 39.6626 37.7598 40.5303 36.6951 40.5303C35.6305 40.5303 34.7644 39.6627 34.7644 38.5962V4.86855C34.7644 3.80215 35.6305 2.93457 36.6951 2.93457C37.7598 2.93457 38.626 3.80215 38.626 4.86855V38.5962ZM41.5557 28.1442V14.4721C44.7033 15.1479 47.0703 17.9563 47.0703 21.3082C47.0703 24.6601 44.7034 27.4684 41.5557 28.1442Z"
                      fill="white"></path>
                  </g>
                  <defs>
                    <clipPath>
                      <rect width="50" height="50" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>

                <p class="offcanvas__menu-text">Акции</p>
              </div>
            </a>
          </li>
          <li class="nav-item offcanvas__nav-item">
            <a class="nav-link" href="#4">
              <div class="d-flex align-items-center">
                <svg class="offcanvas__menu-icon" width="50" height="50" viewBox="0 0 50 50" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M48.5352 3.6087H42.1188C42.1421 2.89803 42.1551 2.18315 42.1551 1.46484C42.1551 0.655746 41.4989 0 40.6902 0H9.30977C8.50105 0 7.84492 0.655746 7.84492 1.46484C7.84492 2.18315 7.85789 2.89803 7.88116 3.6087H1.46484C0.655746 3.6087 0 4.26445 0 5.07355C0 11.6371 1.71547 17.8295 4.83017 22.5105C7.90901 27.1381 12.0102 29.7924 16.4406 30.0507C17.445 31.1436 18.5066 32.0347 19.6125 32.7145V39.225H17.1551C14.1842 39.225 11.7676 41.642 11.7676 44.6125V47.0699H11.6634C10.8543 47.0699 10.1986 47.7261 10.1986 48.5348C10.1986 49.3439 10.8543 49.9996 11.6634 49.9996H38.3366C39.1457 49.9996 39.8014 49.3439 39.8014 48.5348C39.8014 47.7261 39.1457 47.0699 38.3366 47.0699H38.2324V44.6125C38.2324 41.642 35.8158 39.225 32.8449 39.225H30.3875V32.7145C31.4934 32.0351 32.5554 31.1436 33.5598 30.0507C37.9898 29.7924 42.091 27.1381 45.1702 22.5105C48.2849 17.8295 50 11.6371 50 5.07355C50 4.26445 49.3443 3.6087 48.5352 3.6087ZM7.26929 20.8878C4.70009 17.0269 3.19061 11.977 2.96059 6.53839H8.04482C8.57315 13.224 10.1425 19.4038 12.5954 24.3092C12.986 25.0904 13.3945 25.8286 13.8184 26.5236C11.3819 25.6035 9.12704 23.6801 7.26929 20.8878ZM35.3027 44.6125V47.0703H14.6973V44.6125C14.6973 43.2575 15.7997 42.1547 17.1551 42.1547H32.8449C34.2003 42.1547 35.3027 43.2575 35.3027 44.6125ZM27.4578 39.225H22.5422V33.9874C23.3475 34.1995 24.168 34.3098 25 34.3098C25.832 34.3098 26.6525 34.1995 27.4578 33.9874V39.225ZM28.3649 30.5023C28.299 30.5294 28.2356 30.5622 28.175 30.5984C27.1397 31.1134 26.0757 31.3801 25 31.3801C23.9246 31.3801 22.8611 31.1134 21.8262 30.5992C21.7648 30.5622 21.701 30.5294 21.6343 30.5016C20.4857 29.8943 19.3745 28.9772 18.3235 27.7721C18.2682 27.6932 18.206 27.6203 18.137 27.5539C17.0937 26.3153 16.1121 24.7917 15.2157 22.9988C12.5237 17.6151 10.9688 10.5362 10.7918 2.92969H39.2082C39.0308 10.5362 37.476 17.6155 34.7843 22.9988C33.8879 24.7917 32.9063 26.3153 31.8634 27.5539C31.794 27.6203 31.731 27.6936 31.6761 27.7725C30.6252 28.978 29.5135 29.8946 28.3649 30.5023ZM42.7307 20.8878C40.873 23.6801 38.6181 25.6035 36.1816 26.5236C36.6055 25.8286 37.014 25.0904 37.4046 24.3092C39.8575 19.4038 41.4265 13.224 41.9552 6.53839H47.0394C46.8094 11.977 45.2999 17.0269 42.7307 20.8878Z"
                    fill="white"></path>
                </svg>

                <p class="offcanvas__menu-text">Турниры</p>
              </div>
            </a>
          </li>
        </ul>

        <div class="offcanvas__line mt-3 d-none d-lg-block"></div>

        <ul class="nav flex-column d-none d-lg-block">
          <li class="nav-item offcanvas__nav-item">
            <a class="nav-link active" href="#5">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="offcanvas__menu-text ms-2">Условия и положения</p>
                </div>
              </div>
            </a>
          </li>
          <li class="nav-item offcanvas__nav-item">
            <a class="nav-link" href="#6">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="offcanvas__menu-text ms-2">
                    Политика конфиденциальности
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li class="nav-item offcanvas__nav-item">
            <a class="nav-link" href="#7">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="offcanvas__menu-text ms-2">Ответственная игра</p>
                </div>
              </div>
            </a>
          </li>
          <li class="nav-item offcanvas__nav-item">
            <a class="nav-link" href="#8">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="offcanvas__menu-text ms-2">Честная игра</p>
                </div>
              </div>
            </a>
          </li>

          <li class="nav-item offcanvas__nav-item">
            <a class="nav-link" href="#9">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="offcanvas__menu-text ms-2">Партнёрская программа</p>
                </div>
              </div>
            </a>
          </li>

          <li class="nav-item offcanvas__nav-item">
            <a class="nav-link" href="#10">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="offcanvas__menu-text ms-2">Правила игр</p>
                </div>
              </div>
            </a>
          </li>
        </ul>

        <div class="offcanvas__line mt-3 d-none d-lg-block"></div>

        <div class="mobile_serch d-lg-none">
          <div class="container">
            <div class="row text-white mx-auto">

              <div class="field__search mt-3">
                <div class="field__search__items">
                  <div class="field__search__items__name">Новые игры</div>

                  <div class="field__search__items__ico">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 8.56639C0 3.83531 3.83531 0 8.56639 0C13.2975 0 17.1328 3.83531 17.1328 8.56639C17.1328 10.3124 16.6104 11.9363 15.7135 13.2906L18.3443 15.9213C19.0133 16.5904 19.0133 17.6752 18.3443 18.3443C17.6752 19.0133 16.5904 19.0133 15.9213 18.3443L13.2906 15.7135C11.9363 16.6104 10.3124 17.1328 8.56639 17.1328C3.83531 17.1328 0 13.2975 0 8.56639ZM12.3033 12.0954C12.2661 12.1268 12.2299 12.1599 12.1949 12.1949C12.1599 12.2299 12.1268 12.2661 12.0954 12.3033C11.1748 13.173 9.93286 13.7062 8.56639 13.7062C5.72774 13.7062 3.42656 11.405 3.42656 8.56639C3.42656 5.72774 5.72774 3.42656 8.56639 3.42656C11.405 3.42656 13.7062 5.72774 13.7062 8.56639C13.7062 9.93286 13.173 11.1748 12.3033 12.0954Z">
                      </path>
                    </svg>
                  </div>

                </div>
              </div>
              <div class="field__search mt-3">
                <div class="field__search__items">
                  <div class="field__search__items__name">Лайв Казино</div>

                  <div class="field__search__items__ico">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 8.56639C0 3.83531 3.83531 0 8.56639 0C13.2975 0 17.1328 3.83531 17.1328 8.56639C17.1328 10.3124 16.6104 11.9363 15.7135 13.2906L18.3443 15.9213C19.0133 16.5904 19.0133 17.6752 18.3443 18.3443C17.6752 19.0133 16.5904 19.0133 15.9213 18.3443L13.2906 15.7135C11.9363 16.6104 10.3124 17.1328 8.56639 17.1328C3.83531 17.1328 0 13.2975 0 8.56639ZM12.3033 12.0954C12.2661 12.1268 12.2299 12.1599 12.1949 12.1949C12.1599 12.2299 12.1268 12.2661 12.0954 12.3033C11.1748 13.173 9.93286 13.7062 8.56639 13.7062C5.72774 13.7062 3.42656 11.405 3.42656 8.56639C3.42656 5.72774 5.72774 3.42656 8.56639 3.42656C11.405 3.42656 13.7062 5.72774 13.7062 8.56639C13.7062 9.93286 13.173 11.1748 12.3033 12.0954Z">
                      </path>
                    </svg>
                  </div>

                </div>
              </div>

              <div class="field__search mt-3">
                <div class="field__search__items">
                  <div class="field__search__items__name">Казино</div>

                  <div class="field__search__items__ico">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 8.56639C0 3.83531 3.83531 0 8.56639 0C13.2975 0 17.1328 3.83531 17.1328 8.56639C17.1328 10.3124 16.6104 11.9363 15.7135 13.2906L18.3443 15.9213C19.0133 16.5904 19.0133 17.6752 18.3443 18.3443C17.6752 19.0133 16.5904 19.0133 15.9213 18.3443L13.2906 15.7135C11.9363 16.6104 10.3124 17.1328 8.56639 17.1328C3.83531 17.1328 0 13.2975 0 8.56639ZM12.3033 12.0954C12.2661 12.1268 12.2299 12.1599 12.1949 12.1949C12.1599 12.2299 12.1268 12.2661 12.0954 12.3033C11.1748 13.173 9.93286 13.7062 8.56639 13.7062C5.72774 13.7062 3.42656 11.405 3.42656 8.56639C3.42656 5.72774 5.72774 3.42656 8.56639 3.42656C11.405 3.42656 13.7062 5.72774 13.7062 8.56639C13.7062 9.93286 13.173 11.1748 12.3033 12.0954Z">
                      </path>
                    </svg>
                  </div>

                </div>
              </div>

              <div class="field__search mt-3">
                <div class="field__search__items">
                  <div class="field__search__items__name">Акции</div>

                  <div class="field__search__items__ico">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 8.56639C0 3.83531 3.83531 0 8.56639 0C13.2975 0 17.1328 3.83531 17.1328 8.56639C17.1328 10.3124 16.6104 11.9363 15.7135 13.2906L18.3443 15.9213C19.0133 16.5904 19.0133 17.6752 18.3443 18.3443C17.6752 19.0133 16.5904 19.0133 15.9213 18.3443L13.2906 15.7135C11.9363 16.6104 10.3124 17.1328 8.56639 17.1328C3.83531 17.1328 0 13.2975 0 8.56639ZM12.3033 12.0954C12.2661 12.1268 12.2299 12.1599 12.1949 12.1949C12.1599 12.2299 12.1268 12.2661 12.0954 12.3033C11.1748 13.173 9.93286 13.7062 8.56639 13.7062C5.72774 13.7062 3.42656 11.405 3.42656 8.56639C3.42656 5.72774 5.72774 3.42656 8.56639 3.42656C11.405 3.42656 13.7062 5.72774 13.7062 8.56639C13.7062 9.93286 13.173 11.1748 12.3033 12.0954Z">
                      </path>
                    </svg>
                  </div>

                </div>
              </div>

              <div class="field__search mt-3">
                <div class="field__search__items">
                  <div class="field__search__items__name">Турниры</div>

                  <div class="field__search__items__ico">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 8.56639C0 3.83531 3.83531 0 8.56639 0C13.2975 0 17.1328 3.83531 17.1328 8.56639C17.1328 10.3124 16.6104 11.9363 15.7135 13.2906L18.3443 15.9213C19.0133 16.5904 19.0133 17.6752 18.3443 18.3443C17.6752 19.0133 16.5904 19.0133 15.9213 18.3443L13.2906 15.7135C11.9363 16.6104 10.3124 17.1328 8.56639 17.1328C3.83531 17.1328 0 13.2975 0 8.56639ZM12.3033 12.0954C12.2661 12.1268 12.2299 12.1599 12.1949 12.1949C12.1599 12.2299 12.1268 12.2661 12.0954 12.3033C11.1748 13.173 9.93286 13.7062 8.56639 13.7062C5.72774 13.7062 3.42656 11.405 3.42656 8.56639C3.42656 5.72774 5.72774 3.42656 8.56639 3.42656C11.405 3.42656 13.7062 5.72774 13.7062 8.56639C13.7062 9.93286 13.173 11.1748 12.3033 12.0954Z">
                      </path>
                    </svg>
                  </div>

                </div>
              </div>

              <div class="field__search mt-3">
                <div class="field__search__items">
                  <div class="field__search__items__name">Информация</div>

                  <div class="field__search__items__ico">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 8.56639C0 3.83531 3.83531 0 8.56639 0C13.2975 0 17.1328 3.83531 17.1328 8.56639C17.1328 10.3124 16.6104 11.9363 15.7135 13.2906L18.3443 15.9213C19.0133 16.5904 19.0133 17.6752 18.3443 18.3443C17.6752 19.0133 16.5904 19.0133 15.9213 18.3443L13.2906 15.7135C11.9363 16.6104 10.3124 17.1328 8.56639 17.1328C3.83531 17.1328 0 13.2975 0 8.56639ZM12.3033 12.0954C12.2661 12.1268 12.2299 12.1599 12.1949 12.1949C12.1599 12.2299 12.1268 12.2661 12.0954 12.3033C11.1748 13.173 9.93286 13.7062 8.56639 13.7062C5.72774 13.7062 3.42656 11.405 3.42656 8.56639C3.42656 5.72774 5.72774 3.42656 8.56639 3.42656C11.405 3.42656 13.7062 5.72774 13.7062 8.56639C13.7062 9.93286 13.173 11.1748 12.3033 12.0954Z">
                      </path>
                    </svg>
                  </div>

                </div>
              </div>


              <div class="field__search mt-3">
                <div class="field__search__items">
                  <div class="field__search__items__name">Vip Program</div>

                  <div class="field__search__items__ico">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 8.56639C0 3.83531 3.83531 0 8.56639 0C13.2975 0 17.1328 3.83531 17.1328 8.56639C17.1328 10.3124 16.6104 11.9363 15.7135 13.2906L18.3443 15.9213C19.0133 16.5904 19.0133 17.6752 18.3443 18.3443C17.6752 19.0133 16.5904 19.0133 15.9213 18.3443L13.2906 15.7135C11.9363 16.6104 10.3124 17.1328 8.56639 17.1328C3.83531 17.1328 0 13.2975 0 8.56639ZM12.3033 12.0954C12.2661 12.1268 12.2299 12.1599 12.1949 12.1949C12.1599 12.2299 12.1268 12.2661 12.0954 12.3033C11.1748 13.173 9.93286 13.7062 8.56639 13.7062C5.72774 13.7062 3.42656 11.405 3.42656 8.56639C3.42656 5.72774 5.72774 3.42656 8.56639 3.42656C11.405 3.42656 13.7062 5.72774 13.7062 8.56639C13.7062 9.93286 13.173 11.1748 12.3033 12.0954Z">
                      </path>
                    </svg>
                  </div>

                </div>
              </div>

              <div class="field__search mt-3">
                <div class="field__search__items">
                  <div class="field__search__items__name">FAQ</div>

                  <div class="field__search__items__ico">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 8.56639C0 3.83531 3.83531 0 8.56639 0C13.2975 0 17.1328 3.83531 17.1328 8.56639C17.1328 10.3124 16.6104 11.9363 15.7135 13.2906L18.3443 15.9213C19.0133 16.5904 19.0133 17.6752 18.3443 18.3443C17.6752 19.0133 16.5904 19.0133 15.9213 18.3443L13.2906 15.7135C11.9363 16.6104 10.3124 17.1328 8.56639 17.1328C3.83531 17.1328 0 13.2975 0 8.56639ZM12.3033 12.0954C12.2661 12.1268 12.2299 12.1599 12.1949 12.1949C12.1599 12.2299 12.1268 12.2661 12.0954 12.3033C11.1748 13.173 9.93286 13.7062 8.56639 13.7062C5.72774 13.7062 3.42656 11.405 3.42656 8.56639C3.42656 5.72774 5.72774 3.42656 8.56639 3.42656C11.405 3.42656 13.7062 5.72774 13.7062 8.56639C13.7062 9.93286 13.173 11.1748 12.3033 12.0954Z">
                      </path>
                    </svg>
                  </div>

                </div>
              </div>

            </div>


            <div class="field__search d-flex justify-content-center mt-3">
              <select class="offcanvas__select form-select" aria-label="Default select example">
                <option value="0" selected>
                  <img src="@/assets/img/header/ru.svg" alt="ru" />Русский
                </option>
                <option value="1">
                  <img src="@/assets/img/header/gb.svg" alt="gb" />English
                </option>
                <option value="2">
                  <img src="@/assets/img/header/fr.svg" alt="fr" />Français
                </option>
                <option value="3">
                  <img src="@/assets/img/header/es.svg" alt="es" />Español
                </option>
                <option value="4">
                  <img src="@/assets/img/header/pt.svg" alt="pt" />Português
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="offcanvas__modal modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Login Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <LoginSection />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <!--  <button type="button" class="btn btn-primary">Save changes</button>-->
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="offcanvas__modal modal fade" id="regModal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Reg Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-xl-7">
                  <RegisterSection />
                </div>
                <div class="col-xl-5"></div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <!--  <button type="button" class="btn btn-primary">Save changes</button>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterSection from "@/components/RegisterSection.vue";
import LoginSection from "@/components/LoginSection.vue";
export default {
  name: "HeaderSection",
  components: {
    LoginSection,
    RegisterSection
  },
};
</script>

<style scoped lang="scss">
.btn-close {
  filter: invert(100%);
}

.header {
  padding-left: 20px;
  padding-top: 15px;

  .offcanvas__closer {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    width: 20px;
    height: 20px;

    cursor: pointer;
    margin-right: 0px;
  }

  .offcanvas__closer:hover .offcanvas__closer-line {
    background-color: #fff;
  }

  .offcanvas__closer-line {
    position: absolute;
    height: 3px;
    width: 20px;

    border-radius: 1px;

    background-color: #717f84;
  }

  .offcanvas__closer-line1 {
    transform: rotate(45deg);
  }

  .offcanvas__closer-line2 {
    transform: rotate(135deg);
  }

  .offcanvas {
    width: 290px;
    background-color: #132932;
  }

  .offcanvas-title {
    color: #fff;
    font-size: 14px;
    font-weight: 700;
  }

  .offcanvas__logo {
    width: 228px;
    height: auto;
  }

  .offcanvas__button-holder {
    width: 100%;
    background-color: #0d2129;

    margin: 30px 0 0;
    padding: 20px 0;
  }

  .offcanvas__button {
    color: #fff;
    font-size: 14px;
    font-weight: 700;

    height: 40px;
    width: 144px;
  }

  .offcanvas__button1,
  .offcanvas__button1:focus {
    border: 2px solid #ffffff;
    background-color: #0d2129;
  }

  .offcanvas__button2,
  .offcanvas__button2:focus {
    margin-top: 20px;
    background-color: #d4145a;
    border: 2px solid #d4145a !important;
  }

  .offcanvas__button1:hover {
    color: #fff;

    background-color: #341e33;
    border: 2px solid #d4145a !important;
  }

  .offcanvas__button2:hover {
    color: #fff;
    background-color: #d4145a !important;
    border: 2px solid #d4145a !important;

    -webkit-box-shadow: 0px 3px 20px 0px #d4145a;
    -moz-box-shadow: 0px 3px 20px 0px #d4145a;
    box-shadow: 0px 3px 20px 0px #d4145a;
  }

  .offcanvas__button:active {
    background-color: #d4145a;
  }

  .offcanvas__menu-icon {
    width: 25px;
    height: auto;
  }

  .offcanvas__menu-text {
    font-size: 16px;

    margin-top: 16px;
    margin-left: 15px;

    color: #fff;
  }

  .offcanvas__nav-item .nav-link {
    height: 50px;
    display: flex;
    align-items: center;
  }

  .offcanvas__nav-item:hover {
    background-color: #163745;

    cursor: pointer;
  }

  .offcanvas__line {
    width: 100%;
    height: 2px;
    background-color: #42545b;
  }

  .offcanvas__select {
    color: #fff;
    width: 100%;
    background-color: #17313a;
    
    border: none;

    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;

    padding-left: 0;
  }

  .offcanvas__select img {
    width: 25px;
    height: 25px;

    display: inline;
  }

  .offcanvas__modal .modal-content {
    background-color: #132932;
  }

}

.header__burger {
  display: flex;
  flex-direction: column;

  width: 30px;

  margin-top: -6px;

  cursor: pointer;
}

.header__burger-line {
  height: 5px;

  width: 100%;
  background-color: #869094;

  border-radius: 2px;

  margin-top: 6px;
}

.header__burger:hover .header__burger-line {
  background-color: #ffffff;
}

.header__logo {
  margin-left: 20px;

  width: 190px;
  height: auto;
}

.header__navbar .nav-link {
  color: #ffffff;
  margin-left: 20px;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: normal;
  position: relative;
}

.header__navbar .nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 3px;
  border-radius: 2px;
  background: #d4145a;
  transform: scaleX(0);
  transform-origin: top;
  transition: transform 500ms ease-in-out;
}

.header__navbar .nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: top;
}

.header__button {
  color: #fff;
  font-size: 14px;
  font-weight: 700;

  height: 40px;
  width: 144px;
}

.header__button1,
.header__button1:focus {
  border: 2px solid #ffffff;
  background-color: #0d2129;
}

.header__button2,
.header__button2:focus {
  background-color: #d4145a;
  border: 2px solid #d4145a !important;
}

.header__button1:hover {
  color: #fff;

  background-color: #341e33;
  border: 2px solid #d4145a !important;
}

.header__button2:hover {
  color: #fff;
  background-color: #d4145a !important;
  border: 2px solid #d4145a !important;

  -webkit-box-shadow: 0px 3px 20px 0px #d4145a;
  -moz-box-shadow: 0px 3px 20px 0px #d4145a;
  box-shadow: 0px 3px 20px 0px #d4145a;
}

.header__button:active {
  background-color: #d4145a;
}

.header__dropdown-button {
  background-color: #0d2129 !important;
  border: none;
}

.header__dropdown-menu {
  background-color: #0d2129 !important;
}

.header__dropdown img {
  height: 30px;
  width: 30px;

  border-radius: 15px;
}

.header__dropdown-menu.show {
  display: flex;
}

.header__dropdown-menu li:hover img {
  border: 2px solid #d4145a;
}

.header__dropdown-menu li:hover {
  background: none !important;
}

.header__login {
  display: none;
  background-color: #0d2129;
  border: none;
}

@media all and (max-width: 1365px) {
  .header__navbar {
    display: none;
  }
}

.header__logo--mobile {
  display: none;
}

@media all and (max-width: 1199px) {
  .header__navbar {
    display: none;
  }

  .header__logo--desktop {
    display: none;
  }

  .header__logo--mobile {
    display: block;
  }

  .header__right {
    display: none !important;
  }

  .header__login {
    display: block;
  }
}

//mobile 

.field__search {
  background-color: #17313a;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  padding: 0 15px;

  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;


  transition: all .3s linear;

  display: flex;
  align-items: center;
  justify-content: center;
}

.field__search__items {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.field__search__items__name {}

.field__search__items__ico {}
</style>
