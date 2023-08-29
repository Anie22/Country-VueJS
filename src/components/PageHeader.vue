<template>
    <header class="header px-12 py-4" :class="[mode ? 'dark' : 'light']">
        <nav class="flex justify-between items-center">
            <div class="logo">
                Where in the world?
            </div>
            <div class="toggler" @click="toggle">
                <span v-if="!isLight"><font-awesome-icon :icon="['fas', 'moon']" />
                dark mood</span>
                <span v-else><font-awesome-icon :icon="['fas', 'moon']" class="lighticon" />
                light mood</span>
            </div>   
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isLight: false,
            mode: false,
        };
    },
    methods: {
        toggle() {
            this.isLight = !this.isLight;
            document.body.classList.toggle('dark')
        }
    }
}
</script>

<style>
    .header{
        background: var(--White);
        box-shadow: 3px 3px 3px #D1D9E6, -3px -3px 3px #ffffff;
    }
    @media screen and (max-width: 900px) {
        .header{
            padding: 20px !important;
        }
    }
    nav{
        padding: 0px !important;
    }
    .logo{
        font-size: 18px;
        font-weight: 800;
    }
    @media screen and (max-width: 500px) {
        .logo{
            font-size: 16px;
            font-weight: 600;
        }
    }
    .toggler{
        font-size: 15px;
        font-weight: 300;
        text-transform: capitalize;
        cursor: pointer;
    }
    .fas{
       font-size: 12px;
       color: #ffffff;
    }
    .lighticon{
        color: var(--White);
    }
    .light{
        background: var(--Very);
        color: var(--VeryDarkblue);
    }
    .dark{
        background: var(--VeryDarkBlue);
        color: var(--White);
    }
    .dark .header{
        background: var(--VeryDarkBlue);
        color: var(--White);
        box-shadow: 0px 0px 11px var(--VeryDarkblue), 0px 0px 4px var(--VeryDarkblue);
    }
</style>