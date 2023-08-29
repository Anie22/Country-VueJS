<template>
  <section class="single px-12 py-12">
    <div class="back px-3" @click="back">
      <font-awesome-icon :icon="['fas', 'arrow-left']" />
      <p>Back</p>
    </div>
    <div class="detail-countries mt-9">
      <div class="img-holder">
        <img :src="singleCountry.flag" :alt="[singleCountry.name]">
      </div>
      <div class="detail-holder">
        <div class="name">
          <h2>{{ singleCountry.name }}</h2>
        </div>
        <div class="sub-details">
          <div class="first-details">
            <p><strong>Native Name:</strong> {{ singleCountry.nativeName }}</p>
            <p><strong>Population:</strong> {{ singleCountry.population }}</p>
            <p><strong>Region:</strong> {{ singleCountry.region }}</p>
            <p><strong>Sub Region:</strong> {{ singleCountry.subregion }}</p>
            <p><strong>Capital:</strong> {{ singleCountry.capital }}</p>
          </div>
          <div class="second-details">
            <p v-for="domain in singleCountry.topLevelDomain" :key="domain"><strong>Top Level Domain:</strong> {{ domain }}</p>
            <p v-for="currency in singleCountry.currencies"
            :key="currency.name"><strong>Currencies:</strong> {{ currency.name }}</p>
            <p v-for="(language, index) in singleCountry.languages"
            :key="index">
              <strong>Languages:</strong> 
              {{ language.name }}
              <span v-if="index != singleCountry.languages.length - 1">,</span>
            </p>
          </div>
        </div>
        <div class="borders">
          <h1>Border Countries:</h1>
          <div class="country">
           <p v-for="(borders, index) in singleCountry.borders"
            :key="index">{{ borders }}</p> 
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Single',
  data() {
    return {
      country: "",
      singleCountry: {},
    }
  },
  props: {
    name: String,
    loading: Boolean
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.country = localStorage.getItem('countryName');
    return axios 
      .get('https://restcountries.com/v2/name/' + this.country)
      .then((response) => {
        this.singleCountry = response.data[0]
        console.log(response)
      })
      .catch((err) => {
        console.error(err);
      });
  },
}
</script>

<style>
  .single{
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    .single{
      padding: 20px !important;
    }
  }
  .back{
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--White);
    width: 120px;
    height: 30px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px var(--Very), 0px 0px 5px var(--DarkGray);
    cursor: pointer;
  }
  .detail-countries{
    display: flex;
    align-items: center;
    gap: 200px;
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    .detail-countries{
      gap: 55px;
    }
  }
  @media screen and (max-width: 900px) {
    .detail-countries{
      flex-direction: column;
      gap: 60px;
    }
  }
  .img-holder img{
    width: 480px;
    height: 300px;
  }
  @media screen and (max-width: 1024px) {
    .img-holder img{
      width: 380px;
      height: 270px;
    }
  }
  @media screen and (max-width: 900px) {
    .img-holder img{
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    .img-holder img{
      width: 680px;
      height: 350px;
    }
  }
  @media screen and (max-width: 690px) {
    .img-holder img{
      width: 100%;
      height: 270px;
    }
  }
  @media screen and (max-width: 375px) {
    .img-holder img{
      height: 200px;
    }
  }
  .detail-holder{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  @media screen and (max-width: 1024px) {
    .detail-holder{
      gap: 19px;
    }
  }
  @media screen and (max-width: 900px) {
    .detail-holder{
      width: 100%;
    }
  }
  .name{
    font-weight: 800;
    font-size: 30px;
  }
  @media screen and (max-width: 375px) {
    .name{
      font-size: 28px;
    }
  }
  @media screen and (max-width: 320px) {
    .name{
      font-size: 23px;
    }
  }
  .sub-details{
    display: flex;
    gap: 90px;
  }
  @media screen and (max-width: 900px) {
    .sub-details{
      flex-direction: column;
      gap: 44px;
    }
  }
  .first-details, .second-details{
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .first-details p, .second-details p{
    font-weight: 300;
    font-size: 14px;
  }
  .first-details p>strong, .second-details p>strong{
    font-weight: 600;
  }
  .borders{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 14px;
  }
  @media screen and (max-width: 900px) {
    .borders{
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
  }
  .borders h1{
    font-weight: 600;
  }
  .country{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  @media screen and (max-width: 900px) {
    .country{
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .country p{
    font-weight: 300;
    background: var(--White);
    box-shadow: 0px 0px 5px var(--Very), 0px 0px 5px var(--DarkGray);
    padding: 3px;
    width: 98px;
    text-align: center;
    border-radius: 6px;
  }
  @media screen and (max-width: 320px) {
    .country p{
      width: 85px;
    }
  }
  .light{
    background: var(--Very);
    color: var(--VeryDarkblue);
  }
  .dark .back{
    background: var(--VeryDarkBlue);
    color: var(--White);
    box-shadow: 0px 0px 5px var(--VeryDarkblue), 0px 0px 5px var(--VeryDarkblue);
  }
  .dark .country p{
    background: var(--VeryDarkBlue);
    color: var(--White);
    box-shadow: 0px 0px 5px var(--VeryDarkblue), 0px 0px 5px var(--VeryDarkblue);
  }
</style>
