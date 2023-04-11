import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import {SearchbarWrapper, SearchbarForm, Searchbarbutton, SearchbarInput, SearchbarLabel } from './Searchbar.styled';

export class Searchbar extends Component {
    state = {
        inputValue: '',
    };


// відслідковування input-a
handleChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  };

  // передача значення зі стейту в App під час сабміту форми
  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue.trim() === '') {
      toast.warn('Enter something');
      return;
    }
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

render () {
    return (
<SearchbarWrapper>
    <SearchbarForm onSubmit={this.onFormSubmit}>
    <Searchbarbutton type="submit">
    <BiSearchAlt2 size="25px" />
        <SearchbarLabel>Search</SearchbarLabel>
    </Searchbarbutton>

    <SearchbarInput
        //class="input"
        type="text"
        name="inputValue"
        //autocomplete="off"
        //autofocus
        placeholder="Search images and photos"
        onChange={this.handleChange}
        value={this.state.inputValue}
    />
    </SearchbarForm>
</SearchbarWrapper>
    );
}
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };