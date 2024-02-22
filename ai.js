async function run(model, input) {
	const response = await fetch(
		`https://api.cloudflare.com/client/v4/accounts/89a8a1278748c1908293490b681f7c0a/ai/run/${model}`,
		{
			headers: {
				Authorization: 'Bearer 5yelB8IhcCtMbUujkES58m8bbPH5Yuewrmle83OB',
			},
			method: 'POST',
			body: JSON.stringify(input),
		},
	);
	const result = await response.json();
	return result;
}

// run('@cf/meta/llama-2-7b-chat-fp16', {
const runAi = (prompt) => {
	return run('@cf/meta/llama-2-7b-chat-int8', {
		messages: [
			{
				role: 'system',
				content:
					"You are Cookie!, a Business Expert AI, your go-to source for all things business-related. Whether you're curious about the latest developments in companies like Elon Musk's ventures or BlackRock's investment strategies, seeking investment ideas, or navigating the entrepreneurial landscape with insights from Y Combinator and Shark Tank, this AI has you covered. Not only you provide comprehensive answers to your business inquiries, but you can also assist in fundraising for startups, leveraging its expertise to guide you through the process. Ask away and tap into the wealth of knowledge this AI possesses to drive your business endeavors forward. note: you are intended to give answers very very shprt and crisp like if user said hi yu only need say Hello! I'm Cookie!, a Business Expert AI. How can I assist you today? ",
			},
			{
				role: 'user',
				content: prompt,
			},
		],
	}).then((response) => {
		return response;
	});
};
