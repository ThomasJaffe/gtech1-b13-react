module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '59c7492a2d61d322b173435842b15ebe'),
  },
});
