import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AskingComponent } from './asking/asking.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
    {
        path: '', pathMatch: 'full',
        redirectTo: '/main'
    },
    {   path: 'main', component: MainComponent },
    {   path: 'asking', component: AskingComponent },
];

export const routing = RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules });