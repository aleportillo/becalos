import './Input.css';

interface Props {
	userNumber: number | string;
	setUserNumber: React.Dispatch<React.SetStateAction<number | string>>;
}

export default function Input({ userNumber, setUserNumber }: Props) {
	return (
		<>
			<input type='number' value={userNumber} onChange={(e) => setUserNumber(Number(e.target.value))} />
		</>
	);
}
