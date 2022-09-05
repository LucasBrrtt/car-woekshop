import { InventoryComponent } from './inventory/inventory.component';
import { HomeComponent } from './navigation/home/home.component';
import { Routes } from "@angular/router";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inventory', component: InventoryComponent}
]