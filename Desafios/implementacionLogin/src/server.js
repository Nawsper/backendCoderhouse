import cookieParser from 'cookie-parser'
import express from 'express'
import handlebars from 'express-handlebars'
import { __dirname } from './utils.js'
import viewsRouter from './routes/views.routes.js'
import userRouter from './routes/user.routes.js'
import './config/dbConnection.js'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import { connectionString } from './config/dbConnection.js'
import productRouter from './routes/product.routes.js'
import cartsRouter from './routes/cart.routes.js'



const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/', viewsRouter)
app.use('/users', userRouter)
app.use('/api/products', productRouter);
app.use('/api/carts', cartsRouter)


const mongoStoreOptions = {
    store: MongoStore.create({
        mongoUrl: connectionString,
    }),
    secret: '1234',
    cookie: { maxAge: 60000 },
    saveUninitialized: false,
    resave: false,
}


app.use(cookieParser())
app.use(session(mongoStoreOptions))

app.listen(8080, () => {
    console.log('Server ok on port 8080');
})