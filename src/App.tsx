import React, {FC, useEffect} from 'react';
import {Header} from "./components/header/header.comp";
import {Route, Routes, useMatch, useNavigate} from "react-router-dom";
import {routes} from "./utils/routes";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
    const navigate = useNavigate()

    const homePageArticles = useMatch(routes.globalArticles.path)

    useEffect(() => {
        if(homePageArticles) {
            navigate(routes.personalArticles.path)
        }
    },[])
  return (
    <div className='pb-16 rounded-3xl'>
        <Header/>
        <Routes>
            {Object.values(routes).map((route) => (
                <Route path={route.path} element={<route.Element/>}/>
                )
            )}
        </Routes>
    </div>
  );
}

