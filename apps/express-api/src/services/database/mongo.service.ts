import mongoose from 'mongoose';

const URI = `${process.env.DB_PROTOCOL}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

export async function MongoDBService() {
  await mongoose
    .connect(URI, {
      authSource: 'admin',
      auth: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      },
    })
    .then((res) => {
      console.log('✅ MongoDB connected 🔌📡🚀...');
    })
    .catch((err) => {
      console.group('❌ MongoDB connection error');
      console.log(err);
      console.groupEnd();
    });
}
