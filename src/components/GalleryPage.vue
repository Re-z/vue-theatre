<template>
    <div>
        <app-header></app-header>

        <main class="content">
            <section class="intro-line">
                <div class="inner">
                    <h1>Галерея</h1>
                </div>
            </section>
            <section class="block block_has-aside">
                <div class="inner">
                    <h2>Фото</h2>
                    <div class="block__content photo">
                        <div class="photo__overlay">
                            <div class="photo__slider-wrap">
                            <button class="photo__slider-close"></button>
                            <button class="photo__slider-left"></button>
                            <button class="photo__slider-right"></button>
                            <!-- <img src="../assets/img/photo/gallery/gallery(14).jpg" class="photo__slider-img"> -->
                            </div>
                        </div>

                        <!-- looping images -->
                        <img v-for="(img, index) in imgOrder" :key="index" :src="require(`@/assets/img/photo/gallery/gallery(${img}).jpg`)" title="Театр Вояж Престиж Фото" class="photo__img">
                
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

      <app-footer></app-footer>
      
    </div>
</template>



<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>

<script>
export default {
    data() {
        return {
            imgOrder: [32,33,34,35,36,37,38,39,17,18,19,12,23,28,4,5,6,1,40,29,30,8,9,7,10,11,13,14,15,16,20,22,24,25,26,27,31,41,2,3]
        }
    }
}
</script>