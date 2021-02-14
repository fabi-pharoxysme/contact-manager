import React from 'react';
import { connect } from 'react-redux';

const PeopleList =(props) => {
    const arr = props.contacts;
    const listItems = arr.map((val,index) => 
        <li key = {index}>{val}</li>
    );
    return <ul>{listItems}</ul>
}

const mapStateProps = (state) => {
    return {
        contacts: state.contacts
    }
} 

export default connect(mapStateProps)(PeopleList);