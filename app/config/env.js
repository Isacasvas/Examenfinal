const env = {
  database: 'basefinal', // Nombre de la base de datos
  username: 'basefinal_user', // Nombre de usuario
  password: 'xEaWYluoSVpfA59VeI20nP1TPdwO1rAB', // Contraseña
  host: 'dpg-cslrt252ng1s73be809g-a.oregon-postgres.render.com', // Host de la base de datos
  dialect: 'postgres', // Motor de la base de datos
  dialectOptions: {
      ssl: {
          require: true, // Habilita SSL
          rejectUnauthorized: false // Permite conexiones SSL sin verificación de CA
      }
  },
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
};

module.exports = env;
