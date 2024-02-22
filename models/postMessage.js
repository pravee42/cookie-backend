import mongoose from 'mongoose';

const PostsSchema = mongoose.Schema({
	message: String,
	sender: { type: String, default: 'user' },
	userId: String,
	threadId: String,
	createdAt: { type: Date, default: new Date() },
});

const PostMessage = mongoose.model('Threads', PostsSchema);

export default PostMessage;
