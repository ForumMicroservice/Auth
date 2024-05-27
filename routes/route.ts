import Router from "@koa/router";
import {bodyParser} from '@koa/bodyparser';
import { createUser } from "../controllers/register";

const router : Router = new Router({
    prefix:'/api'
});

router.use(bodyParser());
 router.get('/',async (ctx)=>{
    ctx.status=200
    ctx.body="I am work ..."
 })  
router.post('/auth', async (ctx)=>{
    ctx.status = 200 
    ctx.body="auth";
})
router.post('/register',async (ctx)=>{
    ctx.status = 200 
    ctx.body = await createUser(ctx.request.body,ctx)
})
 router.delete('/logout', async (ctx,res)=>{
    ctx.status = 200 
    ctx.body=""
});

export default router;