import fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";


const app = fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get('/habits', async ()=>{
    return await prisma.habit.findMany();
});
app.post('/habits', async ()=>{
    await prisma.habit.create({
        data:{
            name: 'Beber 3l água'
        }
    })
});

app.listen({
    port: 3333
}).then(()=>console.log('haaaio'))