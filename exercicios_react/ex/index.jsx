import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import Field from './field';

const reducers = combineReducers({
    field: () => ({value: 'Opa'})
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field label='Contador' initialValue={10} />
    </Provider>

,document.getElementById('app'));
