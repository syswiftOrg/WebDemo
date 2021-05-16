import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import {currentUserRouter} from './routes/currentUser';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());
//routes
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res) => {  //request not found
    throw new NotFoundError();
});

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}!`);
})