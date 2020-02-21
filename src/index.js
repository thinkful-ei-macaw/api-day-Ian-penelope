
import $ from 'jquery';

import 'normalize.css';
import './index.css';
import store from './store'

import api from './api';
import shoppingList from './shopping-list';

const main = function () {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
    .then(res => res.json())
  .then(() => console.log('updated!'));
shoppingList.bindEventListeners();
shoppingList.render();
};

$(main)