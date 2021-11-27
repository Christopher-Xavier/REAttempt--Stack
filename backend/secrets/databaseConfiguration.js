module.exports = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE || 'dragonstackdb',
  password: process.env.PASSWORD,
  port: process.env.DATABASE_PORT,
  ssl: {
    rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
  },
};
