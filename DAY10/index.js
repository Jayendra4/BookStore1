
import dbConfig from './config/dbConfig'
import router from './routes/userRoutes';
import bookRout

dotenv.config();

const express = require('express');

const app = express();

const PORT = process.env.PORT || 9000


app.use(cors({
    origin : "http://localhost:5173",
    Credential: true 
}))

const dbConfig  = require('./config/dbConfig');

const router = require('./routes/userRoutes')

app.use(express.json())

app.use("/api",router);

app.listen(PORT , ()=>{
    console.log(`server is fun on port no http://localhost:${PORT}`);
})