import { useState, type FormEvent } from 'react';

interface TweetForm {
	onAddTweet: (tweet: string) => void;
}

export const TweetForm = ({ onAddTweet }: TweetForm) => {
  const [tweet, setTweet] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if (!tweet.trim()) return; 
    onAddTweet(tweet); 
    setTweet(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="my-8 d-flex flex-column gap-2 p-4 border rounded-lg shadow-md">
      <textarea
        className="input input-bordered w-full"
        placeholder="¿En qué estás pensando?"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        rows={4}
        style={{resize: 'none', height: '5rem'}}
      />
      <button type="submit" className="btn btn-primary mt-3 bg-cyan-300">
        Tweet
      </button>
    </form>
  );
};