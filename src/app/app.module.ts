import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { reducer } from "./state/reducer";
import { initialState } from "./state/state";
import { TasksEffectsService } from "./state/tasks/effects";
import { TasksStateService } from "./state/tasks/state-service";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { LayoutComponent } from "./containers/layout/layout.component";
import { ListComponent } from "./containers/list/list.component";
import { DetailsComponent } from "./containers/details/details.component";
import { TaskProxyService } from "./model/task.proxy";
import { GridComponent } from "./components/grid/grid.component";

export const router: Routes = [
  { path: "list", component: ListComponent },
  { path: ":id", component: DetailsComponent },
  { path: "new", component: DetailsComponent },
  { path: "", redirectTo: "list", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    ListComponent,
    DetailsComponent,
    GridComponent
  ],
  imports: [
    RouterModule.forRoot(router),
    StoreModule.provideStore(reducer, initialState),
    EffectsModule.run(TasksEffectsService),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TaskProxyService,
    TasksStateService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
