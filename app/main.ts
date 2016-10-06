import 'reflect-metadata';
require('zone.js/dist/zone');

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

import $ = require('jquery');
import bootstrap = require('bootstrap');

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);