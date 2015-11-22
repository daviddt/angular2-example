/// <reference path="../../typings/angular2/angular2.d.ts" />

import 'reflect-metadata';
import 'zone.js';

import { bootstrap } from 'angular2/angular2';
import { ROUTER_PROVIDERS } from 'angular2/router';

import App from './app.ts';

bootstrap(App, [ROUTER_PROVIDERS]);