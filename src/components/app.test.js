import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

//Rendering tests
describe('App', () => {
    const app = shallow(<App />);

    it('renders the `FlashCard Pro` title', () => {
        expect(app.find('h2').text()).toEqual('FlashCard Pro')
    });

    it('renders the StackList', () => {
        expect(app.find('Connect(StackList)').exists()).toBe(true);
      });
    
    it('renders a link to create new stacks', () => {
        expect(app.find('Link h4').text()).toEqual('Create a New Stack');
     });
});