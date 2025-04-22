-- Insertar datos en la tabla Receptionist ---
insert into Receptionist (ccReceptionist, nombres, apellidos, celular, correo, contraseña, rol, cargo, img) 
values (1092386439, "Mariana", "Vergara Lopez", 3107546893, "maraianaV@gmail.com", "Pepe123#", "Recepcionista", "Comunicación social", 89643219);
insert into Receptionist (ccReceptionist, nombres, apellidos, celular, correo, contraseña, rol, cargo, img) 
values (419111543, "Amalia", "Gomez Ordoñez", 3114235870, "amaliaO@gmail.com", "aMor#543", "Recepcionista", "Secretaria", 89643219);

-- Insertar datos en la tabla Director --  
insert into Director (ccDirector, nombres, apellidos, celular, correo, contraseña, rol, cargo, img) 
values (41911177, "Jorge Ivan", "Orzco Torres", 3219393229, "tecnica@edua.gov.co", "miauU890$", "Director area tecnica", "Arquitecto", "http://hola.png");

-- Insertar datos en la tabla MemberTeam --   
insert into MemberTeam (ccMemberTeam, nombres, apellidos, cargo, celular, correo, contraseña, rol, img) 
values (419234561, "Jose Manuel", "Gutierrez Grajales",  "Ingeniero Civil", 3548759612, "ingeniero@edua.gov.co", "guTo092!", "miembro del equipo", "http://gutoImg.jpg");
insert into MemberTeam (ccMemberTeam, nombres, apellidos, cargo, celular, correo, contraseña, rol, img) 
values (1092455888, "Carlos", "Arbelaez Graja", "Ingeniero Civil", 3226328918,"carlosarbelaez@gmail.com", "CarlozA#54", "miembro del equipo", "http://CarlosAImg.png");
insert into MemberTeam (ccMemberTeam, nombres, apellidos, cargo, celular, correo, contraseña, rol, img) 
values (109245781, "Esteban", "Fino Muñoz", "Arquitecto", 3116111854, "arquifino@gmail.com", "Toby149.", "miembro del equipo", "http://FinoE.jpg");

-- Insertar datos en la tabla Visitor --
insert into Visitor (ccVisitor, nombres, apellidos, cargo, celular, correo, contraseña, rol, img) 
values (418752069, "Diego German", "Hernandez Flor", "Constructor", 3015487291, "ingeniero@gmail.com", "DiegoE.456", "Visitor", "http://dieguito.jpg");

-- Insertar datos en la tabla Solicitudes -- 
insert into Solicitudes (radicado, fecha, hora, archivoPdf, ccReceptionist) 
values (098, date (CURDATE()), time (NOW()), "gutoO.pdf", 1092386439);
insert into Solicitudes (radicado, fecha, hora, archivoPdf, ccReceptionist)
values (145, date (CURDATE()), time (NOW()), "soliN°1.pdf", 419111543);
insert into Solicitudes (radicado, fecha, hora, archivoPdf, ccReceptionist)
values (243, date (CURDATE()), time (NOW()), "sol5422.bhegdyhwe.pdf", 419111543);

-- Insertar datos en la tabla Tasks -- 
insert into Tasks (estado, fecha, hora, radicado, ccMemberTeam , ccVisitor, asignadoPor, tipoAsignador)
values ("rojo", date (CURDATE()), time (NOW()), 098, 109245781, 418752069, 419234561, 'director');
insert into Tasks (estado, fecha, hora, radicado, ccMemberTeam , ccVisitor, asignadoPor, tipoAsignador)
values ("naranja", date (CURDATE()), time (NOW()), 145, 1092455888, 418752069, 41911177,'miembro' );
insert into Tasks (estado, fecha, hora, radicado, ccMemberTeam , ccVisitor, asignadoPor, tipoAsignador)
values ("amarillo", date (CURDATE()), time (NOW()), 243, 419234561, 418752069, 109245781, 'director');

-- Insertar datos en la tabla Historial --  
insert into Historial (titulo, texto, radicado) 
values ("Faltan un día para que se cumpla el plazo de la solicitud N°1864 y no se ha dado respuesta", "La  persona encargada de la recepción ha cargado una solicitud el día 12/02/2025", 098);
insert into Historial (titulo, texto, radicado) 
values ("Se ha ingresado una solicitud nueva N°1234", "La persona encargada de la recepción ha cargado una solicitud el día 12/02/2025", 145);
insert into Historial (titulo, texto, radicado) 
values ("Faltan cinco días para que se cumpla el plazo de la solicitud N°1256 y no se ha dado respuesta", "La persona encargada de la recepción ha cargado una solicitud el día 12/02/2025", 243);

-- Insertar datos en la tabla Notificaciones --  
insert into Notificaciones (estado, radicado) values ('alerta roja', 098);
insert into Notificaciones (estado, radicado) values ('alerta amarilla', 145);
insert into Notificaciones (estado, radicado) values ('alerta naranja', 243);

-- Permisos --
set sql_safe_updates = 0;
delete from Tasks;
set sql_safe_updates = 1;