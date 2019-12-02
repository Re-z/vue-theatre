import HomePage from '../../components/layouts/HomePage.vue'
import AboutPage from '../../components/AboutPage.vue'
import GalleryPage from '../../components/GalleryPage.vue'
import ServicesPage from '../../components/ServicesPage.vue'
import ContactsPage from '../../components/ContactsPage.vue'
import RepertoryPage from '../../components/RepertoryPage.vue'
import page404 from '../../components/404.vue'

export const routes = 
    [
        {path: '/', component: HomePage, meta: {title: 'Вояж-Престиж|Головна', description: 'Вистави для дiтей та дорослих, анiматори на будь яке свято'}},
        {path: '/about', component: AboutPage, meta: {title: 'Вояж-Престиж|Про нас', description: 'Київський театр Вояж-Престиж. Професійні актори, оригінальні декорації, цікаві вистави.'}},
        {path: '/gallery', component: GalleryPage, meta: {title: 'Вояж-Престиж|Галерея', description: 'Фото і відео вистав Київського театру Вояж-Престиж.'}},
        {path: '/repertory', component: RepertoryPage, meta: {title: 'Вояж-Престиж|Репертуар', description: 'Репертуарний план театру Вояж-Престиж. Спектаклі та вистави з повчальною складовою для різних вікових груп'}},
        {path: '/services', component: ServicesPage, meta: {title: 'Вояж-Престиж|Послуги', description: 'Київський театр Вояж-Престиж. Професійні актори, оригінальні декорації, цікаві вистави.'}},
        {path: '/contacts', component: ContactsPage, meta: {title: 'Вояж-Престиж|Контакти', description: 'Театр Вояж-Престиж. Контакти.'}},
        { path: '*',component: page404, meta: {title: 'Вояж-Престиж|404', description: 'oops'} }
    ]