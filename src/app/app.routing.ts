import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AskingComponent } from './asking/asking.component';
import { MainComponent } from './main/main.component';
import { QuestionsComponent } from './questions/questions.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const appRoutes: Routes = [
    {
        path: '',
        component: ToolbarComponent,
        children: [
            {   
                path: '',  pathMatch: 'full',
                redirectTo: '/main'
            },
            {   path: 'main', component: MainComponent },
            {   path: 'asking', component: AskingComponent },
            {   path: 'questions', component: QuestionsComponent}
        ]
    },
];

export const routing = RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules });