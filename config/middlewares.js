module.exports = ({ env }) => [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'blob:',
            'data:',
            `${env('DO_SPACE_BUCKET')}.${env('DO_SPACE_ENDPOINT')}`,
            `${env('DO_SPACE_CDN')}`,
          ],
          'media-src': [
            "'self'",
            'blob:',
            'data:',
            `${env('DO_SPACE_BUCKET')}.${env('DO_SPACE_ENDPOINT')}`,
            `${env('DO_SPACE_CDN')}`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];