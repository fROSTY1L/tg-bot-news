import React from 'react';

import { GlobalStyle } from './assets/Styles/GlobalStyles';
import HeaderLayout from './assets/components/HeaderLayout';
import NewsContent from './assets/components/NewsContent';


const App: React.FC = () => {

  return (
    <>  
      <GlobalStyle/>  
      <HeaderLayout/>
      <NewsContent/>
    </>

  );
};

export default App;