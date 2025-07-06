import { useEffect, useState } from 'react';

interface ProfileProps {
	username: string;
}

function Profile({ username }: ProfileProps) {
	const [tweetsCount, setTweetsCount] = useState<number | string>('');
	const [likesCount, setLikesCount] = useState<number | string>('');

	// Cargar los datos desde localStorage
	useEffect(() => {
		const timeline = JSON.parse(localStorage.getItem('timeline') || '[]');
		const likes = JSON.parse(localStorage.getItem('userLikes') || '[]');

		const userPosts = timeline.filter((t: { user: string }) => t.user === username);
		setTweetsCount(userPosts.length);
		setLikesCount(likes.length);
	}, [username]);

	return (
		<>
			<div className='my-10 p-10 max-w-xs mx-auto bg-base-200 rounded-xl shadow-lg overflow-hidden'>
				<div className='relative'>
					<div className='flex items-center justify-center w-24 h-24 mx-auto bg-gray-300 rounded-full'>
                        <i className='text-accent fa-solid fa-user fa-2x'></i>
					</div>
				</div>

				<div className='px-6 py-4 text-center'>
					<h2 className='text-2xl font-semibold text-accent'>{username}</h2>
					<p className='text-gray-500 text-sm'>@{username}</p>
                    <p className="mt-2 text-gray-600 text-sm">
                        Aprendiendo react c:
                    </p>
					<p className='mt-2 text-gray-600'>Tweets: {tweetsCount}</p>
					<p className='text-gray-600'>Likes: {likesCount}</p>
				</div>
			</div>
		</>
	);
}

export default Profile;
