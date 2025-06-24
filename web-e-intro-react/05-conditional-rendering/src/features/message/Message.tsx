import './Message.css';

interface Props {
	isResponseCorrect: boolean;
}

export default function Message({ isResponseCorrect }: Props) {
	return (
		<>
			{isResponseCorrect ? <p className='correct'>Numero correcto</p> : <p className='incorrect'>Numero incorrecto</p>}
		</>
	);
}
