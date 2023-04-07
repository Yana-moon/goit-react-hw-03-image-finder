import PropTypes from 'prop-types';
import { Component } from 'react';
import {SearchbarWrapper, SearchbarForm, Searchbarbutton, SearchbarInput, SearchbarLabel } from './Searchbar.styled';

export class Searchbar extends Component {
    state = {
        name: '',
    };


handleChange = evt => {
        this.setState({ name: evt.target.value.trim() });
    };
    
onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    };


render () {
    return (
<SearchbarWrapper>
    <SearchbarForm onSubmit={this.onFormSubmit}>
    <Searchbarbutton type="submit">
        <SearchbarLabel>Search</SearchbarLabel>
    </Searchbarbutton>

    <SearchbarInput
        //class="input"
        type="text"
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