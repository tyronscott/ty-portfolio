import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { app } from 'server';

if (environment.production) {
  enableProdMode();
}

function bootstrap() {
  platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if ('serviceWorker' in navigator && environment.production) {
    navigator.serviceWorker.register('ngsw-worker.js');
  }
}).catch(err => console.log(err));
};

// listen to PORT on localhost
// if (environment.production) {
  const port = process.env['PORT'] || 8080;
  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });


 if (document.readyState === 'complete') {
   bootstrap();
 } else {
   document.addEventListener('DOMContentLoaded', bootstrap);
 }
 
