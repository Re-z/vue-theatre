<template>
    <header id="top" class="header">
        <div class="inner">
            <div class="nav">
                <div class="header__burger" @click="toggleMobileMenu"><span></span><span></span><span></span></div>
                <img src="../../assets/img/logo.png" alt="Театр 'Вояж-Престиж'">
                <ul 
                    class="header__nav"
                    :class="{'is-visible' : mobileMenuIsOpen}"
                    >
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
            //статус видимости мобильного меню
            mobileMenuIsOpen: false
        } 
    },
    methods: {
        //переключалка видимости мобильного меню
        toggleMobileMenu() {
           this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
        }
    },
    watch: {
        //таким образом можно отследить изменения урлы и отреагировать на это.
        // в данном случае - когда урла меняется - мы скрываем мобильное меню
        '$route'() {
            this.mobileMenuIsOpen = false;
        }
    }
    
    
}

</script>