import { useEffect, useState } from 'react';

interface TweetProps {
	tweet: {
		id: number;
		message: string;
		likes: number;
		user: string;
	};
	onLike: (id: number, totalLikes: number) => void;
}

const TweetCard = ({ tweet, onLike }: TweetProps) => {
	const [likes, setLikes] = useState(tweet.likes);
	const [userLikes, setUserLikes] = useState<number[]>(() => JSON.parse(localStorage.getItem('userLikes') || '[]'));

	useEffect(() => {
		localStorage.setItem('userLikes', JSON.stringify(userLikes));
	}, [userLikes]);

	const handleLike = () => {
		const userHasLiked = userLikes.includes(tweet.id);

		let newLikes = likes;
		if (userHasLiked) {
			newLikes -= 1;

			setUserLikes(userLikes.filter((id) => id !== tweet.id));
		} else {
			newLikes += 1;

			setUserLikes((prevLikes) => [tweet.id, ...prevLikes]);
		}

		setLikes(newLikes);

		onLike(tweet.id, newLikes);
	};

	return (
		<div className='bg-base-200 p-4 rounded-lg shadow-lg my-4 mx-auto'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center space-x-2'>
					<div className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-300'>
						<i className='text-accent fa-solid fa-user'></i>
					</div>
					<span className='font-bold'>{tweet.user || 'Anonymous'}</span>
				</div>
				<span className='text-sm text-gray-500'>{new Date(tweet.id).toLocaleString()}</span>
			</div>

			<div className='mt-3'>
				<p>{tweet.message}</p>
			</div>

			<div className='flex justify-end'>
				<button
					onClick={handleLike}
					className='mt-4 btn btn-soft btn-secondary text-white px-4 py-2 rounded-md transition-all'
				>
					{userLikes.includes(tweet.id) ? (
						<i className='fa-solid fa-heart'></i>
					) : (
						<i className='fa-regular fa-heart'></i>
					)}{' '}
					{likes}
				</button>
			</div>
		</div>
	);
};

export default TweetCard;
