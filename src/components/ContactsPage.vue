<template>
    <div>
        <app-header></app-header>

        <main class="content">
            
            <app-heading title="Контакти"></app-heading>
            
            <section class="block">
                <div class="inner">
                    <div class="contacts">
                        <!--#map-->
                        <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4769823182796!2d30.430333315731314!3d50.450841979475406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc3c0eb1581d%3A0x8ec1705b1e980e6!2z0LLRg9C70LjRhtGPINCS0LjQsdC-0YDQt9GM0LrQsCwgODIsINCa0LjRl9Cy!5e0!3m2!1suk!2sua!4v1490277531428" width="600" height="450" frameborder="0" style="border:0" allowfullscreen=""></iframe>
                        <div class="contacts__box">
                            <div class="contacts__info">
                                <h2>Контактна інформація</h2>
                                <p>Наш адміністратор із задоволенням відповість на ваші запитання з понеділка по п`ятницю з 9-00 до 18-00.</p>
                                <p><b>03162, М. КИЇВ, ВУЛ. ВИБОРГЗЬКА 82</b></p>
                                <p>(044) 361-70-27 <br> (095) 429-81-74 <br> (095) 068-36-38 <br></p>
                                <p><a href="mailto:re-z@ukr.net" title="Напишіть нам">re-z@ukr.net</a></p>
                            </div>
                            <form id="form">
                                <h2>Форма зв`язку</h2>
                                <input type="text" placeholder="Ваше ім`я">
                                <input type="number" placeholder="Ваш телефон">
                                <textarea placeholder="Ваше повідомлення"></textarea>
                                <input type="submit" value="Відправити" class="btn">
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <app-footer></app-footer>
    </div>
</template>