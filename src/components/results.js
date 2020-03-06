import React, { Component } from "react";
import { connect } from 'react-redux';

import * as actions from "../actions";
import Logo from "./logo";
import SearchBar from "./searchbar";

class Results extends Component {

    handleSearchBarSubmit(query){
        this.props.fetchPostsWithQuery(query);
    }
    render(){
        return(
            <div>
                
                <Logo size={55}/>
                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
            </div>
        )
    }
}

export default connect(null, actions)(Results);