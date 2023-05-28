import Home from "../pages/Home/Home"
import Search from "../pages/Search/Search"
import About from "../pages/About/About"
import Profile from "../pages/Profile/Profile"

export const publicRoutes =  [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/search',
        element: <Search />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/about',
        element: <About />
    },
]

export const privateRoutes = [
    
]