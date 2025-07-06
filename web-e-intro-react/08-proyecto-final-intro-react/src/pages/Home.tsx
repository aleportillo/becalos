import { useEffect, useState } from 'react';
import { TweetForm } from '../components/TweetForm';
import TweetCard from '../components/TweetCard';

function Home({username}: {username: string}) {
	const [timeline, setTimeline] = useState<{ id: number; message: string; likes: number; user: string }[]>(() =>
		JSON.parse(localStorage.getItem('timeline') || '[]'),
	);

	useEffect(() => {
		localStorage.setItem('timeline', JSON.stringify(timeline));
	}, [timeline]);

	const addTweet = (message: string) => {
		const newTweet = {
			id: Date.now(),
			message,
			likes: 0,
			user: username,
		};
		setTimeline((prevTimeline) => [newTweet, ...prevTimeline]);
	};

	const likeTweet = (id: number, totalLikes: number) => {
        console.log(id, totalLikes);
		setTimeline(timeline.map((tweet) => (tweet.id === id ? { ...tweet, likes: totalLikes } : tweet)));
	};

	return (
		<>
			<div className=' w-[80%]' style={{ marginInline: 'auto', maxWidth: '40rem' }}>
				<TweetForm onAddTweet={addTweet} />
				{timeline.map((tweet) => (
					<TweetCard key={tweet.id} tweet={tweet} onLike={likeTweet} />
				))}
			</div>
		</>
	);
}

export default Home;
