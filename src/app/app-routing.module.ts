import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from '../components/about/about.component'
import {HomeComponent} from '../components/home/home.component'
import { WelcomeComponent} from '../components/welcome/welcome.component'
import { FavoritesComponent } from 'src/components/favorites/favorites.component';
import { CreateCountryComponent} from '../components/create-country/create-country.component'
import { EditCountryComponent } from 'src/components/edit-country/edit-country.component';
const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // Ruta raíz redirige a '/home'
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent }, // Ruta para el componente AppComponent
  { path: 'about', component: AboutComponent }, // Ruta para el componente AboutComponent
  { path: 'favorites', component: FavoritesComponent },
  { path: 'create', component:  CreateCountryComponent },
  { path: 'edit-country/:id', component: EditCountryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }