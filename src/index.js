import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbUri = process.env.MONGO_CONNECTION_STRING; 

if (!dbUri) {
    console.error('Mongo URI is not defined!');
    process.exit(1); 
}

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);                                            
    });
