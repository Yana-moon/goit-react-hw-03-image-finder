import PropTypes from 'prop-types';
import { Component } from 'react';
//import { toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import {SearchbarWrapper, SearchbarForm, Searchbarbutton, SearchbarInput, SearchbarLabel } from './Searchbar.styled';

export class Searchbar extends Component {
    state = {
        name: '',
    };


// відслідковування input-a
handleChange = evt => {
    this.setState({ name: evt.target.value.trim() });
  };

  // передача значення зі стейту в App під час сабміту форми
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
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
        //name="searchName"
        //autocomplete="off"
        //autofocus
        placeholder="Search images and photos"
        onChange={this.handleChange}
        value={this.state.name}
    />
    </SearchbarForm>
</SearchbarWrapper>
    );
}
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };