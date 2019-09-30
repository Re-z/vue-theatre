<template>
    <div>
        <app-header></app-header>
        <!-- todo -->
        <!-- сделать активное состояние кнопки в списке -->
        <!-- динамически подгружать первый элемент -->
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
                                    v-if="item.forAge === 'young'"
                                    @click="selectActiveShow"
                                    :class="'is-active'"
                                >
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
                            <!-- Контент будет изменяться в зависимости от выбранного представления -->
                            <article>
                                <h4>{{selectedShow.name}}</h4>
                                <div>
                                    <img
                                        v-if="selectedShow.img"
                                        :src="require(`../assets/img/photo/rep/${selectedShow.img}`)"
                                     >
                                    <p>{{ selectedShow.text }}</p>
                                </div>
                                <!-- :src="require(`@/assets/img/photo/gallery/gallery(${img}).jpg`)" -->
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
            
            db: '', //сюда будет записан объект, который прийдет с firebase и на основании него будет отрисован список представлений в DOM
            selectedShow: { //здесь будет хранится объект активного выступления, которое в данный момент на экране
                "name": "Навчання Коськи",
                "img": "koska.jpg",
                "text": "Авторська постановка на одну дію для дітей віком від 4 до 12 років, мова українська або російська, тривалість 40-45 хвилин, режисер постановки – Бачинська Н.М. В ході постановки розкриваються такі питання повсякденної життєдіяльності як правила дорожнього руху та пожежна безпека.",
                "forAge": "young"
            } 
        }
    },
    methods: {
        
        selectActiveShow(event) {
            //забираем текст с кликнувшего элемента. Фильтруем на его основе весь масив и получаем массив с одним, активным объектом (на который кликнули)
            let selectedName = event.target.textContent.trim();
            let selectedShowObject = this.db.filter(el => {
                if(el.name === selectedName) {
                    return {el}
                }
            });
            console.log(this.selectedShow);
            //далее присваиваем значения этого объекта в переменную selectedShow, на основании которой отрисовываются элементы DOM
           this.selectedShow = selectedShowObject[0]
        }
        
    },
    created() {
        //забираем данные с firebase
        async function getDataFromDB() {
            let response = await fetch('https://vp-teatr.firebaseio.com/repertory.json');
            let data = await response.json();
            return data;
        };
        // получаем промис
        let data = getDataFromDB()
        // когда данные будут получены - они присвоятся переменной db в data
            .then(a => this.db = a);
    },
    
}
</script>