import { ListPartComponent } from './inventory/parts/list/list-part.component';
import { EquipmentDetailComponent } from './equipment-detail/equipment-detail.component';
import { NewPartComponent } from './inventory/parts/new/new-part.component';
import { HomeComponent } from './navigation/home/home.component';
import { Routes } from "@angular/router";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inventory', component: ListPartComponent},
    {path: 'inventory/:id', component: EquipmentDetailComponent},
    {path: 'parts-new', component: NewPartComponent}
]