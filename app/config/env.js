const env = {
  database: 'basefinal',
  username: 'basefinal_user',
  password: 'xEaWYluoSVpfA59VeI20nP1TPdwO1rAB',
  host: 'dpg-cslrt252ng1s73be809g-a.oregon-postgres.render.com',
  dialect: 'postgres',
  ssl: true,
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
};

module.exports = env;
