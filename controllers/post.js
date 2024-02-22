import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
	try {
		const postMessages = await PostMessage.find();
		res.status(200).json(postMessages);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const sendMessage = async (req, res) => {
	const posts = req.body;
	try {
		const newPosts = await PostMessage.create(posts);
		res.status(201).json(newPosts);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const createThread = async (req, res) => {};
