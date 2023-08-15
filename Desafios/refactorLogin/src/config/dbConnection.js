import mongoose from 'mongoose';

export const connectionString = "mongodb://127.0.0.1:27017/implementacionLogin";

try {
    await mongoose.connect(connectionString);
    console.log('Connected to MongoDB database');
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
}