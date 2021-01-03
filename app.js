const express = require ('express');
const stripe = require('stripe') ('sk_test_51I1bCqL98F1Du7fUePNgmIrypRfi403Ub9wwQPcl7NTeyJLgUzXwD4WXTbs4IfF3eodhy8UezpE1UlS2fLDpcMgb00eTKgzRSs');
const bodyParser = require('body-parser');
const exphbs = require ('express-handlebars');

const app = express();
//handlebars middleware
app.engine ('handlebars',exphbs ({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
//bodypartser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//set static folder
app.use(express.static(`${__dirname}/public`));
//index route
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/success', (req, res) => {
    res.render('success');
});

//charge route

app.post('/charge' , (req, res)=> {
    const amount = 730;
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
    .then(customer => stripe.charges.create({
        amount,
        description:'₱350 every successful day',
        currency:'usd',
        customer:customer.id
    }))
    .then(charge => res.render ('success'));
});

const port= process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});