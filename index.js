import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import cors from 'cors';
import postRoutes from './routes/post.js';
import userRoutes from './routes/users.js';

const app = express();

const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/chats', postRoutes);
app.use('/users', userRoutes);

// const CONNECTION_URL =
// 	'mongodb+srv://abipravi:Abipravi1.@nodecluster.icd2bce.mongodb.net/?retryWrites=true&w=majority';
const CONNECTION_URL =
	'mongodb+srv://abipravi:kQXFjGWP9mu8r4jK@data.fl6eysl.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		server.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
	})
	.catch((error) => {
		console.log(error.message);
	});
