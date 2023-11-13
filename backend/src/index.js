// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from './db';


dotenv.config({path: "./env"})
connectDB();









// import express from 'express'

// const app = express();


// //effies 
// ;( async () => {
//     try{
//         await mongoose.connect(`${process.env.DB_URL}/${DB_Name}`)
//         app.on("error", (error) => {
//             console.log("application cannot able to talk to database", error);
//             throw error;
//         });


//         app.listen(process.env.PORT, ()=> {
//             console.log(`app is running on port ${process.env.PORT}`);
//         })

//     } catch(error) {
//         console.log("ERROR: ", error)
//         throw err;
//     }
// })()