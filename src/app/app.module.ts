import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedIconsModule } from './shared-icons.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavigationBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
