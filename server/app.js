import bodyParser from 'body-parser';
import express from 'express';
import plaid from 'plaid';
import plaidDetails from './plaidClient';

const app = express();

const port = process.env.PORT || 8000;

app.listen(port);

console.log(`App is listening on ${port}`);

const {
  clientId, publicKey, secret, plaidEnv,
} = plaidDetails;

const plaidClient = new plaid.Client(
  clientId,
  publicKey,
  secret,
  plaid.environments.development,
);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/exchange-token', (req, res) => {
  plaidClient.exchangePublicToken(req.body.public_token)
    .then((plaidRes) => {
      const { access_token } = plaidRes;
      console.log('ACCESS TOKEN: ', access_token);
      res.status(200).send(access_token);
    })
    .catch(() => {
      res.status(400);
    });
});

export default app;
