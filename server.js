import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import productsRouter from './routes/products.js'
import usersRouter from './routes/users.js'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
config();

const PORT = process.env.PORT
const app = express();

app.use(cors({
    origin: 'http://localhost:8080',
    credentials:true
}))
app.use(express.json())
app.use(express.static('./views'))

app.use(cookieParser())





app.get('/products/:id', (req, res) => {
    const prodID = req.params;
    res.json(products);
  });


app.use('/users',usersRouter)
app.use('/products',productsRouter)

// const password = userPass
app.post('/users',async (req,res)=>{
    const {userPass} = req.body
    const hash = await bcrypt.hash(userPass,10)

    
    res.send({
        msg: "You have registered successfully"
     })
    
})
    app.post('/login',(req,res)=>{
    
    res.json({
        token:token,
        msg:'You have logged in'
    })
})


app.post('/users',(req,res)=>{
    const {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body
    bcrypt.hash(userPass,10, async (err,hash)=>{
        if(err) throw err
        await addUser(emailAdd,hash)
        
        res.send(await addUser(emailAdd,hash))
    })
    res.send({
       msg: "You have registered successfully"
    })
})

const auth = async (req,res,next) => { 
    const {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body
    const hashedPassword = await checkUser(username )
    bcrypt.compare(userPass,hashedPassword, (err,result)=>{
        if(err) throw err
        if(result === true){
            const {username} = req.body
        const token = jwt.sign({username:username},
        process.env.SECRET_KEY,{expiresIn:'1h'})
        res.cookie('jwt',token,{httpOnly:false})
        res.send({
            token:token,
            msg:'You are logged in'
        })
        next()
        }else{
            res.send({msg:'The username or password is incorrect'})
        }
    })
    }

    app.post('/login',auth, (req,res)=>{
        res.send({
            msg:'You are logged in'
        })
    })
    app.delete('/logout',(req,res)=>{
        res.clearCookie('jwt')
        res.send({
            msg:'logging out'
        })
    })




app.listen(PORT, ()=>{
    console.log('http://localhost:'+ PORT);
})
