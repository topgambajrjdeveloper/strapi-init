module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 4000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'c7fcbeade6690cfa3b0ee326b5e5ce2f'),
    },
  },
});
