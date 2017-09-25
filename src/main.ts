import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//引导根模块，用于启动
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
