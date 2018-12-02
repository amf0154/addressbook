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
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { GrdFilterPipe } from './grd-filter.pipe';
import {enableProdMode} from '@angular/core';

enableProdMode();

const appRoutes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BasicComponent},
  { path: 'add', component: NewContactComponent},
  { path: 'about', component: TestComponent},
  { path: 'view/:id', component: PageDetailComponent},
  { path: 'update/:id', component: EditContactComponent},
  { path: 'error404', component: NotFoundPageComponent},
  { path: 'search/:word', component: SearchComponent},
  { path: '**', component: NotFoundPageComponent}
  ];

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,     
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [LayoutComponent, TestComponent, HeaderComponent, FooterComponent, BasicComponent, NewContactComponent, PageDetailComponent, EditContactComponent, NotFoundPageComponent, SearchComponent, GrdFilterPipe],
  exports: [LayoutComponent]
})


export class UiModule { }
export const routingComponent = [PageDetailComponent,SearchComponent];