import React, { Component } from 'react';
import './App.css';
import EmailItem from './EmailItem';

import data from './data.js'
class App extends Component {
  render() {
    console.log(data)
    return (

      <div>
        {
          data.map(({headers, plain}) => {
            const {Avatar, Subject, From, To, Date, Description } = headers;
            const Body = plain;
          return <EmailItem avatar={Avatar} metaData={From + "\n" + To + "\n" + Date}

          subject={Subject} body={Body} description={Description}/>
        })
      }
      </div>

    );
  }
}

export default App;
