import React from 'react';
import './App.css';
import AddPersonForm from './components/ContactManager/AddPersonForm';
import PeopleList from './components/ContactManager/PeopleList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function App() {
  const initialState = {
    contacts : ['James Smith', 'Thomas Anderson', 'Bruce Wayne']
    };

    //Reducer

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'ADD_PERSON':
                return {...state, contacts : [...state.contacts,action.data]}
                default: 
                return state;
        }
    }
    
    const store = createStore(reducer)

    return (
        <div className = 'App'>
            <Provider store = {store}>
                 <AddPersonForm />
                <PeopleList />
            </Provider>           
        </div>
    )
}

export default App;
