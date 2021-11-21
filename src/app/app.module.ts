import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDateParserFormatter, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbDateFRParserFormatter } from "src/app/helper/ngbDateFRParserFormatter.service";
import { AppComponent } from './app.component';
import { DirectivesModule } from './directives/directives.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    DirectivesModule
  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
