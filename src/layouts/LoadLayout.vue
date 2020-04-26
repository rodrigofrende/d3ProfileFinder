<template>
    <div class="loading-layout">
        <!-- Un Slot en Vue es una funcionalidad inspirada en la especificación de Web Components 
        con la finalidad de poder definir zonas de contenido distribuido. 
        Puede contener cualquier plantilla de código, incluyendo HTML. -->
        <slot />
    </div>
</template>

<script>
export default {
    name: 'LoadLayout'
}
</script>