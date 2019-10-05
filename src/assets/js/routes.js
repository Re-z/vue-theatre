import HomePage from '../../components/HomePage.vue'
import AboutPage from '../../components/AboutPage.vue'
import GalleryPage from '../../components/GalleryPage.vue'
import ServicesPage from '../../components/ServicesPage.vue'
import ContactsPage from '../../components/ContactsPage.vue'
import RepertoryPage from '../../components/RepertoryPage.vue'

export const routes = 
    [
        {path: '/', 
            components: {
                default: '',
                home: HomePage,
            }
        },
        {path: '/about', component: AboutPage},
        {path: '/gallery', component: GalleryPage},
        {path: '/repertory', component: RepertoryPage},
        {path: '/services', component: ServicesPage},
        {path: '/contacts', component: ContactsPage},
    ]