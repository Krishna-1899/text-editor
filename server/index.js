import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import newsRoutes from './routes/newsRoutes.js';

const app = express();

connect('mongodb+srv://rajeshbhanushali189:d6N8A9GCE7ygyo7B@cluster0.goqlgsx.mongodb.net/SocialEcho', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(json());
app.use('/api/news', newsRoutes);

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});