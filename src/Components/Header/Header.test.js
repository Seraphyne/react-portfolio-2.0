import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<Header />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
  });
});