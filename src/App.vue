<template>
    <div class="main-wrap">
        <!-- представление для главной страницы -->
        <transition name="fade" mode="out-in">
            <router-view name="home"></router-view>
        </transition>
        

        <!-- если главная страница - показываем одно представление router-view name="home",
        если же нет - показываем совсем другой блок с другим представленим, в котором не меняются
        хедер и футер -->
        <div v-if="currentRoute != '/'">
            <app-header></app-header>

            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        
            <app-footer></app-footer>
        
        </div>
        
        
        
        
    </div>
</template>



<script>
export default {
    data() {
        return {
            currentRoute: '/'
        }
    },
    updated() {
        //каждый раз, когда обновляется главный компонент
        // - мы смотрим урлу и записываем ее в переменную
        // потом, на основании значения мы показываем или не показываем
        // другой слой представления router-view
        this.currentRoute = this.$router.currentRoute.fullPath
    },
    created() {
        //фолбек для отображения правильного router-view при изначальной загрузке страницы (если это не главная)
        this.currentRoute = this.$router.currentRoute.fullPath
    }
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