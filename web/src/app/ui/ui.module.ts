import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import {RouterModule, Routes} from '@angular/router';
import { BasicComponent } from './basic/basic.component';

const appRoutes : Routes = [
  { path: '', component: BasicComponent},
  { path: 'test', component: TestComponent}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [LayoutComponent, TestComponent, HeaderComponent, FooterComponent, BasicComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
