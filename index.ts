import Koa from 'koa';
import  router  from './routes/route.ts';
import { dbConnect } from './modules/db.ts';
import * as redis from './modules/redis.ts';
import bcrypt from "bcrypt";
import dotenv from 'dotenv';
dotenv.config();

const server = new Koa();
try{
    server.listen(process.env.SERVER_PORT,  async() => {
        console.log('Server is running on http://localhost:' + `${process.env.SERVER_PORT}`);
        await dbConnect();
        await redis.RedisConnection();
    });
}catch(error){
    console.error("Server::Exception handler:::" , `${error}`);
}

server.use(router.routes());

const saltRounds = 10;
const myPlaintextPassword = '59cC09020';
console.log(bcrypt.hashSync(myPlaintextPassword,10))