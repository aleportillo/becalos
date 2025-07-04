import { Link } from 'react-router-dom';

const citasData = [
	{
		cita_id: 12345,
		paciente: {
			nombre: 'María López',
			telefono: '+34 612 345 678',
		},
		medico: {
			nombre: 'Dr. Juan Martínez',
			especialidad: 'Pediatría',
		},
		fecha_y_hora: {
			fecha: '2025-07-10',
			hora: '09:00 AM',
		},
		estado: 'Confirmada',
	},
	{
		cita_id: 12346,
		paciente: {
			nombre: 'Carlos García',
			telefono: '+34 612 345 679',
		},
		medico: {
			nombre: 'Dra. Ana Torres',
			especialidad: 'Dermatología',
		},
		fecha_y_hora: {
			fecha: '2025-07-10',
			hora: '10:30 AM',
		},
		estado: 'Pendiente',
	},
	{
		cita_id: 12347,
		paciente: {
			nombre: 'Lucía Martínez',
			telefono: '+34 612 345 680',
		},
		medico: {
			nombre: 'Dr. Carlos Sánchez',
			especialidad: 'Oftalmología',
		},
		fecha_y_hora: {
			fecha: '2025-07-11',
			hora: '11:00 AM',
		},
		estado: 'Confirmada',
	},
	{
		cita_id: 12348,
		paciente: {
			nombre: 'Pedro Fernández',
			telefono: '+34 612 345 681',
		},
		medico: {
			nombre: 'Dra. Marta Ruiz',
			especialidad: 'Ginecología',
		},
		fecha_y_hora: {
			fecha: '2025-07-11',
			hora: '02:00 PM',
		},
		estado: 'Cancelada',
	},
	{
		cita_id: 12349,
		paciente: {
			nombre: 'Ana Pérez',
			telefono: '+34 612 345 682',
		},
		medico: {
			nombre: 'Dr. Luis Herrera',
			especialidad: 'Neurología',
		},
		fecha_y_hora: {
			fecha: '2025-07-12',
			hora: '03:00 PM',
		},
		estado: 'Confirmada',
	},
	{
		cita_id: 12350,
		paciente: {
			nombre: 'Raúl Díaz',
			telefono: '+34 612 345 683',
		},
		medico: {
			nombre: 'Dra. Sofía González',
			especialidad: 'Endocrinología',
		},
		fecha_y_hora: {
			fecha: '2025-07-12',
			hora: '04:30 PM',
		},
		estado: 'Pendiente',
	},
	{
		cita_id: 12351,
		paciente: {
			nombre: 'Carlos Martínez',
			telefono: '+34 612 345 684',
		},
		medico: {
			nombre: 'Dr. Alfredo López',
			especialidad: 'Cardiología',
		},
		fecha_y_hora: {
			fecha: '2025-07-13',
			hora: '08:30 AM',
		},
		estado: 'Confirmada',
	},
	{
		cita_id: 12352,
		paciente: {
			nombre: 'Eva Sánchez',
			telefono: '+34 612 345 685',
		},
		medico: {
			nombre: 'Dr. Guillermo Álvarez',
			especialidad: 'Otorinolaringología',
		},
		fecha_y_hora: {
			fecha: '2025-07-13',
			hora: '10:00 AM',
		},
		estado: 'Cancelada',
	},
	{
		cita_id: 12353,
		paciente: {
			nombre: 'Tomás Ruiz',
			telefono: '+34 612 345 686',
		},
		medico: {
			nombre: 'Dra. Clara Martínez',
			especialidad: 'Traumatología',
		},
		fecha_y_hora: {
			fecha: '2025-07-14',
			hora: '12:30 PM',
		},
		estado: 'Confirmada',
	},
	{
		cita_id: 12354,
		paciente: {
			nombre: 'Isabel Romero',
			telefono: '+34 612 345 687',
		},
		medico: {
			nombre: 'Dr. Manuel Pérez',
			especialidad: 'Gastroenterología',
		},
		fecha_y_hora: {
			fecha: '2025-07-14',
			hora: '01:30 PM',
		},
		estado: 'Pendiente',
	},
];

function Citas() {
	return (
		<>
			<div className='class-list'>
				{citasData.map((cita) => (
					<div className='card card-border border-primary bg-base-100 w-96' style={{ height: '12rem' }}>
						<div className='card-body'>
							<h2 className='card-title'> {cita.paciente.nombre} </h2>
							<p>
								<strong>Teléfono:</strong> {cita.paciente.telefono}
							</p>
							<div className='badge badge-soft badge-accent'>{cita.medico.especialidad}</div>
							<div className='card-actions justify-end'>
								<Link to={`/cita/${cita.cita_id}`} state={{ cita: cita }} className='btn btn-secondary'>
									Ver detalles
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default Citas;
