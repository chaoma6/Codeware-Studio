import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(process.env.URI);
  } catch (error) {
    throw new Error('Connection failed!', error);
  }
};

export default connect;
