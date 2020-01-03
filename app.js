const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
})); 
app.use(bodyParser.json());

const {getHomePage,getJobStatusdrop,getbusinessunit,getsalesregionunit,getsalesrepunit,getcustomers,addjd,joblistingdetails,
    joblisting,updatejoblisting,getcurrentlocation,getsalutation,gethighestqual,getprofilestatus,getprofilecountry,getprofilestatebycountry,
    addprofile,profilelistingdetails,profilelisting,updateprofile,addvendor,vendorlistingdetails,vendorlisting,updatevendor} = require('./routes/index');
const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
const port = 2000;

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'HYTSP00031',
    user: 'root',
    password: 'root@123',
    database: 'jobtracker'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app

app.get('/', getHomePage);

app.get('/add', addPlayerPage);
app.get('/edit/:id', editPlayerPage);
app.get('/delete/:id', deletePlayer);
app.post('/add', addPlayer);
app.post('/edit/:id', editPlayer);
app.get('/bu', getbusinessunit);
app.get('/sales', getsalesregionunit);
app.get('/salesrep', getsalesrepunit);
app.get('/customer', getcustomers);
app.post('/jdescription', addjd);

app.get('/jobstatus', getJobStatusdrop);
app.get('/joblistingdetails', joblistingdetails);
app.get('/joblisting/:i', joblisting);
app.post('/updatejoblisting/:id',updatejoblisting);
app.post('/updateprofile/:id',updateprofile);

app.post('/addprofiles', addprofile);
app.get('/profileslistingdetails', profilelistingdetails);
app.get('/profilelisting/:i', profilelisting);

app.post('/addvendor', addvendor);
app.get('/vendorlistingdetails', vendorlistingdetails);
app.get('/vendorlisting/:i', vendorlisting);
app.post('/updatevendor/:id', updatevendor);


//profileTab lookup's
app.get('/curentlocation', getcurrentlocation);
app.get('/salutation', getsalutation);
app.get('/highestqual', gethighestqual);
app.get('/profilestatus', getprofilestatus);
app.get('/profilecountry', getprofilecountry);
app.get('/statebycountry/:profilecountry', getprofilestatebycountry);
// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});