import React from 'react';
import Routes from './components/route/router';
import "../src/styles/theme.less"; // variables to override antd
import "../src/styles/index.scss";

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
