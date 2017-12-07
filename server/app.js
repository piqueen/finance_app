import bodyParser from 'body-parser';
import express from 'express';
import plaid from 'plaid';
import plaidDetails from './plaidClient';
import moment from 'moment';

const app = express();

const port = process.env.PORT || 8000;

app.listen(port);

console.log(`App is listening on ${port}`);

const {
  clientId, publicKey, secret, plaidEnv,
} = plaidDetails;

const plaidClient = new plaid.Client(
    '59f66d3c4e95b81989bc8952',
    '8646b7f79bd7e320a35bf055fc3b1e',
    '06dc84cac43d36546eca5e5f2fa604',
     plaid.environments.development,
);

const accessToken = 'access-development-9b15d3a6-dc3c-46ce-9618-4041b55ef416';

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log('We got there');
    res.send('Hello world');
})

app.post('/exchange-token', (req, res) => {
    console.log("Got request");
  plaidClient.exchangePublicToken(req.body.public_token)
      .then((plaidRes) => {
          console.log("Success");
      const { access_token } = plaidRes;
      console.log('ACCESS TOKEN: ', access_token);
      res.status(200).send(access_token);
    })
      .catch((error) => {
          console.log(error);
      res.status(400);
    });
});


app.get('/transactions', (req, res) => {

    const now = new Date;
    const today = moment(now).format('YYYY-MM-DD');
    const oneMonthAgo = moment(now).subtract(12, 'months').format('YYYY-MM-DD');

    plaidClient.getTransactions(accessToken, oneMonthAgo, today)
        .then(transactionsData => res.status(200).send(transactionsData))
        .catch((error) => {
            console.log(error);
            res.status(400);
        });
})

export default app;
