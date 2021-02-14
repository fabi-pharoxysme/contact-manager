import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../../actions';

const AddPersonForm = (props) => {
    const [ person, setPerson ] = useState('');
    
    function handleChange (e) {
        setPerson(e.target.value);
    }

    function handleSubmit(e) {
        if (person !== ''){
            props.addPerson(person);
            setPerson('')
        }
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input type = 'text' placeholder = 'Add new contact' 
                onChange = {handleChange} value = {person}></input>
                <button type = 'submit'> Add </button>
            </form>
        </div>
    )
};

const mapDispatchToProps = {
    addPerson
}

export default connect(null,mapDispatchToProps)(AddPersonForm);
