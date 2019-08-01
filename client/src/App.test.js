import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ShallowRenderer();
const TestRenderer = require('react-test-renderer');
//const rendered = render(<App />);
renderer.render(<App />);

const result = renderer.getRenderOutput();
const emptyArray = [];


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('hello world array is empty', () => {
   expect(result.props.children).toEqual(emptyArray); 
})
