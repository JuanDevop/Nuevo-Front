import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'



const client = new ApolloClient({
  uri: 'http://localhost:3100'
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

