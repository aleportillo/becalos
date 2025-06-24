import './Restart.css';

interface Props {
	setUserNumber: React.Dispatch<React.SetStateAction<number | string>>;
	setRandomNumber: React.Dispatch<React.SetStateAction<number>>;
	setIsResponseCorrect: React.Dispatch<React.SetStateAction<boolean>>;
	setAttempts: React.Dispatch<React.SetStateAction<number>>;
	generateRandomNumber: () => number;
}

export default function Restart({
	setUserNumber,
	setRandomNumber,
	generateRandomNumber,
	setIsResponseCorrect,
	setAttempts,
}: Props) {
	const handleRestart = () => {
		setUserNumber('');
		setAttempts(0);
		setRandomNumber(generateRandomNumber());
		setIsResponseCorrect(false);
	};

	return (
		<button className='submit-button' onClick={handleRestart}>
			Reiniciar
		</button>
	);
}
