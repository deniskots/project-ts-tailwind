import React, {FC} from 'react';
import {Header} from "./components/header/header.comp";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/homePage/HomePage";
import {ProfilePage} from "./pages/profilePage/ProfilePage";
import {FullPostPage} from "./pages/postPage/FullPostPage";
import {SignUpPage} from "./pages/Auth/SignUpPage";
import {SignInPage} from "./pages/Auth/SignInPage";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div className='pb-16 rounded-3xl'>
        <Header/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/@:profile' element={<ProfilePage/>}/>
            <Route path="/@:profile/favorites" element={<ProfilePage />} />
            <Route path='/article/:slug' element={<FullPostPage/>}/>
            <Route path='/sign-up' element={<SignUpPage/>}/>
            <Route path='/sign-in' element={<SignInPage/>}/>
        </Routes>
    </div>
  );
}

