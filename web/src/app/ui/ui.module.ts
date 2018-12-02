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
import { NgxPaginationModule } from 'ngx-pagination';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const appRoutes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BasicComponent},
  { path: 'add', component: NewContactComponent},
  { path: 'about', component: TestComponent},
  { path: 'view/:id', component: PageDetailComponent},
  { path: 'update/:id', component: EditContactComponent},
  { path: '**', component: NotFoundPageComponent},
  { path: 'error404', component: NotFoundPageComponent}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [LayoutComponent, TestComponent, HeaderComponent, FooterComponent, BasicComponent, NewContactComponent, PageDetailComponent, EditContactComponent, NotFoundPageComponent],
  exports: [LayoutComponent]
})


export class UiModule { }
export const routingComponent = [PageDetailComponent];