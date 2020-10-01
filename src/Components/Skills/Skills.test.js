import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Skills from './Skills';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<Skills />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Skills />
      </BrowserRouter>,
    );
  });
});