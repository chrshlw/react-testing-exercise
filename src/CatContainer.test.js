import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CatDescription from './CatDescription';
import CatContainer from './CatContainer';
import Cat from './Cat';

Enzyme.configure({ adapter: new Adapter() });

describe('<CatContainer/>', () => {

    /*
    Shallow rendering lets you render a component “one level deep” and assert facts about what its render method returns, 
    without worrying about the behavior of child components, which are not instantiated or rendered. This does not require a DOM.
    https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
    */
    it("renders three components", () => {
        const wrapper = shallow(<CatContainer size={3}/>);
        expect(wrapper.find(Cat)).toHaveLength(3);
        //Test the following to understand shallow rendering:
        //expect(wrapper.find(CatDescription)).to.have.lengthOf(3); //
    });
    it("renders a h3", () => {
        const wrapper = shallow(<CatContainer size={2}/>);
        expect(wrapper.containsAnyMatchingElements("h3"));
    });
})
