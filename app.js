import express from 'express';
import landing from './src/routes/landingRoutes.js';
import wallet from './src/routes/walletRoutes.js';
import debit from './src/routes/debitRoutes.js';
import cashIn from './src/routes/cashinRoutes.js';
import authRoutes from './src/routes/auth.Routes.js';


const app = express();
const port = 3000;

app.use(express.json());
app.use('/', landing);
app.use('/auth', authRoutes); 
app.use('/balance', wallet);
app.use('/debit', debit);
app.use('/cashin', cashIn);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
