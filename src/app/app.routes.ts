import { ListPartComponent } from './inventory/parts/list/list-part.component';
import { NewPartComponent } from './inventory/parts/new/new-part.component';
import { DetailPartComponent } from './inventory/parts/detail/detail-part.component';
import { EditPartComponent } from './inventory/parts/edit/edit-part.component';
import { HomeComponent } from './navigation/home/home.component';
import { Routes } from "@angular/router";


export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inventory', component: ListPartComponent},
    {path: 'part/:id', component: EditPartComponent},
    {path: 'partDetail/:id', component: DetailPartComponent},
    {path: 'parts-new', component: NewPartComponent}
]