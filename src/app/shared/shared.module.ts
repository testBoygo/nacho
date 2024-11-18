import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { FormatDatePipe } from './pipes/format-date.pipe';



@NgModule({
  declarations: [
    ButtonComponent,
    AutofocusDirective,
    FormatDatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
