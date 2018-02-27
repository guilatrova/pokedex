import { mockAxios } from './reduxHelpers';
import { shallow } from 'enzyme';
import React from 'react';

class LocalStorageMock {
    constructor() {
      this.store = {};
    }
  
    clear() {
      this.store = {};
    }
  
    getItem(key) {
      return this.store[key] || null;
    }
  
    setItem(key, value) {
      this.store[key] = value.toString();
    }
  
    removeItem(key) {
      delete this.store[key];
    }
}
  
global.localStorage = new LocalStorageMock;
global.mockAxios = mockAxios;
global.shallow = shallow;
global.React = React;