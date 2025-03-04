import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { BlogComponent } from './blog/blog.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Workshops', component: WorkshopsComponent},
    { path: 'blog', component: BlogComponent}
];
