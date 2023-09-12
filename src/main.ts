import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { RandomQuoteComponent } from './app/random-quote/random-quote.component';
import { Quote } from './app/api-service/quote.class';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
