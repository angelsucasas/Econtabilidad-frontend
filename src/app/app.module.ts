import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './service/header/header.component';
import { FooterComponent } from './service/footer/footer.component';
import { TestManagerComponent } from './service/test-manager/test-manager.component';
import { TestListComponent } from './service/test-manager/test-list/test-list.component';
import { TestComponent } from './service/test/test.component';
import { FrontPageComponent } from './front-page/front-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestManagerComponent,
    TestListComponent,
    TestComponent,
    FrontPageComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
