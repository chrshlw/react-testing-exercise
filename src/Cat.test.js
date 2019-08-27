import Enzyme, { mount , shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CatDescription from './CatDescription';
import CatContainer from './CatContainer';
import Cat from './Cat';
import _ from 'lodash';
import { callbackify } from 'util';
import { doesNotReject } from 'assert';
Enzyme.configure({ adapter: new Adapter() });

describe('<Cat>', () => {
    /*
    Full DOM Rendering: unlike shallow or static rendering, full rendering actually mounts the component in the DOM,
    which means that tests can affect each other if they are all using the same DOM. 
    Keep that in mind while writing your tests and, if necessary, use .unmount() or something similar as cleanup.
    https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
    */
    it('renders a cat with an image and a description', (done) => {  
        //mock fetch     
        const mockSuccessResponse = {data : "http://www.someUrl.com"};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({ // 3
        json: () => mockJsonPromise,
        });
        //jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

        const testDescription = "Test Description";
        const wrapper = mount(<Cat description={testDescription}></Cat>);
        expect(wrapper.find(".catImg")).toHaveLength(1);
        expect(wrapper.find(CatDescription)).toHaveLength(1);
        expect(wrapper.text()).toContain(testDescription);
        process.nextTick(() => { // 6
            expect(wrapper.find(".catImg").first().prop("src")).toEqual("someUrl");
            global.fetch.mockClear();
            delete global.fetch;
            done();
        });
    });
    
    it('counts click events on img', () => {
        const wrapper = mount(<Cat />);
        const catImg = wrapper.find(".catImg")
        catImg.simulate('click');
        catImg.simulate('click');
        catImg.simulate('click');
        
        expect(wrapper.find(CatDescription).prop('clicks')).toEqual(3);
      });

    it('ignores click events on description', () => {
        const wrapper = mount(<Cat />);
        wrapper.find(CatDescription).simulate('click');
        wrapper.find(CatDescription).simulate('click');
        expect(wrapper.find(CatDescription).prop('clicks')).toEqual(0);
      });
})