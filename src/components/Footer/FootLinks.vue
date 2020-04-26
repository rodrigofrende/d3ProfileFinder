<template>
  <div>
    <b-nav small align="start">
      <b-nav-item :to="{name: 'Home'}">Inicio</b-nav-item>
      <b-nav-item :to="{name: 'About'}">Acerca de</b-nav-item>
      <b-nav-item href="https://github.com/rodrigofrende" target="_blank">Github</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'FootLinks'
}
</script>