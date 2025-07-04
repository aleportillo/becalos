import { useLocation, useParams } from 'react-router-dom';

function CitaDetalle() {
	const { id } = useParams();

	const { state } = useLocation();
	const { cita } = state || {};

	return (
		<>
			<div className='card card-border border-primary bg-base-100 m-6' style={{ width: '80%', marginInline: 'auto' }}>
				<div
					style={{
						padding: '20px',
						boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
						borderRadius: '8px',
						textAlign: 'center',
					}}
				>
					<h2 className='text-2xl font-bold'>Detalles de la Cita Médica</h2>
					<p>
						<strong>Folio:</strong> {id}
					</p>
					<p>
						<strong>Paciente:</strong> {cita.paciente.nombre} 🧑‍⚕️
					</p>
					<p>
						<strong>Teléfono:</strong> {cita.paciente.telefono} 📞
					</p>
					<p>
						<strong>Médico:</strong> {cita.medico.nombre} 👨‍⚕️
					</p>
					<p>
						<strong>Especialidad:</strong> {cita.medico.especialidad} 🏥
					</p>
					<p>
						<strong>Fecha:</strong> {cita.fecha_y_hora.fecha} 📅
					</p>
					<p>
						<strong>Hora:</strong> {cita.fecha_y_hora.hora} ⏰
					</p>
					<p>
						<strong>Estado:</strong> {cita.estado} ✅
					</p>
				</div>
			</div>
		</>
	);
}

export default CitaDetalle;
