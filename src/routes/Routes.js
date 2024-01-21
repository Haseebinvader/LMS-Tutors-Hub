import { Home, Wishlist, Cart, Courses, ProfilePage } from "../pages/index"

const PrivateRoutes = [
    { path: '/', component: Home },
    { path: '/wishlist', component: Wishlist },
    { path: '/courses', component: Courses },
    { path: '/cart', component: Cart },
    { path: '/profile', component: ProfilePage }
]

export { PrivateRoutes }