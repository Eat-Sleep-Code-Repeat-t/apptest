<template>
  <div class="profile">
    <HeaderSection />
    <div class="container">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Дашборд
          </button>
          <button
            class="nav-link"
            id="nav-bonuses-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-bonuses"
            type="button"
            role="tab"
            aria-controls="nav-bonuses"
            aria-selected="false"
          >
            Мои бонусы
          </button>
          <button
            class="nav-link"
            id="nav-market-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-market"
            type="button"
            role="tab"
            aria-controls="nav-market"
            aria-selected="false"
          >
            Маркет
          </button>
          <button href="#nav-withdraw"
            class="nav-link"
            id="nav-cash-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-cash"
            type="button"
            role="tab"
            aria-controls="nav-cash"
            aria-selected="false"
          >
            Крипто депозит
          </button>
          <button
            class="nav-link"
            id="nav-withdraw-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-withdraw"
            type="button"
            role="tab"
            aria-controls="nav-withdraw"
            aria-selected="false"
          >
            Вывод средств
          </button>
          <button
            class="nav-link"
            id="nav-edit-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-edit"
            type="button"
            role="tab"
            aria-controls="nav-edit"
            aria-selected="false"
          >
            Настройки аккаунта
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="nav-bonuses"
          role="tabpanel"
          aria-labelledby="nav-bonuses-tab"
        >
          <div class="profile__bonuses">
            <h3 class="profile__title">Мои бонусы (2)</h3>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-market"
          role="tabpanel"
          aria-labelledby="nav-market-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="nav-cash"
          role="tabpanel"
          aria-labelledby="nav-cash-tab"
        >
          <div class="profile__cash">
            <h3 class="profile__cash-title profile__title">Депозит</h3>
            <h5 class="profile__cash-text profile__subtitle">
              1. Выберите платежную систему
            </h5>
            <div class="row align-items-center">
              <div class="col">
                <div class="profile__cash-card">
                  <img
                    class="profile__cash-card__img"
                    src="../assets/img/profile/cash/Screenshot_2022-11-22_at_17.11.10_xwtmjk.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="col">
                <div class="profile__cash-card">
                  <img
                    class="profile__cash-card__img"
                    src="../assets/img/profile/cash/paycryptos_bitcoin_v2.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col">
                <div class="profile__cash-card">
                  <img
                    class="profile__cash-card__img"
                    src="../assets/img/profile/cash/paycryptos_bitcoincash_v2.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col">
                <div class="profile__cash-card">
                  <img
                    class="profile__cash-card__img"
                    src="../assets/img/profile/cash/paycryptos_dogecoin_v2.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col">
                <div class="profile__cash-card">
                  <img
                    class="profile__cash-card__img"
                    src="../assets/img/profile/cash/paycryptos_ethereum_v2.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col">
                <div class="profile__cash-card">
                  <img
                    class="profile__cash-card__img"
                    src="../assets/img/profile/cash/paycryptos_litecoin_v2.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col">
                <div class="profile__cash-card">
                  <img
                    class="profile__cash-card__img"
                    src="../assets/img/profile/cash/paycryptos_tether_v2.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-withdraw"
          role="tabpanel"
          aria-labelledby="nav-withdraw-tab"
        >
          <div class="profile__cash">
            <h3 class="profile__cash-title profile__title">Вывод средств</h3>
            <h5 class="profile__cash-text profile__subtitle">
              1. Выберите платежную систему
            </h5>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <div class="profile__cash-card">
                    <img
                      class="profile__cash-card__img"
                      src="../assets/img/profile/cash/Screenshot_2022-11-22_at_17.11.10_xwtmjk.png"
                      alt=""
                    />
                  </div>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  <div class="profile__cash-card">
                    <img
                      class="profile__cash-card__img"
                      src="../assets/img/profile/cash/paycryptos_bitcoin_v2.svg"
                      alt=""
                    />
                  </div>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <div class="profile__cash-card">
                    <img
                      class="profile__cash-card__img"
                      src="../assets/img/profile/cash/paycryptos_dogecoin_v2.svg"
                      alt=""
                    />
                  </div>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <div class="profile__cash-card">
                    <img
                      class="profile__cash-card__img"
                      src="../assets/img/profile/cash/paycryptos_ethereum_v2.svg"
                      alt=""
                    />
                  </div>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button 
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <div class="profile__cash-card">
                    <img
                      class="profile__cash-card__img"
                      src="../assets/img/profile/cash/paycryptos_litecoin_v2.svg"
                      alt=""
                    />
                  </div>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <div class="profile__cash-card">
                    <img
                      class="profile__cash-card__img"
                      src="../assets/img/profile/cash/paycryptos_tether_v2.svg"
                      alt=""
                    />
                  </div>
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
              <div>
                 OnRamper — это решение, в котором все фиатные въезды существуют в единой интеграции.
<br><br>
- Это позволяет пользователям покупать криптовалюту, не покидая платформу Coingames.
- Пользователи могут купить более 200 различных криптовалют с помощью OnRamper. </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                ...
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-edit"
          role="tabpanel"
          aria-labelledby="nav-edit-tab"
        >
         <EditSection />
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import EditSection from "@/components/profile/EditSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "ProfileView",
  components: {
    HeaderSection,
    EditSection,
    FooterSection,
  },
};
</script>


<style scoped lang="scss">
.profile {
  color: #fff;

  &__cash {
    text-align: left;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.45;
    &-card {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #0d2129;
      border-radius: 10px;
      padding: 6px;
      cursor: pointer;
      transition: all 0.3s;
      max-width: 148px;
      &__img {
        max-width: 100%;
        height: 80px;
      }
      &:hover {
        background: #17313a;
      }
    }
  }
  &__title {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.45;
    margin: 0 0 20px;
  }
  &__subtitle {
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 1.45;
    margin: 0 0 20px;
  }
  .tab-pane {
    text-align: left;
  }
  .nav-tabs {
    border: none;
    margin: 80px 0 0 0;
  }
  .nav-tabs .nav-link {
    font-size: 1.4rem;
    line-height: 1.45;
    font-weight: bold;
    color: #fff;
    border: none;
    padding: 10px 20px;
  }
  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active {
    color: #d4145a;
    font-weight: bold;
    background-color: #112a34;
  }
  .tab-content {
    background-color: #112a34;
    padding: 40px;
    border-radius: 10px;
  }
}
</style>