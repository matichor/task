Beck-end:SPRING MVC 4 + JPA2.1 + Thymeleaf + MySQL
Frond-end:AngularJS

1. Został wykonany proces logowania z wykrzystaniemi bazy danych MySQL (DataSource).
2. Zostało założone security wraz z rolami na określone requesty.
3. Została wykonana lista użytkowników z możliwością małej modyfikacji.

Nie wykonano pozostałych zadań

Struktura bazy danych:

INSERT INTO `task`.`users`
(`UserdId`,
`Name`,
`SecondName`,
`Login`,
`Password`,
`PermissionDefinitionId`,
`Enabled`)
VALUES
(<{UserdId: }>,
<{Name: }>,
<{SecondName: }>,
<{Login: }>,
<{Password: }>,
<{PermissionDefinitionId: }>,
<{Enabled: }>);


INSERT INTO `task`.`permissiondefinition`
(`PermissionDefinitionId`,
`Name`,
`Description`)
VALUES
(<{PermissionDefinitionId: }>,
<{Name: }>,
<{Description: }>);


insert into users(userdid, name, secondname, login, passwordcustomercustomer)
	select 
			1,
            'Mateusz',
            'Karwacki',
            'mkarwacki',
            'mkarwacki'



insert into users(userdid, name, secondname, login, passwordcustomercustomer)
	select 
			2,
            'Jan',
            'Kowalski',
            'jkowalski',
            'jkowalski'
			
			
insert into permissiondefinition(permissiondefinitionid, name, description)
	select 
			1,
            'User',
            'Uprawnienia użytkownika'
			
			
insert into permissiondefinition(permissiondefinitionid, name, description)
	select 
			2,
            'Admin',
            'Uprawnienia admina'
			
			
