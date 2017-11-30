import React from 'react';
import axios from 'axios';
import { db } from '../firebase';

var handler = window.Plaid.create({
    clientName: 'Plaid Walkthrough Demo',
    env: 'development',
    key: '06dc84cac43d36546eca5e5f2fa604',
    product: ['transactions'],
    onSuccess: function (public_token, metadata) {

      console.log('PUBLIC TOKEN', public_token);

      axios.post('/exchange-token', {public_token})
        .then(res => console.log(res))

    },
    onExit: function (err, metadata) {
        if (err != null) {
            }
        }
   })



class Plaid extends React.Component{
    openLink = () => {
        handler.open();
    }
    render() {

        return (
            <a onClick={this.openLink}>Create Account</a>
            )
    }


}

export default Plaid;
