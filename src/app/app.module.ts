import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';

import { MatNativeDateModule } from '@angular/material/core';

import {FormsModule} from '@angular/forms';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import {IMaskModule} from 'angular-imask';
import {MatBadgeModule} from '@angular/material/badge';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'; 
import {CdkTableModule} from '@angular/cdk/table';
import { CdkColumnDef } from '@angular/cdk/table';

import { HttpClientModule } from '@angular/common/http';
import { OnlyNumbersDirective } from './direct/only-numbers.directive';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    MenuBarComponent,
    OnlyNumbersDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDialogModule,
    MatDatepickerModule,
    IMaskModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  providers: [
    MatDatepickerModule,
    CdkColumnDef

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
