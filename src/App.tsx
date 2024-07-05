import React from 'react';

import { GlobalStyle } from './assets/Styles/GlobalStyles';
import HeaderLayout from './assets/components/HeaderLayout';
import NewsContent from './assets/components/NewsContent';
import InfiniteScrollComponent from './assets/components/InfiniteScrollComponent';


const App: React.FC = () => {

  return (
    <>  
      <GlobalStyle/>  
      <HeaderLayout/>
      <InfiniteScrollComponent/>
    </>

  );
};

export default App;