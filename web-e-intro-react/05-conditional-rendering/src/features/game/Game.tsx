import { useEffect, useState } from 'react';
import Input from '../input/Input';
import Message from '../message/Message';
import './Game.css';
import Restart from '../restart/Restart';

export default function Game() {
	const [randomNumber, setRandomNumber] = useState(0);
	const [userNumber, setUserNumber] = useState<string | number>('');
	const [isResponseCorrect, setIsResponseCorrect] = useState(false);
	const [isShowMessage, setIsShowMessage] = useState(false);
	const [attempts, setAttempts] = useState(0);

	const generateRandomNumber = () => {
		return Math.floor(Math.random() * 100) + 1;
	};

	useEffect(() => {
		setRandomNumber(generateRandomNumber());
	}, []);

	const checkNumbers = () => {
		setAttempts((prev) => prev + 1);
		setIsShowMessage(true);
		setIsResponseCorrect(Number(userNumber) === randomNumber);
		setTimeout(() => setIsShowMessage(false), 2000);
	};

	return (
		<>
			<div className='game-container'>
				<h1> Adivina el numero </h1>
				<p> Intentos: {attempts} </p>
				<Input userNumber={userNumber} setUserNumber={setUserNumber}></Input>
				{isResponseCorrect ? (
					<Restart
						setUserNumber={setUserNumber}
						setRandomNumber={setRandomNumber}
						setIsResponseCorrect={setIsResponseCorrect}
						generateRandomNumber={generateRandomNumber}
						setAttempts={setAttempts}
					></Restart>
				) : (
					<button className='submit-button' onClick={checkNumbers}>
						Adivinar
					</button>
				)}

				{isShowMessage ? <Message isResponseCorrect={isResponseCorrect} /> : null}
			</div>
		</>
	);
}
