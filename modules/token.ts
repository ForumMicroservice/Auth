import jwt  from 'jsonwebtoken'; 
import dotenv, { decrypt } from 'dotenv';
dotenv.config();

const encrypt = async (user: any) => {
    const token = await jwt.sign({ data: user }, `${process.env.JWT_SECRET}`, {
          audience: "Forum authorization",
          issuer: "Forum Teams",
          expiresIn: '30d'});
    return token;
}

const decode = async (keyString:string , token: string) => {
    const decoded = await jwt.verify(token,`${process.env.JWT_SECRET}`);
    return decoded;
}

export async function token(operation:string , keyString:string, data:any) : Promise<any>
{
    if (!process.env.JWT_SECRET) {
        switch(operation)
        {
            case "encrypt" : return await encrypt(data); break;
            case "decrypt" : return typeof(data) == "string" ? await decrypt(keyString,data) : "Token module :: Token must be string "; break;
            default: 
              return "Token module :: Unknown operation"; 
            break; 
        }
    }else{
        throw new Error('Token module::JWT_SECRET environment variable is not set');
    } 
}