import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'whatsapphomescreen',
    pathMatch: 'full'
  },
  {
    path: 'whatsapphomescreen',
    loadChildren: () => import('./whatsapphomescreen/whatsapphomescreen.module').then( m => m.WhatsapphomescreenPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
