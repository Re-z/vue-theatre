<template>
    <div class="main-wrap">
        <!-- set component dynamically depends on url -->
        <component :is="setComponent"></component> 
    </div>
</template>



<script>
export default {
    
    computed: {
        setComponent() {
            if(this.$route.fullPath === '/') {
                return 'app-homepage'
            } 
            return 'app-innerpage'
        }
    },
}
</script>

<style>
@import url('./assets/css/style.css');
.fade-enter, .fade-leave-to {
    opacity: 0
}
.fade-enter-to, .fade-leave {
    opacity: 1
}
.fade-enter-active, .fade-leave-active {
    transition: .5s linear
}


</style>