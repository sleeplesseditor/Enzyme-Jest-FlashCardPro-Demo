import React from 'react';
import { shallow } from 'enzyme';
import { StackForm } from './stackform';

const changeTitle = 'change title';
const changePrompt = 'change prompt';
const changeAnswer = 'change answer';

describe('StackForm', () => {
  const stackForm = shallow(<StackForm />);

    //Rendering tests
  it('renders the form title', () => {
    expect(stackForm.find('h4').at(1).text()).toEqual('Create a New Stack');
  });

  it('renders a link home', () => {
    expect(stackForm.find('h4').at(0).text()).toEqual('Home');
  });

  it('renders a Form component', () => {
    expect(stackForm.find('Form').exists()).toBe(true);
  });

  it('renders a button to add a new card', () => {
    expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card');
  });

  it('renders a button to submit the form', () => {
    expect(stackForm.find('Button').at(1).props().children).toEqual('Save and Add the Stack');
  });

  //Behaviour tests
  describe('and updating the title', () => {
    beforeEach(() => {
      stackForm.find('FormControl').simulate('change', { target: { value: changeTitle } })
    });

    it('updates the title in state', () => {
      expect(stackForm.state().title).toEqual(changeTitle);
    });
  });

  //Card tests
  describe('when adding a new card', () => {
    beforeEach(() => {
      stackForm.find('Button').at(0).simulate('click');
    });

    afterEach(() => {
      stackForm.setState({ cards: [] });
    });

    it('adds a new card to the state', () => {
      expect(stackForm.state().cards.length).toEqual(1);
    });

    it('renders the prompt section', () => {
      expect(stackForm.find('ControlLabel').at(1).props().children).toEqual('Prompt:');
    });

    it('renders the answer section', () => {
      expect(stackForm.find('ControlLabel').at(2).props().children).toEqual('Answer:');
    });

    //Behaviour Updating Prompts
    describe('and updating the card prompt', () => {
      beforeEach(() => {
        stackForm.find('FormControl').at(1)
          .simulate('change', { target: { value: changePrompt } });
      });

      it('updates the prompt in the state', () => {
        expect(stackForm.state().cards[0].prompt).toEqual(changePrompt);
      });
    });

    //Behaviour Updating Answers
    describe('and updating the card answer', () => {
      beforeEach(() => {
        stackForm.find('FormControl').at(2)
          .simulate('change', { target: { value: changeAnswer }});
      });

      it('updates the answer in the state', () => {
        expect(stackForm.state().cards[0].answer).toEqual(changeAnswer);
      });
    });
  });
});