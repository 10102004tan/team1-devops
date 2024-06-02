const express = require('express'); // npm install express
const cors = require('cors'); // npm install cors
const app = express();
const port = process.env.PORT || 3000;
const db = require('mysql2');
const dbHost = process.env.DB_HOST || 'team1';
const dbPort = process.env.DB_PORT || '3306';
const dbUser = process.env.DB_USER || 'root';
const dbPass = process.env.DB_PASS || '12345';
const dbName = process.env.DB_NAME || 'team1';

const connection = db.createConnection({
    host: dbHost,
    port: dbPort,
    user: dbUser,
    password: dbPass,
    database: dbName
  });
  
  connection.connect(function(err) {
    if (err){
      console.log(err)
    }
    else{
      console.log(`DB Connected! ${dbHost}:${dbPort}/${dbName} with User: ${dbUser}`);
    }
    
  });


const CORS_WHITELIST = [
    "http://localhost:3000",
    "http://localhost:3002",
    "http://localhost:3006",
    "http://13.236.85.112"
];

const corsOptions = {
    origin: "*", // Accept all origins => Development
    // origin: CORS_WHITELIST, // Accept origins in whitelist => Production
    // optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send({
        message: "Welcome to my API"
    });
});

app.get('/health', (req, res) => {
    res.send({
        status: "OK",
        message: "And how are you?"
    });
});

app.get('/banners', (req, res) => {
    connection.query('SELECT * FROM banners', (err, rows) => {
        if (err) throw err;
        // Mapping dữ liệu trả về từ DB table => Response model
        const banners = rows.map(row => {
            return {
                title: row.title,
                description: row.description,
                image: row.image
            };
        });
        res.send(banners);
    });
});
// Contacts route
app.get('/contacts', (req, res) => {
    connection.query('SELECT * FROM customers', (err, rows) => {
        if (err) throw err;
        // Mapping dữ liệu trả về từ DB table => Response model
        const banners = rows.map(row => {
            return {
                title: row.title,
                detail: row.detail,
                image: row.image
            };
        });
        res.send(banners);
    });
  });

app.get('/products', (req, res) => {
    connection.query('SELECT * FROM products', (err, rows) => {
        if (err) throw err;
        const products = rows.map(row => {
            return {
                id: row.id,
                name: row.name,
                price: row.price,
                description: row.description,
                image: row.image
            };
        });
        res.send(products);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});