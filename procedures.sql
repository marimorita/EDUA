-- Procedimiento para registar una solicitud desde la recepcion --
DELIMITER $$
create procedure solicitudRecepcion (
	in radicado int,
    in archivoPdf text ,
    in ccReceptionist int
)
Begin
	insert into Solicitudes (radicado, archivoPdf, ccReceptionist, fecha, hora)
    values (radicado, archivoPdf, ccReceptionist, curdate(), time(now));
End$$

-- Procedimiento para siganar tareas -- 
DELIMITER $$
create procedure asignarTareas (
	in radicado int,
    in estado varchar (50), 
    in asignadoPor int,
    in tipoAsignador varchar (20),
    in ccVisitor int
)
Begin
	Declare memberAsig int;
    if tipoAsignador = 'miembro' then
		set memberAsig = asignadoPor;
    else
		set memberAsig = Null;
End if;
	insert into Tasks (estado, fecha, hora, radicado, ccMemberTeam, ccVisitor, asignadoPor, tipoAsignador)
	values (estado, curdate(), time (now()), radicado, memberAsig, ccVisitor ,asignadoPor, tipoAsignador);
END$$

-- Mover tareas al historial --
DELIMITER $$
Create procedure moverTareasHistorial (
	in PRadicado int
)
Begin
	if exists (select * from Tasks where radicado = PRadicado ) then 
	insert into HistorialTareasRealizadas (idTasks) select idTasks from Tasks where radicado = PRadicado;  
    delete from Tasks where radicado = PRadicado ;
End if;
END$$

-- Cambiar el estado de una tarea --
DELIMITER $$
Create procedure CambiarEstadoTarea (
	in p_idTasks int,
    in p_estado varchar (50)
/*Estos don los parametros de entrada, o sea los datos que se le mandan cuando se llama */
)
Begin
	update Tasks set estado = p_estado where idTasks = p_idTasks; 
END $$


DELIMITER $$
-- Crear Tarea a paratir de una solicitud --
Create procedure crearTareaDeSolicitud (
	in p_radicado int,
    in p_estado varchar (20)
)
Begin
	Declare variableccMemberTeam int;
    Declare variableccVisitor int;
    Declare variableAsigandoPor int;
	Declare variableTipoAsignador int;
    
    select ccMemberTeam, ccVisitor, asigandoPor, tipoAsignador
    into variableccMemberTeam, variableccVisitor, variableAsigandoPor, variableTipoAsignador  
    from Solicitudes  where radicado = p_radicado;
    
    insert into Tasks (estado, fecha, hora, radicado, ccMemberTeam , ccVisitor, asignadoPor, tipoAsignador) values
    (p_estado, curdate(), time(now()), p_radicado, variableccMemberTeam, variableccVisitor, variableAsignadoPor, variableTipoAsignador);
End$$
Delimiter ;

drop procedure if exists asignarTareas;