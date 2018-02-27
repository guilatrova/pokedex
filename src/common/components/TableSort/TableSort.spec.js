/* eslint-disable react/react-in-jsx-scope */
import TableSort from './TableSort';

describe('<TableSort />', () => {
    const defaultProps = {
        data: [
            { id: 1, otherId: 10, alpha: 'abc', numeric: 1 }
        ]
    };

    it('renders ok', () => {
        const wrapper = shallow(<TableSort {...defaultProps} />);
        expect(wrapper).toBeTruthy();
    });
    
});