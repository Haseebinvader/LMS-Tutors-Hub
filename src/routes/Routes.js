import { Home, About, Contact, Courses, Teachers } from "../pages/index"

const PrivateRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/courses', component: Courses },
    { path: '/teachers', component: Teachers },
    { path: '/contact', component: Contact }
]

export { PrivateRoutes }