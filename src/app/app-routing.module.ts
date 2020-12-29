import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { LayoutComponent } from './layout/layout.component';




export const routes: Routes = [
  
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', 
        component: LayoutComponent, 
        pathMatch: 'full',
        data: { pageTitle: 'Home'} 
      },
      { 
        path: 'button', 
        component: ButtonComponent,  
        data: { breadcrumb: 'Button'} }
        ]
      },
      
    ];
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }
    