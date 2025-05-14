 -- Solicitudes por recepcionista, que solicitudes ha caragdo la recepcionista -- 
Create view SolicitudesReceptionist as select 
	r.nombres,
	r.apellidos,
    s.radicado,
    s.fecha,
    s.hora,
    s.archivoPdf
from Receptionist r join Solicitudes s on r.ccReceptionist = s.ccReceptionist;

-- Tareas asiganadas por el director --
Create view TareasDirector as select 
	d.nombres as directorNombres,
    d.apellidos as directorApeliidos,
    t.radicado,
    t.fecha,
    t.hora,
    t.estado,
    t.asignadoPor,
    m.nombres as memberNombres,
    m.apellidos as memberApellidos,
    v.nombres as visitorNombres,
    v.apellidos as visitorApellidos
from Tasks t 
left join Director d on t.asignadoPor = d.ccDirector
left join MemberTeam m on t.asignadoPor = m.ccMemberTeam
join Visitor v on t.ccVisitor = v.ccVisitor;

-- Tareas asignadas por un mimebro del equipo --
Create view TareasMember as select 
	m.nombres as memberNombres,
    m.apellidos as memberApellidos,
    v.nombres as visitorNombres,
    v.apellidos as visitorApellidos,	
    t.radicado,
    t.fecha,
    t.hora,
    t.estado
from Tasks t
join MemberTeam m on t.ccMemberTeam = m.ccMemberTeam
join Visitor v on t.ccVisitor = v.ccVisitor
where tipoAsignador = 'miembro';

-- Tareas asociadas a solicitud -- 
Create view TareasSolicitud as select
	s.radicado,
    s.fecha as fechaSolicitud,
    s.hora as horaSolicitud,
    t.fecha as fechaTask,
    t.hora as horaTask,
    t.asignadoPor,
    t.estado,
    d.nombres as nombreDirector,
    d.ccDirector,
    v.ccVisitor,
    m.ccMemberTeam,
    v.nombres as nombreVisitor,
    m.nombres as nombreMember
from Tasks t
join Visitor v on t.ccVisitor = v.ccVisitor
left join Solicitudes s on t.radicado = s.radicado
left join Director d on t.asignadoPor = d.ccDirector
left join MemberTeam m on t.asignadoPor = m.ccMemberTeam;

-- Tareas asiganadas a visitantes -- 
Create view TareasVisitor as select
	v.ccVisitor,
    v.nombres,
    t.fecha,
    t.estado,
    t.tipoAsignador,
    t.radicado,
    t.asignadoPor,
    d.ccDirector,
    m.ccMemberTeam
from Tasks t 
left join Director d on t.asignadoPor = d.ccDirector
left join MemberTeam m on t.asignadoPor = m.ccMemberTeam
join Visitor v on t.ccVisitor = v.ccVisitor;

-- Tareas de cada persona --
Create View TareasPersonas as select 
	t.asignadoPor,
    t.tipoAsignador,
count(*) as cantidadTareas    
from Tasks t 
group by t.asignadoPor, t.tipoAsignador;

-- Solicitudes con estado de alerta --
Create view TareasAlerta as select 
	s.radicado,
    s.fecha as solicitudFecha,
    s.hora,
    t.estado,
    t.fecha as taskFecha,
	v.ccVisitor,
    m.ccMemberTeam 
from Tasks t
join Solicitudes s on t.radicado = s.radicado
left join Visitor v on t.ccVisitor = v.ccVisitor
left join MemberTeam m on t.ccMemberTeam = m.ccMemberTeam
where t.estado in ('rojo', 'naranja', 'amarillo');

-- Solicitudes recientes (registradas en los ultimos 7das) --
 Create view SolicitudesRecientes as select
	s.radicado,
    s.fecha,
    s.hora,
	s.archivoPdf,
    s.ccReceptionist
from Solicitudes s
where fecha >= (curdate() - interval 7 day);

-- Tareas pendientes de cads visitante, es decir en rojo, amarillo o narajan --
Create view TareasPendientesVisitor as select 
	t.estado,
    t.fecha,
    t.ccVisitor,
    t.tipoAsignador,
	t.asignadoPor
from Tasks t
where estado in ('rojo', 'amarillo', 'naranja');


-- Conteo de taras por estado --
Create view ConteoTareas as select 
estado, count(*) as cantidadTareas /*Aca se define q cantidadTareas va a ser el alias para el contador*/
from Tasks group by estado;

-- Solcitudes ordenadas de manera ascendente --
Create view SolicitudesFechaAsc as select
	s.radicado,
    s.fecha,
    s.hora,
    s.ccReceptionist
from Solicitudes s;

-- Conteo tareas actrivas para cada miembro --
Create view ContadorTareasMember as select
	t.estado,
    t.ccMemberTeam,
count(*) as cantidadTareasMember
from Tasks t 
where t.estado in ('rojo', 'amarillo','naranja')
group by t.estado, t.ccMemberTeam;
 
-- Selects --
select * from solicitudesReceptionist;
select * from TareasDirector;
select * from TareasMember;
select * from TareasSolicitud;
select * from TareasVisitor;
select * from TareasPersonas;
select * from TareasAlerta;
select * from SolicitudesRecientes;
select * from TareasPendientesVisitor;
select * from ConteoTareas;
select * from SolicitudesFechaAsc order by fecha asc;
select * from ContadorTareasMember;

drop view if exists TareasDirector;