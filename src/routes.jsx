// Views
import { Home } from './views/Home'
import { LandingPage } from './views/LandingPage'

// CMPS

const routes = [
    {
        path: "/",
        component: <LandingPage />
    },
    {
        path: "/home",
        component: <Home />
    }
]

export default routes

