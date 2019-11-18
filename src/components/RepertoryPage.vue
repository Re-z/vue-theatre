<template>
    <div>
        <!-- todo -->
        <!-- динамически подгружать первый элемент -->
        <main class="content">


            <app-heading title="Репертуар на 2019 рiк"></app-heading>

            <section class="block block_has-aside">
                <div class="inner">
                    <div class="rep">
                        <aside class="block__aside rep__aside">
                            <div class="block__aside-item">
                                <h2 
                                    @click="youngListIsShown = !youngListIsShown" 
                                    class="rep__list-title is-active">Для молодших вікових груп 
                                    <span class=""></span>
                                </h2>
                            
                                <ul v-if="youngListIsShown">
                                    <li 
                                        v-for="(item,index) in forYoungShows" :key="index" 
                                        @click="selectActiveShow"
                                        :class="item.name === selectedShow.name ? 'is-active' : ''" 
                                    >
                                    <!-- Если название представления, которое идет в цикле совпадает
                                        с названием выбранного представления из обьекта selectedShow,
                                        то добавляем этому элементу класс -->
                                        {{ item.name }}
                                    </li>
                                </ul>
                            </div>
                            

                            <div class="block__aside-item">
                                <h2 
                                    @click="oldListIsShown = !oldListIsShown" 
                                    class="rep__list-title">Для старших вікових груп 
                                    <span class=""></span>
                                </h2>
                                
                                <ul v-if="oldListIsShown">
                                    <li 
                                        v-for="(item,index) in forOldShows" :key="index" 
                                        @click="selectActiveShow"    
                                        :class="item.name === selectedShow.name ? 'is-active' : ''" 

                                    >
                                        {{ item.name }}
                                    </li>
                                </ul>
                            </div>
                            <div class="block__aside-item"  >
                                <h2 
                                    @click="archiveListIsShown = !archiveListIsShown" 
                                    class="rep__list-title">Архів вистав 
                                    <span></span>
                                </h2>
                                <ul class="" v-if="archiveListIsShown">
                                    <li 
                                        v-for="(item,index) in archivedShows" :key="index" 
                                        @click="selectActiveShow"    
                                        :class="item.name === selectedShow.name ? 'is-active' : ''"     
                                    >
                                        {{ item.name }}
                                    </li>
                                </ul>
                            </div>

                        </aside>
                        
                        <div class="block__content rep__content">
                            
                            <!-- Контент будет изменяться в зависимости от выбранного представления -->
                            <div class="block__content-box" v-if="initialShowContentBlock">
                                <button class="close" @click="initialShowContentBlock = !initialShowContentBlock">X</button>
                                <article>
                                    <h4>{{selectedShow.name}}</h4>
                                    <div>
                                        <img
                                            v-if="selectedShow.img"
                                            :src="require(`../assets/img/photo/rep/${selectedShow.img}`)"
                                        >
                                        <p>{{ selectedShow.text }}</p>
                                    </div>
                                </article>
                            </div>
                            
                            

                            
                      
                        </div>
                    </div>
                </div>

            </section>
        </main>


</div>
</template>

<script>

import {getDataFromDB} from '../assets/js/getDataFromServer.js';

export default {
    data() {
        return {
            youngListIsShown: true, //управляет статусом показа аккордеона с представлениями
            oldListIsShown: false, //управляет статусом показа аккордеона с представлениями
            archiveListIsShown: false, //управляет статусом показа аккордеона с представлениями
            db: [], //сюда будет записан объект, который прийдет с firebase и на основании него будет отрисован список представлений в DOM
            selectedShow: { //здесь будет хранится объект активного выступления, которое в данный момент на экране
                "name": "Навчання Коськи",
                "img": "koska.jpg",
                "text": "Авторська постановка на одну дію для дітей віком від 4 до 12 років, мова українська або російська, тривалість 40-45 хвилин, режисер постановки – Бачинська Н.М. В ході постановки розкриваються такі питання повсякденної життєдіяльності як правила дорожнього руху та пожежна безпека.",
                "forAge": "young",
            },
            initialShowContentBlock: true 
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
            //далее присваиваем значения этого объекта в переменную selectedShow, на основании которой отрисовываются элементы DOM
           this.selectedShow = selectedShowObject[0],
           this.initialShowContentBlock = true
        },
        
        
    },
    computed: {
        //на основе полученных данных, создаем новые массивы для принта в DOM
        forYoungShows(){
            return this.db.filter(el => {
                if(el.forAge === 'young') {
                    return el
                }
            })
        },
        forOldShows(){
            return this.db.filter(el => {
                if(el.forAge === 'old') {
                    return el
                }
            })
        },
        archivedShows(){
            return this.db.filter(el => {
                if(el.forAge === 'archive') {
                    return el
                }
            })
        }
    },
    created() {
        
        // получаем промис
        let data = getDataFromDB() //ф-я лежит в js/getData...
        // когда данные будут получены - они присвоятся переменной db в data и произойдет отрисовка списка
            .then(a => this.db = a);
    },
    
}
</script>
