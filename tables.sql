-- 🔄 RESET DE LA BASE DE DATOS
drop database if exists eduaAt;
create database eduaAt;
use eduaAt;

create table Receptionist (
	ccReceptionist int primary key,
	nombres varchar(100) not null,
	apellidos varchar(150) not null,
	cargo varchar(100),
	celular int unsigned,
	correo varchar(100) not null,
	contraseña varchar(100) not null, 
	rol varchar(50) not null, 
	img text
);

create table Director (
	ccDirector int primary key,
	nombres varchar(100) not null,
	apellidos varchar(150) not null,
	cargo varchar(100),
	celular int unsigned,
	correo varchar(100) not null,
	contraseña varchar(100) not null, 
	rol varchar(50) not null, 
	img text
);

-- 🧳 TABLA VISITANTE
create table Visitor (
	ccVisitor int primary key,
	nombres varchar(100) not null,
	apellidos varchar(150) not null,
	cargo varchar(100),
	celular int unsigned,
	correo varchar(100) not null,
	contraseña varchar(100) not null, 
	rol varchar(50) not null, 
	img text
);

create table MemberTeam (
	ccMemberTeam int primary key,
	nombres varchar(100) not null,
	apellidos varchar(150) not null,
	cargo varchar(100),
	celular int unsigned,
	correo varchar(100) not null,
	contraseña varchar(100) not null, 
	rol varchar(50) not null, 
	img text
);

-- captura docs (Reemplaza a "Solicitudes")
create table DriveCap (
	idDriveCap int auto_increment primary key,
	fecha date not null,
    hora time,
	imgCap text,
    ccReceptionist int not null,
    foreign key (ccReceptionist) references Receptionist (ccReceptionist)
);

create table Historial (
	idHistorial int auto_increment not null,
    primary key (idHistorial),
    titulo text,
    texto varchar(100),
	idDriveCap int,
	imgCap text,
	foreign key (idDriveCap) references DriveCap (idDriveCap)
);

create table Notificaciones (
	idNotis int auto_increment not null,
    primary key (idNotis),
	idDriveCap int,
	titulo text,
    texto varchar(100),
    foreign key (idDriveCap) references DriveCap (idDriveCap)
);

select * from Receptionist;
select * from Receptionist order by ccReceptionist desc limit 1;
show tables;
select time(now()) as hora;
select date(curdate()) as fecha;
set sql_safe_updates = 1;


-- TABLAS ANTIGUAS COMENTADAS - YA NO SE USAN DEBIDO A CAMBIO DE PROYECTO 
-- Estas tablas formaban parte del diseño anterior con "Solicitudes" y "Tasks".
-- Fueron reemplazadas por el nuevo enfoque.

/*
create table Solicitudes (
	radicado int primary key,
    fecha date not null,
    hora time,
	archivoPdf text,
    ccReceptionist int not null,
    foreign key (ccReceptionist) references Receptionist (ccReceptionist)
);

create table Tasks (
	idTasks int auto_increment not null,
    primary key (idTasks),
    estado varchar (50),
    fecha date,
    hora time,
    radicado int not null,
    ccMemberTeam int,
    ccVisitor int,
    asignadoPor int not null,
    tipoAsignador enum('director', 'miembro') not null,
    foreign key (radicado) references Solicitudes (radicado),
    foreign key (ccMemberTeam) references MemberTeam(ccMemberTeam),
    foreign key (ccVisitor) references Visitor(ccVisitor)
);

create table HistorialTareasRealizadas (
    idHistorialT int auto_increment not null,
    primary key (idHistorialT),
    idTasks int not null,
    foreign key (idTasks) references Tasks (idTasks)
);

create table Notificaciones (
	idNotis int auto_increment not null,
    primary key (idNotis),
	radicado int,
	estado enum('alerta roja', 'alerta amarilla', 'alerta naranja') not null,
    foreign key (radicado) references Solicitudes (radicado)
);
*/