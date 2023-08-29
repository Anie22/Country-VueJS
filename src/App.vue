<template>
  <page-header />
  <router-view />
</template>

<script>
import PageHeader from './components/PageHeader.vue';
export default {
  components: { PageHeader},
  data() {
    return {
      
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300&display=swap');
:root{
  --DarkBlue: hsl(209, 23%, 22%);
  --VeryDarkBlue: hsl(207, 26%, 17%);
  --VeryDarkblue: hsl(200, 15%, 8%);
  --DarkGray: hsl(0, 0%, 52%);
  --Very: hsl(0, 0%, 98%);
  --White: hsl(0, 0%, 100%);
}
body .light .home{
  font-family: 'Nunito Sans', sans-serif;
  background: var(--Very);
  color: var(--VeryDarkblue);
}
.dark .con{
  background: var(--VeryDarkBlue);
  color: var(--White);
  box-shadow: 0px 0px 14px var(--VeryDarkblue), 0px 0px 5px var(--VeryDarkblue);
}
</style>
