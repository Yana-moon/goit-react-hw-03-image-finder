import PropTypes from 'prop-types';
import { Component } from 'react';
import {SearchbarWrapper, SearchbarForm, Searchbarbutton, SearchbarInput, SearchbarLabel } from './Searchbar.styled';

export class Searchbar extends Component {
    state = {
        inputValue: '',
    };


handleChange = event => {
    event.preventDefault();
        this.setState(() => {
            return {inputValue: event.target.value };
        });
    };
    
onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };


render () {
    return (
<SearchbarWrapper>
    <SearchbarForm onSubmit={this.onFormSubmit}>
    <Searchbarbutton type="submit" disabled={this.state.inputValue.trim() === ''}>
        <SearchbarLabel>Search</SearchbarLabel>
    </Searchbarbutton>

    <SearchbarInput
        //class="input"
        type="text"
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