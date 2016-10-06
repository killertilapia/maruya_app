import 'reflect-metadata';
import 'jquery';
import 'bootstrap/dist/js/bootstrap'

require('zone.js/dist/zone');
require('font-awesome/css/font-awesome.css');
require('bootstrap/dist/css/bootstrap.css')

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);