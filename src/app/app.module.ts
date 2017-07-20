import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { ListComponent } from './containers/list/list.component';
import { DetailsComponent } from './containers/details/details.component';

export const router: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'details', component: DetailsComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    RouterModule.forRoot(router),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
