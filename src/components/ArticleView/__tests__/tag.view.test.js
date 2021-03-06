import React from 'react';
import renderer from 'react-test-renderer';
import TagView from '../tagComponent';
import storemock from '../../../store';

const tags = [];

it('renders correctly', () => {
  const tree = renderer
    .create(<TagView store={storemock} tags={tags} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
