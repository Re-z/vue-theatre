<template>
    <header id="top" class="header">
        <div class="inner">
            <div class="nav">
                <div class="header__burger" @click="showMobileMenu"><span></span><span></span><span></span></div>
                <img src="../../assets/img/logo.png" alt="Театр 'Вояж-Престиж'">
                <ul class="header__nav" v-if="menuIsOpen">
                    <li><router-link exact to="/">Головна</router-link></li>
                    <li><router-link exact to="/about">Про нас</router-link></li>
                    <li><router-link exact to="/gallery">Галерея</router-link></li>
                    <li><router-link exact to="/repertory">Репертуар</router-link></li>
                    <li><router-link exact to="/services">Послуги</router-link></li>
                    <li><router-link exact to="/contacts">Контакти</router-link></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            // при изначальной загрузке страницы делается проверка на разрешение экрана
            // если больше 767 - записывается true. Потом идет привязка к v-if
            // и меню в десктопе отображается (true), а в мобе нет (false). В мобе оно показывается
            // только при клике на бургер
            menuIsOpen: this.setInitialMenu()
        } 
    },
    methods: {
        // Проверка на разрешение экрана
        showMobileMenu() {
            let wWidth = window.innerWidth;
            if(wWidth <= 767) {
                this.menuIsOpen = !this.menuIsOpen
            }
        },
        //устанавливаем изначальный показ меню
        setInitialMenu() {
            let wWidth = window.innerWidth;
            if(wWidth <= 767) {
                return false
            } else {
                return true
            }
        }   
    },
    
}

</script>