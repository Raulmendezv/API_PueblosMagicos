// Admin.js
/* Clase que representa un Administrador */

class Admin {
    constructor(adminID, adminUserName, adminEmail, adminPassword) {
        this.adminID = adminID;
        
        this.adminUserName = adminUserName;
        this.adminEmail = adminEmail;
        this.adminPassword = adminPassword;
    }
}

module.exports = Admin;
