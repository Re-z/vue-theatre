<template>
    <div>

        <main class="content">
            
            <app-heading title="Галерея"></app-heading>
            

            <section class="block block_has-aside">
                <div class="inner">
                    <h2>Фото</h2>
                    <div class="block__content photo">
                        <div class="photo__overlay">
                            <div class="photo__slider-wrap">
                            <button class="photo__slider-close"></button>
                            <button class="photo__slider-left"></button>
                            <button class="photo__slider-right"></button>
                            </div>
                        </div>

                        <!-- looping images -->
                        <img 
                            v-for="(img, index) in imgOrder"
                            :key="index"
                            :src="require(`@/assets/img/photo/gallery/gallery(${img}).jpg`)" 
                            title="Театр Вояж Престиж Фото" class="photo__img"
                            @click="openLightbox(index)"
                        >
                        <!-- При клике на картинку - забираем ее индекс в массиве для того, чтобы галерея открылась с нужной картинки-->
                    </div>
                
                    <app-aside></app-aside>

                </div>
            </section>
            <section class="block block_light">
                <div class="inner">
                    <h2>Відео</h2>
                    <div class="video">
                        <iframe src="https://www.youtube.com/embed/iao-l4USKEU" frameborder="0" allowfullscreen="" style="visibility: visible;"></iframe>
                        <iframe src="https://www.youtube.com/embed/tc6RvFlyql0" frameborder="0" allowfullscreen="" style="visibility: visible;"></iframe>
                        <iframe src="https://www.youtube.com/embed/rXMeVSbyoSc" frameborder="0" allowfullscreen="" style="visibility: visible;"></iframe>
                    </div>
                </div>
            </section>
        </main>

        <!-- Плагин для галереи
        https://www.npmjs.com/package/vue-image-lightbox
        Когда закрывается - срабатывает ф-я lightBoxCloseHandler (детектит закрытие открытие)
        -->
        <LightBox 
            v-if="lightboxIsOpen" 
            :images="objForLightbox" 
            :showLightBox="lightboxIsOpen"
            @onOpened = "lightBoxCloseHandler"
            :startAt = "selectedImgIndex">
        </LightBox>

    </div>
</template>




<script>
//порядок отображения картинрк
let imgOrder = [43,44,42,45,46,47,32,33,34,35,36,37,38,39,17,18,19,12,23,28,4,5,6,1,40,29,30,8,9,7,10,11,13,14,15,16,20,22,24,25,26,27,31,41,2,3];
//новый массив картинок для работы с lightbox
let objForLightbox = imgOrder.map(el => {
    return {
        thumb: require(`@/assets/img/photo/gallery/gallery(${el}).jpg`),
        src: require(`@/assets/img/photo/gallery/gallery(${el}).jpg`),
    }
})

export default {
    data() {
        return {
            imgOrder: imgOrder, //данные беруться из обычного скрипта выше (не из vue instance) в связи с проблемами с областью видимости
            objForLightbox: objForLightbox, // аналогично. данные беруться из вышесозданной переменной. Создано для того, чтобы работать с lightbox (по API у них должен быть обьект с src-сами)
            lightboxIsOpen: false, //состояние lightbox на текущий момент, привязано к v-if
            selectedImgIndex: 0
        }
    },
    methods: {
        //функция показывает lightbox галлерею
        // index - параметр для хранения индекса картинки, по которой кликнули. Используется для того, чтобы начинать показ картинок с выбранной
        // дальше index передается в <lightbox> как пропс startAt
        openLightbox(index) {

            let windowWidth = window.innerWidth;
            this.selectedImgIndex = index //устанавливает индекс выбранной картинки

            if(windowWidth > 1000) {
              //если разрешения экрана больше 1000 - показываем lightbox
              this.lightboxIsOpen = true;
            } 
        },
        lightBoxCloseHandler(event) {
            //в еvent поступает true или false в зависимости от того открывается или закрывается lightBox (в API плагина)
            if(event === false) {
                //если закрывается, мы сбрасываем значение переменной, чтобы в следующий раз он снова мог открыться
                this.lightboxIsOpen = false
            }
        }
    },
}
</script>

<style>
/* стили для плагина */
    .vue-lb-box{width:100%}.vue-lb-container{align-items:center;background-color:rgba(0,0,0,.8);box-sizing:border-box;display:-moz-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;height:100%;justify-content:center;left:0;padding:10px;position:fixed;top:0;width:100%;z-index:2000;-webkit-align-items:center;-moz-box-sizing:border-box;-webkit-justify-content:center;-ms-flex-align:center;-webkit-box-align:center;-ms-flex-pack:center;-webkit-box-pack:center}.vue-lb-content{margin-bottom:60px;max-width:1024px;position:relative}.vue-lb-header{display:-moz-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;justify-content:space-between;height:40px;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify}.vue-lb-button-close{background:none;border:none;cursor:pointer;outline:none;position:relative;top:0;vertical-align:bottom;height:40px;margin-right:-10px;padding:10px;width:40px}.vue-lb-figure{margin:0;display:block;position:relative}img.vue-lb-modal-image{max-height:calc(100vh - 140px);cursor:pointer;display:block;height:auto;margin:0 auto;max-width:100%;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.vue-lb-info{visibility:initial;position:absolute;bottom:25px;color:#fff;background-color:rgba(0,0,0,.7);height:40px;width:100%;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;text-align:center}.vue-lb-footer{box-sizing:border-box;color:#fff;cursor:auto;display:-moz-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;justify-content:space-between;left:0;line-height:1.3;padding:5px 0;-moz-box-sizing:border-box;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify}.vue-lb-footer-info{display:block;flex:1 1 0;-webkit-flex:1 1 0;-ms-flex:1 1 0}.vue-lb-footer-count{color:hsla(0,0%,100%,.75);font-size:.85em;padding-left:1em}.vue-lb-thumbnail{bottom:10px;height:50px;padding:0 50px;text-align:center;white-space:nowrap;display:inline-block;position:relative}.vue-lb-modal-thumbnail{box-shadow:inset 0 0 0 1px hsla(0,0%,100%,.2)}.vue-lb-modal-thumbnail,.vue-lb-modal-thumbnail-active{background-position:50%;background-size:cover;border-radius:2px;cursor:pointer;display:inline-block;height:50px;margin:2px;overflow:hidden;width:50px}.vue-lb-modal-thumbnail-active{box-shadow:inset 0 0 0 2px #fff}.vue-lb-thumbnail-arrow{height:54px;width:40px;background:none;border:none;border-radius:4px;cursor:pointer;outline:none;padding:10px;position:absolute;top:50%;-webkit-touch-callout:none;user-select:none;height:50px;margin-top:-25px;width:30px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.vue-lb-thumbnail-left{left:10px}.vue-lb-thumbnail-right{right:10px}.vue-lb-arrow{background:none;border:none;border-radius:4px;cursor:pointer;outline:none;padding:10px;position:absolute;top:50%;-webkit-touch-callout:none;user-select:none;height:120px;margin-top:-60px;width:40px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.vue-lb-left{left:10px}.vue-lb-right{right:10px}.vue-lb-open{overflow:hidden}.vue-lb-thumbnail-wrapper{bottom:10px;height:50px;left:0;margin:0 auto;position:absolute;right:0;text-align:center;top:auto}@media (min-width:500px){.vue-lb-thumbnail-arrow{width:40px}}@media (min-width:768px){.vue-lb-arrow{width:70px}}.fade-enter-active,.fade-leave-active{transition:opacity .2s ease}.fade-enter,.fade-leave-to{opacity:0}.no-scroll{overflow-y:hidden}
</style>