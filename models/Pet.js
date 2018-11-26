import mongoose from 'mongoose';

export const Pet = mongoose.model('Pet', { 
    name: String,
    type: String 
  });