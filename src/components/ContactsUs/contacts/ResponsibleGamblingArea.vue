<template>
  <div class="infoArea">
    <div class="container text-light">
      <div class="windowInfo">
        <div class="row">
          <div class="col-xl-4">
            <div class="areaNavigate">

              <a href="/contacts/contactus">
                <div class="contactUS field__space">Связатся с нами</div>
              </a>

              <!-- <div class="blog field__space">Блог</div> -->

              <a href="/contacts/politics">
                <div class="politicsConf field__space">Политикой Конфиденциальности</div>
              </a>

              <a href="/contacts/respons">
                <div class="gameRespons field__space active">Responsible Gambling</div>
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
                <h1>Responsible Gambling</h1>

                <p>&nbsp;</p>

                <h3>Responsible Gambling</h3>

                <p>Gambling is a fun and exciting entertainment. Gambling is an attractive option if you want to try<br />
                  your luck. Most casino visitors enjoy this kind of entertainment without any problems, but there<br />
                  are a small number of individuals who may lose control over their gambling activity. Play<br />
                  responsibly!</p>

                <h3>Compulsive gambler</h3>

                <p>Signs indicating a disorder may include, but are not limited to the individuals inability to stop<br />
                  gambling, borrowing money for gambling, changes in their character, risk to their employment or<br />
                  strain on their family life for the sake of gambling.</p>

                <h3>Loss Limits and Self-Exclusion</h3>

                <p>RBL offers to player several means to set up self-protection mechanisms. The customer can set up:</p>

                <p>&ndash; A limit on daily, weekly and monthly maximum deposits.</p>

                <p>&ndash; A limit on daily, weekly and monthly bet limits.</p>

                <p>&ndash;&nbsp;A limit on daily, weekly and monthly&nbsp;losses&nbsp;limits.</p>

                <p>&ndash; A self-exclusion for a definite or indefinite period.</p>

                <p>A player who has set a limit or exclusion under this regulation may change or revoke the limit or
                  exclusion by written notice or electronic notice given to the licensee.</p>

                <p>A notice increasing or revoking a limit or decreasing the exclusion has effect only after seven days
                  after the licensee has received the notice.</p>

                <p>User can choose to self-exclude themselves and/or set the limits by contacting our&nbsp;dedicated team
                  at&nbsp;<a href="#">support@coingames.bet</a>, where their request will
                  be&nbsp;immediately complied with.</p>

                <p>RBL also informs users that any permanently excluded player (whether excluded by RBL for a serious
                  breach of terms (See points 4.3 and 4.4) or by their own written notice to the casino)&nbsp; cannot undo
                  the exclusion and is unable to re-register with RBL.</p>

                <p>A notice reducing a limit or increasing the exclusion has effect immediately after it is received by
                  RBL.</p>

                <p>Set the maximum loss limit for a selected period and once set may&nbsp;be amended according to the
                  following timescales:<br />
                  &ndash; Changing the loss limit to be more restrictive takes effect immediately.<br />
                  &ndash; Changing the loss limit to be less restrictive takes effect 48 hours after the change.</p>

                <h3>Underage Gambling</h3>

                <p>No individual under the age of 18 can register as a player with CoinGames. As part of the<br />
                  registration application process, we request identification to verify an applicant&rsquo;s age.</p>

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