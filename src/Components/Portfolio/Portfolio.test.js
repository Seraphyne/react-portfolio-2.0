import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Portfolio from './Portfolio';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<Portfolio />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Portfolio />
      </BrowserRouter>,
    );
  });
});