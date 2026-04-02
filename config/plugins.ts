export default ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('API_KEY_CLOUDINARY'),
        api_secret: env('API_SECRET_CLOUDINARY'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});