import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordComponent } from './password/password/password.component';

const routes: Routes = [
  {
    path: 'password-generator',
    component: PasswordComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'password-generator',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
