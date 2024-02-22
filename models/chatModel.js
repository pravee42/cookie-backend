import mongoose from 'mongoose';

const ThreadsSchema = mongoose.Schema({
	threadId: String,
	userId: String,
	createdAt: { type: Date, default: new Date() },
});

const Threads = mongoose.model('Chats', ThreadsSchema);

export default Threads;
