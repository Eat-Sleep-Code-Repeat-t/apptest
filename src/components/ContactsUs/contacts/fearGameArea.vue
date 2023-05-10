<template>
  <div class="infoArea">
    <div class="container text-light">
      <div class="windowInfo">
        <div class="row">
          <div class="col-xl-4">
            <div class="areaNavigate">

              <a href="/contacts/contactus">
                <div class="contactUS field__space ">Связатся с нами</div>
              </a>

              <!-- <div class="blog field__space">Блог</div> -->

              <a href="/contacts/politics">
                <div class="politicsConf field__space">Политикой Конфиденциальности</div>
              </a>

              <a href="/contacts/respons">
                <div class="gameRespons field__space">Responsible Gambling</div>
              </a>
              <a href="/contacts/fairgames">
                <div class="rulesGame field__space active">Честная игра</div>
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
                <h1>Честная игра</h1>

                <p>&nbsp;</p>

                <p>CoinGames holds a licence to operate issued by the&nbsp;Isle of Man Gambling
                  Supervision&nbsp;Commission and activities are carried out in accordance with the legislation of the
                  Isle of Man.</p>

                <p>To assure the integrity of our games, a trusted Random Number Generator (RNG) is always&nbsp;used to
                  determine the outcomes of our games. The RNG&rsquo;s have been tested by a company&nbsp;approved by the
                  Isle of Man Gambling Supervision Commission for the testing of gaming&nbsp;software on behalf any Isle
                  of Man based licence holders. Whether it&rsquo;s a roll of a dice, a hand of&nbsp;cards, or a spin of
                  the wheel, in each event a RNG is utilized to ensure compliance with relevant&nbsp;standards. The system
                  has been rigorously tested by running millions of rounds and examining&nbsp;results. The system is
                  systematically tested by the Company.</p>

                <p>The Company offers a variety of games, including some that are developed by third party&nbsp;companies,
                  allowing us to offer our players a wider selection of gaming experiences. Where the&nbsp;games provided
                  are not &ldquo;in house&quot; games of our own development, a number of additional&nbsp;procedures are
                  undertaken to ensure that they adhere to our own standards. In addition, our&nbsp;game providers utilize
                  their own, separate in house testing processes, including testing of the&nbsp;RNG.&nbsp;</p>

                <p>A list of&nbsp;companies approved by the Isle of Man Gambling Supervision Commission for
                  the&nbsp;testing of gaming software on behalf of any island based licensee can be found here:<br />
                  <a
                    href="https://www.gov.im/categories/business-and-industries/gambling-and-e-gaming/testing-companies">https://www.gov.im/categories/business-and-industries/gambling-and-e-gaming/testing-companies</a>
                </p>

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