import React, {FC} from 'react';
import {Header} from "./components/header/header.comp";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div>
        <Header/>
    </div>
  );
}

