create database eduaAt;
use eduaAt;
drop database if exists eduaAt;
drop table if exists Historial;

create table Receptionist (
	ccReceptionist int primary key,
    nombres varchar (100) not null,
	apellidos varchar (150) not null,
    cargo varchar (100),
    celular int unsigned,
    correo varchar (100) not null,
    contraseña varchar (40) not null,
    rol varchar (50) not null,
    img text
);

create table Director (
	ccDirector int primary key,
    nombres varchar (100) not null,
	apellidos varchar (150) not null,
    cargo varchar (100),
    celular int unsigned,
    correo varchar (100) not null,
    contraseña varchar (40) not null,
    rol varchar (50) not null,
    img text
);

create table Visitor (
	ccVisitor int primary key,
    nombres varchar (100) not null,
	apellidos varchar (150) not null,
    cargo varchar (100),
    celular int unsigned,
    correo varchar (100) not null,
    contraseña varchar (40) not null,
    rol varchar (50) not null,
    img text
);

create table MemberTeam (
	ccMemberTeam int primary key,
    nombres varchar (100) not null,
	apellidos varchar (150) not null,
    cargo varchar (100),
    celular int unsigned,
    correo varchar (100) not null,
    contraseña varchar (40) not null,
    rol varchar (50) not null,
    img text
);

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

create table Historial (
	idHistorial int auto_increment not null,
    primary key (idHistorial),
    titulo text,
    texto varchar(100),
	radicado int,
	foreign key (radicado) references solicitudes (radicado)
);

create table Notificaciones (
	idNotis int auto_increment not null,
    primary key (idNotis),
	radicado int,
	estado enum('alerta roja', 'alerta amarilla', 'alerta naranja') not null,
    foreign key (radicado) references Solicitudes (radicado)
);

select time (NOW()) as hora;
select date (CURDATE()) as fecha;