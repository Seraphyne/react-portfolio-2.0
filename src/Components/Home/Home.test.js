import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<Home />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
  });
});