import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';
import App from './App';
import './index.css';


ReactDOM.render(
    <SpeechProvider appId="3d36d5d3-6a54-44b7-9589-f5e5ea55e4a6" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);