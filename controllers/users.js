import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Users from '../models/userModel.js';

export const signIn = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await Users.findOne({ email });
		if (!user) return res.status(404).send({ message: 'User Not Found' });

		const isPasswordMatch = await bcrypt.compare(password, user.password);

		if (!isPasswordMatch)
			return res.status(404).json({ message: 'Invalid Creds' });

		const token = jwt.sign({ email: user.email, id: user._id }, 'test', {
			expiresIn: '1h',
		});

		res.status(200).json(token);
	} catch (error) {
		res.status(500).json({ message: 'Something Went Wrong' });
	}
};
export const signUp = async (req, res) => {
	const { email, password, name } = req.body;
	try {
		const oldUser = await Users.findOne({ email });

		if (oldUser)
			return res.status(400).json({ message: 'User already exists' });

		const hashedPassword = await bcrypt.hash(password, 12);

		const result = await Users.create({
			email,
			password: hashedPassword,
			name: name,
		});

		const token = jwt.sign({ email: result.email, id: result._id }, 'test', {
			expiresIn: '1h',
		});

		res.status(201).json({ result, token });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong' });

		console.log(error);
	}
};
