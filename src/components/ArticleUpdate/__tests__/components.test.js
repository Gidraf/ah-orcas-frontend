import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../../store';
import UpdateForm, { Form } from '../UpdateForm';


function setup() {
  const props = {
    login: jest.fn(),
    resolved: false,
    social: {},
  };
  const enzymeWrapper = shallow(<Form {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('Update form unconnected', () => {
  describe('update', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.form-group-lg').length).toBe(2);
      expect(enzymeWrapper.find('.article-create-page').length).toBe(1);
      expect(enzymeWrapper.find('.form-control-lg').length).toBe(1);
    });
  });
});


const title = 'some article title';

it('renders register component without crashing', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <UpdateForm />
      </Router>
    </Provider>,
  );
  const node = wrapper.find('#title');
  node.simulate(
    'change',
    {
      target:
        { name: 'title', value: title },
    },
  );
  expect(node.instance().value).toBe(title);
});
