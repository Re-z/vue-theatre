<template>
    <div>
        <app-header></app-header>

        <main class="content">
            <section class="intro-line">
            <div class="inner">
                <h1>Репертуар на 2019 рік</h1>
            </div>
            </section>
            <section class="block block_has-aside">
                <div class="inner">
                    <div class="rep">
                        <aside class="block__aside rep__aside">
                            <h2 class="rep__list-title is-active">Для молодших вікових груп <span class=""></span></h2>
                            
                            <ul class="">
                                <li 
                                    v-for="(item,index) in db" :key="index" 
                                    v-if="item.forAge === 'young'">
                                    {{ item.name }}
                                </li>
                            </ul>


                            <h2 class="rep__list-title">Для старших вікових груп <span class=""></span></h2>
                            
                            <ul class="">
                                <li 
                                    v-for="(item,index) in db" :key="index" 
                                    v-if="item.forAge === 'old'">
                                    {{ item.name }}
                                </li>
                            </ul>

                            <h2 class="rep__list-title">Архів вистав <span class="is-active"></span></h2>
                            <ul class="">
                                <li 
                                    v-for="(item,index) in db" :key="index" 
                                    v-if="item.forAge === 'archive'">
                                    {{ item.name }}
                                </li>
                            </ul>
                        </aside>
                        <div class="block__content rep__content">

                            <article id="adv" class="">
                                <h4>Новорічні пригоди</h4>
                                <div><img src="img/photo/rep/advantures.JPG" title="Фото">
                                    <p>Авторська постановка, яка має на меті звернути увагу дітлахів на питання необхідності добре вчитися. Окремо висвітлюється тема самонавчання, як необхідної складової для досягнення успіху. Режисер - Бачинська Н.М.</p>
                                </div>
                            </article>

                            <article id="lyana" class="">
                                <h4 class="is-active">Як у Ляни на галявині</h4>
                                <div class="is-visible">
                                    <!---->
                                    <p>Повчально-ігрова постановка для дітей віком до 13 років. Завдяки своїй універсальності може використовуватися як повчальний спектакль-гра з будь-якою тематикою, цікавою як малятам так і дітям більш старшого віку.</p>
                                </div>
                            </article>
                      
                        </div>
                    </div>
                </div>

            </section>
        </main>

    <app-footer></app-footer>
</div>
</template>

<script>
export default {
    data() {
        return {
            db: '',
            showsForYoung: ''
        }
    },
    methods: {
        // filterShows(filter) {
        //     let newFilteredArray = db.filter(el => {
        //         return el.forAge === filter
        //     });
        //     this.showsForYoung = newFilteredArray;
        //     console.log(showsForYoung);
        // }
        
    },
    created() {
        async function getDataFromDB() {
            let response = await fetch('https://vp-teatr.firebaseio.com/repertory.json');
            let data = await response.json();
            return data;
        };
        let data = getDataFromDB()
            .then(a => this.db = a);
        // console.log('before create');
        // this.filterShows('young')
    },
    
}
</script>