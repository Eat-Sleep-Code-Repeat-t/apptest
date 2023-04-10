<template>
  <div class="EditSection">
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="pills-main-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-main"
          type="button"
          role="tab"
          aria-controls="pills-main"
          aria-selected="true"
        >
          Основное
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-verification-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-verification"
          type="button"
          role="tab"
          aria-controls="pills-verification"
          aria-selected="false"
        >
          Верификация
        </button>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-main"
        role="tabpanel"
        aria-labelledby="pills-main-tab"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-8">
              <div class="EditSection__form">
                <form>
                <div class="mb-3">
                  <label for="validationDefault01" class="form-label"
                    >Эл.почта</label
                  >
                  <input required
                    type="email"
                    class="form-control form-control-lg"
                    id="validationDefault01"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="validationDefault02" class="form-label"
                    >Имя</label
                  >
                  <input required
                    type="text"
                    class="form-control form-control-lg"
                    id="validationDefault02"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Фамилия</label
                  >
                  <input required
                    type="text"
                    class="form-control form-control-lg"
                    id="validationDefault03"
                    placeholder="Введите вашу фамилию"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Пол</label
                  >
                  <select
                    class="form-select form-select-lg"
                    aria-label="Default select example"
                  >
                    <option selected>Не выбрано</option>
                    <option value="1">Мужской</option>
                    <option value="2">Женский</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Дата рождения</label
                  >
                  <input required
                    type="text"
                    class="form-control form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="inputState" class="form-label">Страна</label>
                  <select
                    class="form-select form-select-lg"
                    aria-label="Default select example"
                  >
                    <option>Не выбрано</option>
                    <option option>Австралия</option>
                    <option option>Азербайджан</option>
                    <option option>Албания</option>
                    <option option>Алжир</option>
                    <option option>Ангола</option>
                    <option option>Андорра</option>
                    <option option>Антарктида</option>
                    <option option>Аргентина</option>
                    <option option>Армения</option>
                    <option option>Афганистан</option>
                    <option option>Багамы</option>
                    <option option>Бангладеш</option>
                    <option option>Барбадос</option>
                    <option option>Бахрейн</option>
                    <option option>Беларусь</option>
                    <option option>Бельгия</option>
                    <option option>Бенин</option>
                    <option option>Болгария</option>
                    <option option>Боливия</option>
                    <option option>Босния и Герцеговина</option>
                    <option option>Ботсвана</option>
                    <option option>Бразилия</option>
                    <option option>Бруней-Даруссалам</option>
                    <option option>Буркина-Фасо</option>
                    <option option>Бурунди</option>
                    <option option>Бутан</option>
                    <option option>Вануату</option>
                    <option option>Ватикан</option>
                    <option option>Венесуэла</option>
                    <option option>Восточный Тимор</option>
                    <option option>Вьетнам</option>
                    <option option>Габон</option>
                    <option option>Гаити</option>
                    <option option>Гайана</option>
                    <option option>Гамбия</option>
                    <option option>Гана</option>
                    <option option>Гватемала</option>
                    <option option>Гвинея</option>
                    <option option>Гвинея-Бисау</option>
                    <option option>Гондурас</option>
                    <option option>Гонконг (КНР)</option>
                    <option option>Гренада</option>
                    <option option>Гренландия (Дания)</option>
                    <option option>Греция</option>
                    <option option>Грузия</option>
                    <option option>Дания</option>
                    <option option>Джибути</option>
                    <option option>Доминика</option>
                    <option option>Доминиканская Республика</option>
                    <option option>Египет</option>
                    <option option>Замбия</option>
                    <option option>Западная Сахара</option>
                    <option option>Зимбабве</option>
                    <option option>Израиль</option>
                    <option option>Индия</option>
                    <option option>Индонезия</option>
                    <option option>Иордания</option>
                    <option option>Ирак</option>
                    <option option>Иран, исламская республика</option>
                    <option option>Ирландия</option>
                    <option option>Исландия</option>
                    <option option>Италия</option>
                    <option option>Йемен</option>
                    <option option>Кабо-Верде</option>
                    <option option>Казахстан</option>
                    <option option>Камбоджа</option>
                    <option option>Камерун</option>
                    <option option>Канада</option>
                    <option option>Катар</option>
                    <option option>Кения</option>
                    <option option>Киргизия</option>
                    <option option>Кирибати</option>
                    <option option>Китай</option>
                    <option option>Клиппертон (Остров Страсти)</option>
                    <option option>
                      Кокосовые (Килинг) острова (Австралия)
                    </option>
                    <option option>Колумбия</option>
                    <option option>Коморы</option>
                    <option option>Конго</option>
                    <option option>
                      Конго и Демократическая республика Конго (бывш. Заир)
                    </option>
                    <option option>
                      Корея, народно-демократическая республика
                    </option>
                    <option option>Корея, республика</option>
                    <option option>Коста-Рика</option>
                    <option option>Кот д'Ивуар</option>
                    <option option>Куба</option>
                    <option option>Кувейт</option>
                    <option option>
                      Лаосская Народно-Демократическая Республика
                    </option>
                    <option option>Лесото</option>
                    <option option>Либерия</option>
                    <option option>Ливан</option>
                    <option option>Ливийская Арабская Джамахирия</option>
                    <option option>Лихтенштейн</option>
                    <option option>Люксембург</option>
                    <option option>Маврикий</option>
                    <option option>Мавритания</option>
                    <option option>Мадагаскар</option>
                    <option option>Макао (КНР)</option>
                    <option option>Македония</option>
                    <option option>Малави</option>
                    <option option>Малайзия</option>
                    <option option>Мали</option>
                    <option option>Мальдивы</option>
                    <option option>Марокко</option>
                    <option option>Маршалловы Острова</option>
                    <option option>Мексика</option>
                    <option option>Микронезия, федеративные штаты</option>
                    <option option>Мозамбик</option>
                    <option option>Молдавия</option>
                    <option option>Монако</option>
                    <option option>Монголия</option>
                    <option option>Мьянма</option>
                    <option option>Намибия</option>
                    <option option>Науру</option>
                    <option option>Непал</option>
                    <option option>Нигер</option>
                    <option option>Нигерия</option>
                    <option option>Никарагуа</option>
                    <option option>Ниуэ (Новая Зеландия)</option>
                    <option option>Новая Зеландия</option>
                    <option option>Норвегия</option>
                    <option option>Объединенные Арабские Эмираты</option>
                    <option option>Оман</option>
                    <option option>Остров Буве (Норвегия)</option>
                    <option option>Остров Вознесения</option>
                    <option option>Остров Мэн (Великобритания)</option>
                    <option option>Остров Норфолк (Австралия)</option>
                    <option option>Остров Рождества (Австралия)</option>
                    <option option>
                      Остров Херд и острова Макдональд (Австралия)
                    </option>
                    <option option>Острова Кука (Новая Зеландия)</option>
                    <option option>Пакистан</option>
                    <option option>Палау</option>
                    <option option>Палестина</option>
                    <option option>Панама</option>
                    <option option>Папуа Новая Гвинея</option>
                    <option option>Парагвай</option>
                    <option option>Перу</option>
                    <option option>Польша</option>
                    <option option>Россия</option>
                    <option option>Руанда</option>
                    <option option>Румыния</option>
                    <option option>Сальвадор</option>
                    <option option>Самоа</option>
                    <option option>Сан-Марино</option>
                    <option option>Сан-Томе и Принсипи</option>
                    <option option>Саудовская Аравия</option>
                    <option option>Свазиленд</option>
                    <option option>Сейшелы</option>
                    <option option>Сен-Бартелеми</option>
                    <option option>Сенегал</option>
                    <option option>Сингапур</option>
                    <option option>Сирийская Арабская Республика</option>
                    <option option>Сомали</option>
                    <option option>Судан</option>
                    <option option>Суринам</option>
                    <option option>Сьерра-Леоне</option>
                    <option option>Таджикистан</option>
                    <option option>Таиланд</option>
                    <option option>Тайвань</option>
                    <option option>Танзания, объединенная республика</option>
                    <option option>Того</option>
                    <option option>Токелау (Новая Зеландия)</option>
                    <option option>Тонга</option>
                    <option option>Тринидад и Тобаго</option>
                    <option option>Тунис</option>
                    <option option>Туркмения</option>
                    <option option>Турция</option>
                    <option option>Уганда</option>
                    <option option>Узбекистан</option>
                    <option option>Украина</option>
                    <option option>Уругвай</option>
                    <option option>Фарерские острова (Дания)</option>
                    <option option>Фиджи</option>
                    <option option>Филиппины</option>
                    <option option>Финляндия</option>
                    <option option>Хорватия</option>
                    <option option>Центрально-Африканская Республика</option>
                    <option option>Чад</option>
                    <option option>Черногория</option>
                    <option option>Чили</option>
                    <option option>Швейцария</option>
                    <option option>Швеция</option>
                    <option option>Шпицберген и Ян Майен (Норвегия)</option>
                    <option option>Шри-Ланка</option>
                    <option option>Эквадор</option>
                    <option option>Экваториальная Гвинея</option>
                    <option option>Эритрея</option>
                    <option option>Эфиопия</option>
                    <option option>Южная Африка</option>
                    <option option>Южный Судан</option>
                    <option option>Ямайка</option>
                    <option option>Япония</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="inputCity" class="form-label">Город</label>
                  <input required
                    type="text"
                    class="form-control form-control-lg"
                    id="inputCity"
                    placeholder="Город"
                  />
                </div>
                <div class="mb-3">
                  <label for="inputAddress" class="form-label">Адрес</label>
                  <input required
                    type="text"
                    class="form-control form-control-lg"
                    id="inputAddress"
                    placeholder="Адрес"
                  />
                </div>
                <div class="mb-3">
                  <label for="inputZip" class="form-label"
                    >Почтовый индекс</label
                  >
                  <input required
                    type="text"
                    class="form-control form-control-lg"
                    id="inputZip"
                    placeholder="Почтовый индекс"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >ПЗП</label
                  >
                  <input required
                    type="text"
                    class="form-control form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder="ПЗП"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Телефон</label
                  >
                  <input required
                    type="number"
                    class="form-control form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder="Номер Телефона"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Пароль</label
                  >
                  <input required
                    type="password"
                    class="form-control form-control-lg"
                    id="inputPassword"
                    placeholder="Пароль"
                  />
                </div>
                <div class="mb-3">
                 <button class="btn btn-primary" type="submit">Submit form</button>
                 </div>
                   </form>
              </div>
            </div>
            <div class="col-xl-4"></div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-verification"
        role="tabpanel"
        aria-labelledby="pills-verification-tab"
      >
        kyukuykyukyuk
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditSection",
  data() {
    return {
      value: "",
    };
  },
};
</script>


<style scoped lang="scss">
.EditSection {
  .form-label {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.45;
  }
}
</style>