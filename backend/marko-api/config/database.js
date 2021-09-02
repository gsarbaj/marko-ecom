module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '139.162.143.214'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'imtaicu_marko'),
        username: env('DATABASE_USERNAME', 'imtaicu_marko'),
        password: env('DATABASE_PASSWORD', '!Genryh38312290966'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
