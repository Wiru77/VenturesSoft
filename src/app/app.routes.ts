import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MarcaComponent } from './components/marca/marca.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [{ path: '', component: MainComponent }];
