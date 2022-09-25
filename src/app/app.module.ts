import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PlatesCatalogComponent } from './plates-catalog/plates-catalog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'primeng/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HammerModule } from '../../node_modules/@angular/platform-browser';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SlidesComponent } from './slides/slides.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    PlatesCatalogComponent,
    SlidesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    NgMultiSelectDropDownModule,
    InfiniteScrollModule,
    DropDownListModule,
    BrowserAnimationsModule,
    SliderModule,
    MatSlideToggleModule,
    HammerModule,
    InputSwitchModule,
    NgxBootstrapIconsModule.pick(allIcons),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
