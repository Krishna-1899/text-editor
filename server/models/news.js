import { Schema, model } from 'mongoose';

const NewsSchema = new Schema({
  content: { type: String, required: true },
}, { timestamps: true });

export default model('News', NewsSchema);
