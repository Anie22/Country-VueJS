<template>
   <section class="container flex justify-between items-center">
        <div class="sub-header">
            <font-awesome-icon :icon="['fasl', 'magnifying-glass']" />
            <input class="search" type="text" placeholder="Search for a Country..." v-model="search"
            @keyup="searching">
        </div>
        <div class="option">
            <select class="m-0 py-2 px-4" v-model="selectedRegion" @change="filterByRegion">
                <option value="" data-default>Filter by Region</option>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Search',
  data() {
    return {
      mode: true,
      countries: [],
      search: '',
      selectedRegion: '',
      filteredCountries: [], 
      name: '',
      uri: 'https://restcountries.com/v2/all',
    };
  },
  created() {
    return axios
      .get(this.uri)
      .then((response) => {
        this.countries = response.data;
        this.filteredCountries = this.countries;
    })
  },
  computed: {
    filteredCountries() {
      return this.countries.filter((country) => {
        return country.name.match(this.search);
      });
    },
  },
  methods: {
    searching() {
      // Filter countries based on search and selected region
      this.filteredCountries = this.countries.filter(country => {
        const nameMatch = country.name.toLowerCase().includes(this.search.toLowerCase());
        const regionMatch = this.selectedRegion === '' || country.region === this.selectedRegion;
        return nameMatch && regionMatch;
      });
    },
    filterByRegion() {
      // Filter countries based on selected region only
      this.filteredCountries = this.countries.filter(country => {
        return this.selectedRegion === '' || country.region === this.selectedRegion;
      });
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .sub-header{
        display: flex;
        align-items: center;
        background: var(--White);
        color: var(--DarkGray);
        width: 400px;
        height: 40px;
        padding: 3px 12px;
        border-radius: 4px;
        box-shadow: 0px 0px 5px #c7d0df, 0px 0px 5px #c4c3c3;
        gap: 5px;
    }
    @media screen and (max-width: 900px) {
        .sub-header{
            width: 300px;
        }
    }
    @media screen and (max-width: 425px) {
        .sub-header{
            width: 380px;
        }
    }
    @media screen and (max-width: 375px) {
        .sub-header{
            width: 338px;
        }
    }
    @media screen and (max-width: 320px) {
        .sub-header{
            width: 280px;
        }
    }
    @media screen and (max-width: 600px) {
        .flex{
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
        }
    }
    .search{
        height: 32px;
        outline: none;
        width: 250px;
    }
    /* @media screen and (max-width: 768px) {
        .search{
            width: 620px;
        }
    } */
    @media screen and (max-width: 425px) {
        .search{
            width: 320px;
        }
    }
    @media screen and (max-width: 375px) {
        .search{
            width: 280px;
        }
    }
    @media screen and (max-width: 320px) {
        .search{
            width: 235px;
        }
    }
    .option select{
        height: 40px;
        width: 180px;
        border-radius: 4px;
        box-shadow: 0px 0px 5px #c7d0df, 0px 0px 5px #c4c3c3;
        outline: none;
        font-weight: 600;
        font-size: 14px;
    }
    option[data-default] {
        display: none;
    }
    option{
        display: flex;
        gap: 12px;
    }
    .light{
        background: var(--Very);
        color: var(--VeryDarkblue);
    }
    .dark .sub-header, .dark .search, .dark .option select{
        background: var(--VeryDarkBlue);
        color: var(--White);
    }
    .dark .sub-header, .dark .option select{
        box-shadow: 0px 0px 11px var(--VeryDarkblue), 0px 0px 4px var(--VeryDarkblue);
    }
</style>
