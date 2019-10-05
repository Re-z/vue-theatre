<template>
    <div class="block__aside">
        <div class="aside-services">
            <h3>Перелік послуг, які ми пропонуємо</h3>
            <ul>
                <li v-for="(offer,index) in offers" :key="index"> {{ offer }}</li>
            </ul>
            <router-link exact to="services" class="btn">Детальніше</router-link>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                offers: [
                    'Театралізовані постановки для дітей та дорослих (антрепризи для всієї родини);',
                    'Професійна театралізована підтримка будь-яких тематичних заходів;',
                    'Професіне звукове супроводження;',
                    'Виготовлення костюмів та декорацій для виїзних театрів;',
                    'Майстерня експериментальної режисури;',
                    'Народний театр.'
                ]
            }
        }
    }
</script>