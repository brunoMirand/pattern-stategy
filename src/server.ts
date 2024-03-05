import { app } from '@/app';

const startServer = async () => {
  app.listen({
    host: '0.0.0.0',
    port: 3030,
  }).then(() => {
    console.info('HTTP Server Running',  { host: '0.0.0.0', port: 3030 });
  });
}

(async () => {
  await startServer();
})();
