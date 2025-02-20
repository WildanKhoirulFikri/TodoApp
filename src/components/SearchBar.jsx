import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(e) {
        this.props.onSearch(e.target.value);
    }

    render() {
        return (
        <input
            type="text"
            placeholder="Cari catatan..."
            value={this.props.searchTerm}
            onChange={this.handleSearchChange}
        />
        );
    }
}

export default SearchBar;