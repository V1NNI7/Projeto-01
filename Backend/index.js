const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')
const app = express()

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth'); 
const postRouter = require('./routes/post');

app.use(bodyparser.json());
app.use(cors()); 

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/login', authRouter);
app.use('/post', postRouter);

app.listen(process.env.PORT || 4000 );
