import React, {FC} from 'react';
import {Header} from "./components/header/header.comp";
import {Subtitle} from "./components/subtitle/subtitle.comp";
import {MainPart} from "./components/main-part/mainPart";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div>
        <Header/>
        <Subtitle/>
        <MainPart/>
    </div>
  );
}

