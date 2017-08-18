import React from 'react';
import ReactDOM from 'react-dom';
import Field from './field';

ReactDOM.render(
    <Field label='Contador' initialValue={10} />
, document.getElementById('app'));
