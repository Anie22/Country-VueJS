<template>
  <div class="home px-12 py-12">
    <Search v-model="search" v-on:change="listen" />
    <Loading v-if="showLoadingScreen" :progressDegrees="progressDegrees" :loadingError="loadingError" :formattedProgress="formattedProgress"/>
    <section class="countries mt-9" v-else>
      <div class="con" v-for="country in filteredCountries" :key="country.name">
        <img :src="country.flag" :alt="[country.name]">
        <div class="des p-4" @click.prevent="getCountry(country.name)">
          <h1 class="mb-4 title">{{ country.name }}</h1>
          <p><strong>Population:</strong> {{ country.population }}</p>
          <p><strong>Region:</strong> {{ country.region }}</p>
          <p class="mb-8"><strong>Capital:</strong> {{ country.capital }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import Loading from '@/components/Loading.vue';
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    Search,
    Loading,
  },
  data() {
    return {
      loading: false,
      loadingError: false,
      loadingShown: false,
      selectedRegion: '',
      countries: [],
      search: '',
      name: '',
      url: 'https://restcountries.com/v2/all',
      progress: 0,
      progressDegrees: 0,
    };
  },
  methods: {
    startLoading() {
      this.progress = 0;
      this.interval = setInterval(() => {
        this.progress += 1;
        this.progressDegrees = (this.progress / 100) * 360;
        if (this.progress >= 100) {
        clearInterval(this.interval);
        this.loadData();
        }
      }, 10);
    },
    async loadData() {
      try {
        const response = await axios.get(this.url);
        this.countries = response.data;
        this.loadingShown = true;
      } catch (error) {
        console.error('Error loading data:', error);
        this.loadingError = true;
      } finally {
        this.loading = false;
      }
    },
    listen(value) {
      this.search = value;
    },
    getCountry(country) {
      localStorage.setItem('countryName', country);
      this.$router.push('/single/' + country);
    },
  },
  computed: {
   filteredCountries() {
    if (this.selectedRegion === '') {
        return this.countries; // Return all countries if no region is selected
      } else {
        return this.countries.filter(country => country.region === this.selectedRegion);
      }
  },
    formattedProgress() {
      return `${this.progress}%`;
    },
    showLoadingScreen() {
      return this.loading && !this.loadingShown && this.$route.name !== 'single';
    },
  }, 
  created() {
    this.loading = true;
    this.startLoading();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  
};
</script>
<style>
  .home{
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    .home{
      padding: 20px !important;
    }
  }
  .countries{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
  }
  @media screen and (max-width: 1024px) {
    .countries{
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 900px) {
    .countries{
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 500px) {
    .countries{
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .con{
    width: 275px;
    background: var(--White);
    box-shadow: 0px 0px 14px #c7d0df, 0px 0px 5px #c4c3c3;
    border-radius: 5px;
  }
  @media screen and (max-width: 900px) {
    .con{
      width: 340px;
    }
  }
  @media screen and (max-width: 500px) {
    .con{
      width: 100%;
    }
  }
  .con img{
    width: inherit;
    height: 50%;
  }
  .con .des{
    width: inherit;
  }
  .title{
    font-weight: 800;
    font-size: 22px;
  }
  .des p{
    font-weight: 300;
    font-size: 14px;
  }
  .des p>strong{
    font-weight: 600;
  }
</style>