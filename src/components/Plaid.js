import React from 'react';
import axios from 'axios';
import plaidClient from '../plaidClient';
import { db } from '../firebase';

var handler = window.Plaid.create({
    clientName: 'Plaid Walkthrough Demo',
    env: 'development',
    key: '06dc84cac43d36546eca5e5f2fa604',
    product: ['transactions'],
    onSuccess: function (public_token, metadata) {

        plaidClient.exchangePublicToken(public_token)
            .then(function (res) {
                const access_token = res.access_token;
                console.log(access_token);
                db.collection('accessTokens').doc(access_token).set(access_token);
            
            })
            .catch(function (err) {
                console.log(err);
            })
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

