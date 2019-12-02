<template>
    <div class="appear-in">
        <header id="top" class="header header_mainpage">
            <div class="inner">
                <div class="header__logo"><img src="@/assets/img/logo.png" alt="Театр 'Вояж-Престиж'">
                    <h1>Театр "Вояж-Престиж"</h1>
                </div>
                <div class="header__box">
                    <article class="header__about">
                        <h2>Галерея</h2>
                        <p>Світлини та відео з наших вистав, концертів, розважальних заходів.</p>
                        <router-link exact to="/gallery" class="btn btn_color">Детальніше</router-link>
                    </article>
                    <article class="header__gal">
                        <h2>Про нас</h2>
                        <p>Ось уже більш ніж 8 років приватний виїзний театр-студія „Вояж- Престиж” проводить свої вистави для різних вікових груп населення нашої країни, привносячи тим самим ту частинку культури в маси, яка так необхідна нам у ці не легкі часи...</p>
                        <router-link exact to="/about" class="btn">Детальніше</router-link>
                    </article>
                </div>
            </div>
        </header>
        <main class="content">
            <section class="block">
                <div class="inner">
                    <div class="links">
                        <div class="links__item">
                            <div class="links__curtains"></div><strong>Репертуар</strong>
                            <p>Перелік актуальних вистав на 2019 рік.</p>
                            <router-link exact to="/repertory" class="btn">Детальніше</router-link>
                        </div>
                        <div class="links__item">
                            <div class="links__masc"></div><strong>Послуги</strong>
                            <p>Перелік послуг, які пропонує наш театр.</p>
                            <router-link exact to="/services" class="btn">Детальніше</router-link>
                        </div>
                        <div class="links__item">
                            <div class="links__paper"></div><strong>Контакти</strong>
                            <p>Хочете зв`язатися з нами? Вам сюди.</p>
                            <router-link exact to="/contacts" class="btn">Детальніше</router-link>
                        </div>
                    </div>
                </div>
            </section>
            <section class="intro">
                <div class="inner">
                    <div class="intro__img"></div>
                    <div class="intro__text-wrap">
                        <h3><span>Вітаємо</span> <br> у майстерні акторського перевтілення</h3><strong>Київського театру "Вояж-Престиж"</strong>
                        <p>Театр – це геніальне творіння людської думки. Важлива специфічна особливість цього мистецтва, яка відрізняє його переважно від усіх інших, полягає у тому, що глядач сам особисто має змогу стати свідком процесу художньої творчості. На його очах створюється художній образ, який переповнюється радістю, сумом, здивуванням, азартом, турботою, сміхом...словом усіма емоціями та почуттями, які властиві людині. І це енергія, жива енергія, яка передається від актора до глядача. А в сумі це можна без перебільшення назвати магією. Магією театрального мистецтва.</p>
                        <p>Запрошуємо вас поринути у цей дивовижний світ разом із театром "Вояж-Престиж"!</p>
                    </div>
                </div>
            </section>
        </main>

        <app-footer></app-footer>

    </div>
</template>
<style>
@keyframes appear {
    from {
        opacity: 0
    } to {
        opacity: 1;
    }
}
.appear-in {
  animation: appear .5s  
}
</style>
