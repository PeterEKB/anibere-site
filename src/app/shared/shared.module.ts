import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './component/button/button.component';
import { CardComponent } from './component/card/card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ButtonComponent, CardComponent],
  imports: [CommonModule, RouterModule],
  exports: [ButtonComponent, CardComponent],
})
export class SharedModule {}
