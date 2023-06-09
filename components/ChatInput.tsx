'use client';

import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import React, { FormEvent, useState } from 'react';

type Props = {
	chatId: string;
};
function ChatInput({ chatId }: Props) {
	const [prompt, setPrompt] = useState('');
	const { data: session } = useSession();
	const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!prompt) return;

		const input = prompt.trim();
		setPrompt('');
	};
	return (
		<div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm '>
			<form onSubmit={sendMessage} className='p-5 space-x-5 flex'>
				<input
					className='focus: outline-none bg-transparent flex-1 disabled: cursor-not-allowed disabled:text-gray-300'
					disabled={!session}
					onChange={(e) => setPrompt(e.target.value)}
					value={prompt}
					type='text'
					placeholder='Type your message here'
				/>
				<button
					className='bg-[#11A37F] hover: opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed'
					disabled={!prompt || !session}
					type='submit'
				>
					<PaperAirplaneIcon className='h-4 w-4 -rotate-45' />
				</button>
			</form>
			<div>{/* ModelSelection */}</div>
		</div>
	);
}

export default ChatInput;
