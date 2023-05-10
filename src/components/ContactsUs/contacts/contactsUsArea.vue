<template>
  <div class="infoArea">
    <div class="container text-light">
      <div class="windowInfo">
        <div class="row">
          <div class="col-xl-4">
            <div class="areaNavigate">

              <a href="/contacts/contactus">
                <div class="contactUS field__space active">Связатся с нами</div>
              </a>

              <!-- <div class="blog field__space">Блог</div> -->

              <a href="/contacts/politics">
                <div class="politicsConf field__space">Политикой Конфиденциальности</div>
              </a>

              <a href="/contacts/respons">
                <div class="gameRespons field__space">Responsible Gambling</div>
              </a>
              <a href="/contacts/fairgames">
                <div class="rulesGame field__space">Честная игра</div>
              </a>
              <a href="/contacts/rules">
                <div class="contactUS field__space">Правила игр</div>
              </a>
              <a href="/contacts/terms">
                <div class="termsCondit field__space">Условиями и положениями</div>
              </a>
            </div>
          </div>
          <div class="col-xl-8 col-l2">
            <div class="textArea">
              <div class="row">
                <div class="textArea__title">Контакты</div>
                <div class="textArea__discord">
                  <span>
                    <svg width="40" height="40" viewBox="5 6 30 30" fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M29.01 11.6578C27.3244 10.877 25.5456 10.3203 23.718 10.0015C23.7014 9.99822 23.6841 10.0004 23.6687 10.0076C23.6533 10.0149 23.6406 10.0269 23.6325 10.0419C23.405 10.4519 23.1515 10.9865 22.9738 11.4086C21.0037 11.1066 18.9998 11.1066 17.0297 11.4086C16.832 10.941 16.6089 10.4847 16.3613 10.0419C16.3528 10.0273 16.34 10.0155 16.3248 10.0083C16.3095 10.0011 16.2924 9.99871 16.2758 10.0015C14.4481 10.3196 12.6691 10.8764 10.9838 11.6578C10.9696 11.6639 10.9575 11.6742 10.9492 11.6873C7.57792 16.77 6.65386 21.727 7.10777 26.6217C7.10887 26.6338 7.11242 26.6456 7.11819 26.6563C7.12397 26.667 7.13185 26.6764 7.14135 26.684C9.10385 28.1514 11.2992 29.2716 13.6336 29.9966C13.65 30.0014 13.6675 30.0011 13.6838 29.9956C13.7001 29.9902 13.7143 29.9798 13.7246 29.966C14.2264 29.2778 14.6707 28.5486 15.0527 27.786C15.058 27.7756 15.0611 27.7641 15.0617 27.7524C15.0623 27.7407 15.0605 27.7289 15.0563 27.718C15.0521 27.707 15.0457 27.6971 15.0374 27.6889C15.0291 27.6806 15.0192 27.6742 15.0083 27.6701C14.3078 27.3996 13.6297 27.0735 12.9803 26.6949C12.9684 26.688 12.9584 26.6781 12.9512 26.6663C12.9439 26.6546 12.9397 26.6411 12.9389 26.6273C12.938 26.6134 12.9405 26.5996 12.9463 26.587C12.952 26.5743 12.9607 26.5634 12.9717 26.555C13.1084 26.4517 13.2428 26.3453 13.3747 26.2357C13.3862 26.2263 13.4001 26.2203 13.4148 26.2183C13.4296 26.2164 13.4445 26.2186 13.4581 26.2248C17.7133 28.1851 22.3195 28.1851 26.5249 26.2248C26.5386 26.2184 26.5537 26.2161 26.5687 26.218C26.5836 26.2199 26.5977 26.2261 26.6094 26.2357C26.7394 26.3429 26.8759 26.4522 27.0134 26.555C27.0243 26.5632 27.0329 26.574 27.0387 26.5864C27.0445 26.5988 27.0471 26.6124 27.0465 26.6261C27.0459 26.6398 27.0419 26.6531 27.035 26.6649C27.0281 26.6767 27.0185 26.6866 27.0069 26.6938C26.359 27.076 25.6803 27.4022 24.9779 27.669C24.967 27.6733 24.9571 27.6798 24.9488 27.6881C24.9405 27.6965 24.934 27.7065 24.9299 27.7175C24.9257 27.7286 24.9238 27.7404 24.9245 27.7522C24.9251 27.764 24.9282 27.7755 24.9335 27.786C25.3235 28.5491 25.7698 29.2751 26.2605 29.9649C26.2706 29.979 26.2849 29.9895 26.3012 29.995C26.3175 30.0005 26.3351 30.0007 26.3515 29.9955C28.6898 29.2727 30.8887 28.1524 32.8535 26.6829C32.8631 26.676 32.8711 26.6673 32.8771 26.6571C32.8831 26.6469 32.8868 26.6356 32.8882 26.6238C33.4298 20.9639 31.9804 16.0474 29.0435 11.6895C29.0367 11.6748 29.0247 11.6632 29.01 11.6567V11.6578ZM15.6886 23.6403C14.4071 23.6403 13.3519 22.454 13.3519 20.9956C13.3519 19.5382 14.3876 18.3509 15.6886 18.3509C16.9994 18.3509 18.0459 19.5492 18.0253 20.9967C18.0253 22.454 16.9896 23.6403 15.6886 23.6403V23.6403ZM24.3279 23.6403C23.0464 23.6403 21.9913 22.454 21.9913 20.9956C21.9913 19.5382 23.0258 18.3509 24.3279 18.3509C25.6387 18.3509 26.6852 19.5492 26.6646 20.9967C26.6646 22.454 25.6398 23.6403 24.3279 23.6403V23.6403Z">
                      </path>
                    </svg>
                  </span>
                  <div class="textArea__discord__time"></div>
                  24/7 support on Discord
                </div>
                <div class="textArea__contact">
                  <div class="textArea__contact__mail">
                    <div class="textArea__contact__mail__fieldMail">Эл.почта</div>
                    <div class="textArea__contact__mail__adresMail">support@coingames.bet</div>
                  </div>
                  <div class="textArea__contact__anserTime">
                    <div class="textArea__contact__anserTime__field">Пример ответа</div>
                    <div class="textArea__contact__anserTime__timeAnser">24часа</div>
                  </div>
                </div>

                <div class="textArea__fieldLine"></div>

                <form>

                  <div class="textArea__name">
                    <label for="name_input"> Имя * </label>
                  </div>

                  <div class="textArea__inputName">
                    <input class="input__style" id="name_input" type="text" required placeholder="Введите ваше имя">
                  </div>


                  <div class="textArea__mail">
                    <label for="input_mail">
                      Эл.почта *
                    </label>
                  </div>

                  <div class="textArea__inputMail">
                    <input class="input__style" id="input_mail" type="text" required placeholder="Введите ваше имя">
                  </div>


                  <div class="textArea__theme">
                    <label for="input_theme">
                      Тема *
                    </label>
                  </div>

                  <div class="textArea__inputTheme">
                    <input class="input__style" id="input_theme" type="text" required placeholder="Введите ваше имя">
                  </div>


                  <div class="textArea__mesg">
                    <label for="input_mesg">
                      Сообщение *
                    </label>
                  </div>

                  <div class="textArea__inputMesg">
                    <textarea class="input__style massange" id="input_mesg" type="text" required
                      placeholder="Введите ваше имя"></textarea>
                  </div>
                  <button class="styleButton">Отправить сообщение</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.windowInfo {
  border-radius: 10px;
  background: #112a34;
  margin-top: 40px;
}

.areaNavigate {
  font-size: 1.6rem;
  font-weight: 400;
  text-align: left;
  border-right: 1px solid rgb(255, 255, 255);
  height: 100%;
  width: 100%;
}

@media (max-width: 1190px) {
  .areaNavigate {
    display: none;
  }
}

.field__space {
  padding: 15px 10px 15px 25px;
  border-bottom: 1px solid rgb(255, 255, 255);
}

.areaNavigate a:last-of-type .field__space {
  border-bottom: none;
}


.field__space:hover {
  background-color: #d4145a;
  transition: all 0.4s linear;
}

// Field

.textArea {
  padding: 40px;
  text-align: left;
  font-size: 1.6rem;


  &__title {
    font-size: 3rem;
    padding-bottom: 20px;
  }

  &__discord {
    padding-bottom: 20px;

    display: flex;
    align-items: center;

    &__time {
      padding-right: 18px;
      font-weight: 800;
    }
  }

  &__contact {
    display: flex;

    &__mail {

      &__fieldMail {
        color: #667b83;
        font-size: 1.2rem;
        align-items: center;
      }

      &__adresMail {
        color: #d4145a;
        font-weight: 600;
      }
    }

    &__anserTime {

      padding-left: 50px;

      &__field {
        color: #667b83;
        font-size: 1.2rem;
        align-items: center;
      }

      &__timeAnser {
        color: #d4145a;
        font-weight: 600;
      }
    }
  }

  &__fieldLine {
    height: 2px;
    margin: 15px 0 20px 0;
    background: rgb(255, 255, 253, 0.5);
    opacity: 1;

  }

  &__name {
    color: #667b83;
    font-size: 1.2rem;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
  }

  &__inputName {
    margin-bottom: 25px;
  }


  &__mail {
    color: #667b83;
    font-size: 1.2rem;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
  }

  &__inputMail {
    margin-bottom: 25px;
  }

  &__theme {
    color: #667b83;
    font-size: 1.2rem;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
  }

  &__inputTheme {
    margin-bottom: 25px;
  }

  &__mesg {
    color: #667b83;
    font-size: 1.2rem;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
  }

  &__inputMesg {
    margin-bottom: 25px;
  }

}

.input__style {
  appearance: none;
  color: #000;
  display: block;
  width: 100%;
  height: 40px;
  padding: 10px 40px 10px 10px;
  outline: none;
  border: 2px solid #667b83;
  border-radius: 10px;
}

.styleButton {
  color: aliceblue;
  background: #d4145a;
  border: 2px solid #d4145a;
  border-radius: 3px;
  padding: 5px 20px;
}

.styleButton:hover {
  color: aliceblue;
  background: #d4145a;
  box-shadow: 0 0 15px #ff3d84;
  transition: all 0.4s linear;
}

.massange {
  min-height: 230px;
}

.active {
  background-color: #d4145a;
}

a {
  color: inherit;
  text-decoration: none;
  border: none;
}
</style>