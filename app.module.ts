import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
@NgModule({
  imports: [BrowserModule,FormsModule],
  declarations: [AppComponent,ProductListComponent,ConvertToSpacesPipe,StarComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
