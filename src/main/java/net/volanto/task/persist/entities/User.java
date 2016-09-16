package net.volanto.task.persist.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedNativeQuery;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name="users")
/*@SecondaryTable(name = "permissiondefinition", pkJoinColumns=@PrimaryKeyJoinColumn(name="permissiondefinitionid", referencedColumnName="permissiondefinitionid"))*/
@SecondaryTable(name = "permissiondefinition", pkJoinColumns = @PrimaryKeyJoinColumn(name = "permissiondefinitionid"), uniqueConstraints = { @UniqueConstraint(columnNames = "permissiondefinitionid") })
public class User {
	
		@Id
		@Column(name="userdid")
		private int userId;
		
		@Column(name="name")
		private String name;
		
		@Column(name="secondname")
		private String secondName;
		
		@Column(name="login")
		private String login;
		
		
		@Column(name="password")
		private String password;
		
		@Column(name="permissiondefinitionid")
		private int permissionDefinitionId;
		
		/*table="permissiondefinition", name="name"*/
	    @Column(name = "name", table = "permissiondefinition")
	    private String permissionName;


		public int getUserId() {
			return userId;
		}


		public void setUserId(int userId) {
			this.userId = userId;
		}


		public String getName() {
			return name;
		}


		public void setName(String name) {
			this.name = name;
		}


		public String getSecondName() {
			return secondName;
		}


		public void setSecondName(String secondName) {
			this.secondName = secondName;
		}


		public String getLogin() {
			return login;
		}


		public void setLogin(String login) {
			this.login = login;
		}


		public String getPassword() {
			return password;
		}


		public void setPassword(String password) {
			this.password = password;
		}


		public int getPermissionDefinitionId() {
			return permissionDefinitionId;
		}


		public void setPermissionDefinitionId(int permissionDefinitionId) {
			this.permissionDefinitionId = permissionDefinitionId;
		}


		public String getPermissionName() {
			return permissionName;
		}


		public void setPermissionName(String permissionName) {
			this.permissionName = permissionName;
		} 

		
}
