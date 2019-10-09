import React from 'react';
import ReactDOM from 'react-dom';
import { giveItem, getItemCount, takeItem } from './mod-api';
import { Material } from './basemod';
import App from './pages/App';
import store from './store';

ReactDOM.render(<App />, document.getElementById('root'));

console.log(Material);

// tests
console.log(`You have ${Material.count} Material`);
console.log(`Adding 5 Material`);
Material.give(5);
console.log(`You have ${Material.count} Material`);
console.log(`Taking 10 Material`);
Material.take(5);
console.log(`You have ${Material.count} Material`);

console.log(store.getState());
