import {HomePage} from "../pages/homePage/HomePage";
import {ProfilePage} from "../pages/profilePage/ProfilePage";
import {FullPostPage} from "../pages/postPage/FullPostPage";
import {SignUpPage} from "../pages/Auth/SignUpPage";
import {SignInPage} from "../pages/Auth/SignInPage";


export const routes = {
    globalArticles: {
        path: '/',
        Element: HomePage,
    },
    personalArticles: {
        path: '/personal-articles',
        Element: HomePage,
    },
    profile: {
        path: '/@:profile',
        Element: ProfilePage,
    },
    profileFavorites: {
        path: '/@:profile/favorites',
        Element: ProfilePage,
    },
    singleArticle: {
        path: '/article/:slug',
        Element: FullPostPage,
    },
    signIn: {
        path: '/sign-in',
        Element: SignInPage,
    },
    signUp: {
        path: '/sign-up',
        Element: SignUpPage,
    },
};
