import React from 'react';

import { GlobalStyle } from './assets/Styles/GlobalStyles';
import HeaderLayout from './assets/components/HeaderLayout';
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