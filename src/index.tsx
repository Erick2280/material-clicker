import React from 'react';
import ReactDOM from 'react-dom';
import { giveItem, getItem, takeItem } from './mod-api';
import { Material } from './basemod';
import App from './pages/App';

ReactDOM.render(<App />, document.getElementById('root'));

// tests
console.log(`You have ${getItem(Material)} Material`);
console.log(`Adding 5 Material`);
giveItem(Material, 5);
console.log(`You have ${getItem(Material)} Material`);
console.log(`Taking 10 Material`);
takeItem(Material, 5);
console.log(`You have ${getItem(Material)} Material`);
