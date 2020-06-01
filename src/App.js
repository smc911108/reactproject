import React from 'react';
import Info from './info';
import Counter from './Counter';
import MateEx1 from './MateEx1';
import ArrayFunc from './ArrayFunc';
import SimpleMenu from './SimpleMenu';

function App() {
  return (
    <div>
      <h3>hooks 예제1</h3>
      <Counter/>
      <h3>hooks 예제2</h3>
      <Info/>
      <h3>Material UI Test 예제3</h3>
      <MateEx1/>
      <h4>hooks 예제3</h4>
      <ArrayFunc/>
      <h4>SimpleMenu</h4>
      <SimpleMenu/>
    </div>
  );
}

export default App;
