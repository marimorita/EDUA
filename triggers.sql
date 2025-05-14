-- verificar si existe una solicitud antes de ingresar la tarea --
DELIMITER $$
Create trigger solicitudTarea
before insert on Tasks 
for each row 
Begin
	if not exists (
		select 1 from Solicitudes where radicado = new.radicado
    ) then
	signal sqlstate '45000'
    set message_text = 'No existe solicitud con ese numero de radicado';
   End if;
  END$$	
  
-- Registrar fecha y hora automatico cuando se crea un solicitud --
DELIMITER $$
Create trigger fechaHoraSolocitudes
before insert on Solicitudes
for each row 
Begin 
	if new.fecha is null then
		set new.fecha = curdate();
End if;

	if new.hora is null then 
		set new.hora = time(now());
End if;
END$$

-- Tener estado por default --
DELIMITER $$
Create trigger estadoInicialTarea
before insert on Tasks
for each row
Begin
    if new.estado is null then
        set new.estado = 'sin alerta';
End if;
END$$