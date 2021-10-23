module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3030),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1d3b7b18d5cee0175b2d8bfcb1d2f2e1'),
    },
  },
});
