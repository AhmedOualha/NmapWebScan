import { RouterModule, Routes } from '@angular/router';

import { ResultsComponent } from './results/results.component';
import { HomeComponent } from './home/home.component';
import { ScanHostsComponent } from './scan-hosts/scan-hosts.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'results', component: ResultsComponent},
    { path: 'scanHosts', component: ScanHostsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);