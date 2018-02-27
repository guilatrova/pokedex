import PokemonSearch from './PokemonSearch';
import Button from 'material-ui/Button';

describe("<PokemonSearch />", () => {
    const defaultProps = {
        isFetching: false,
        onSearch: jest.fn()
    };

    it('renders ok', () => {
        const wrapper = shallow(<PokemonSearch {...defaultProps} />);
        expect(wrapper).toBeTruthy();
    });

    it('button should be enabled when no fetching', () => {
        const wrapper = shallow(<PokemonSearch {...defaultProps} />);
        expect(wrapper.find(Button).prop('disabled')).toBeFalsy();
    });

    it('button should be disabled when fetching', () => {
        const wrapper = shallow(<PokemonSearch {...defaultProps} isFetching={true} />);
        expect(wrapper.find(Button).prop('disabled')).toBeTruthy();
    });

    it('button should calls onSearch with args', () => {
        const onSearchSpy = jest.fn();
        const wrapper = shallow(<PokemonSearch {...defaultProps} onSearch={onSearchSpy} />);
        const search = "search-text-value";
        
        wrapper.setState({ search });
        wrapper.find(Button).simulate('click');

        expect(onSearchSpy).toHaveBeenCalledWith(search);
    });

});