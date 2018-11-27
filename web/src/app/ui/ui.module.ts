import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import {RouterModule, Routes} from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import {HttpClientModule} from '@angular/common/http';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BasicComponent},
  { path: 'add', component: NewContactComponent},
  { path: 'test', component: TestComponent}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [LayoutComponent, TestComponent, HeaderComponent, FooterComponent, BasicComponent, NewContactComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
