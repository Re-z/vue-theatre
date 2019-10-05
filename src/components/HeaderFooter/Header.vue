<template>
    <header id="top" class="header">
        <div class="inner">
            <div class="nav">
                <div class="header__burger"><span></span><span></span><span></span></div>
                <img src="../../assets/img/logo.png" alt="Театр 'Вояж-Престиж'">
                <ul class="header__nav">
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