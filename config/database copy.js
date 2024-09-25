    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'db-postgresql-nyc3-97006-do-user-15824417-0.k.db.ondigitalocean.com'),
          port: env.int('DATABASE_PORT', 25060),
          database: env('DATABASE_NAME', 'defaultdb'),
          user: env('DATABASE_USERNAME', 'doadmin'),
          password: env('DATABASE_PASSWORD', ''),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
          },
        },
        debug: false,
      },
    });