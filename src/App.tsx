import React, {FC} from 'react';
import {Header} from "./components/header/header.comp";
import {Route, Routes} from "react-router-dom";
import {routes} from "./utils/routes";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
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

