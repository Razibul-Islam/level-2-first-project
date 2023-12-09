import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoute } from './app/modules/student/student.route';
const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());

// applications route
app.use('/api/v1/students', studentRoute);

app.get('/', (req: Request, res: Response) => {
  const a = 'Hello World!';

  res.send(a);
});

// console.log(process.cwd());
export default app;
