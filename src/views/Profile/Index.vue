<template>
    <div>
        <h1>Perfil</h1>
    </div>
</template>
<script>
export default {
    name: 'ProfileView',
    created () {
        // this.$route.params -> { region: "eu", battleTag: "SuperRambo-2613" }
        this.fetchData()
    },
    methods: {
        fetchData () {
            const { region, battleTag: account} = this.$route.params
            getApiAccount({ region, account})
                .then()
                .catch()
        // Llamada API
        }
    }
}
</script>