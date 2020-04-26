<template>
    <div class="container">
        <HeaderBar/>

        <!-- //Todas nuestras vistas que hagan match a una ruta se van a inyectar dentro de esta etiqueta, <router-view />. -->
        <router-view></router-view>
        <FooterBar/>
    </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/Index'
import FooterBar from '@/components/Footer/Index'

export default {
    name: 'MainLayout',
    components: {
        HeaderBar,
        FooterBar
    }
}
</script>