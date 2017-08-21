import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

 export default class App extends Component {

   constructor(props) {
    super(props);

    this.state = {
      message: {},
    };
   }

   render() {
     const params = {'room': 'ttenJqkmS3LKyoc7f'};
    return (
      <div className="container">
        {
          Meteor.call('addMessage', (err, content) => {
            console.log("begin");
            if (err) {
                console.log('err: ' + err.reason);
                this.setState({ error: err.reason });
              } else {
                this.setState({ message: content });
                console.log('this state: ' + this.state.message.text);
              }
            })
        }
        <li>{this.state.message.text}</li>
      </div>
    );
  }
 }
