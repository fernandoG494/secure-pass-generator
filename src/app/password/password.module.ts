import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [PasswordComponent],
  imports: [FormsModule, CommonModule],
})
export class PasswordModule {}
