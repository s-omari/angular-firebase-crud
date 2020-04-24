// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
// // import { MdePopoverModule } from '@material-extended/mde';

// import {


//   MatIconRegistry,
//   MAT_CHIPS_DEFAULT_OPTIONS,
// MatTreeModule,
//   MatToolbarModule,
//   MatSidenavModule,
//   MatButtonModule,
//   MatButtonToggleModule,
//   MatFormFieldModule,
//   MatIconModule,
//   MatInputModule,
//   MatCardModule,
//   MatCheckboxModule,
//   MatTableModule,
//   MatPaginatorModule,
//   MatSortModule,
//   MatSlideToggleModule,
//   MatListModule,
//   MatProgressSpinnerModule,
//   MatSelectModule,
//   MatNativeDateModule,
//   MatMenuModule,
//   MatProgressBarModule,
//   MatChipsModule,
//   MatBadgeModule,
//   MatTooltipModule,
//   MatTabsModule,
//   MatAutocompleteModule,
//   MatDatepickerModule,
//   MatBottomSheetModule,
//   MatSliderModule,
//   MatSnackBarModule,
//   MatDialogModule,
// MatExpansionModule,
// MatRadioModule

// } from '@angular/material';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,ReactiveFormsModule,
//     //   MdePopoverModule,
// MatTreeModule,
//     MatToolbarModule,
//     MatSidenavModule,
//     MatButtonModule,
//     MatButtonToggleModule,
//     MatFormFieldModule,
//     MatIconModule,
//     MatInputModule,
//     MatCardModule,
//     MatCheckboxModule,
//     MatTableModule,
//     MatPaginatorModule,
//     MatSortModule,
//     MatSlideToggleModule,
//     MatListModule,
//     MatProgressSpinnerModule,
//     MatSelectModule,
//     MatNativeDateModule,
//     MatMenuModule,
//     MatProgressBarModule,
//     MatChipsModule,
//     MatBadgeModule,
//     MatTooltipModule,
//     MatTabsModule,
//     MatAutocompleteModule,
//     MatDatepickerModule,
//     MatBottomSheetModule,
//     MatSliderModule,

//     MatSnackBarModule,
//     MatDialogModule,
// MatExpansionModule,
// MatRadioModule  

//   ],
//   exports: [
//     //  MdePopoverModule,
//     MatTreeModule,FormsModule,ReactiveFormsModule,
//     MatToolbarModule,
//     MatSidenavModule,
//     MatButtonModule,
//     MatCheckboxModule,
//     MatButtonToggleModule,
//     MatFormFieldModule,
//     MatIconModule,
//     MatInputModule,
//     MatCardModule,
//     MatTableModule,
//     MatPaginatorModule,
//     MatSortModule,
//     MatSlideToggleModule,
//     MatListModule,
//     MatProgressSpinnerModule,
//     MatSelectModule,
//     MatNativeDateModule,
//     MatMenuModule,
//     MatProgressBarModule,
//     MatChipsModule,
//     MatBadgeModule,
//     MatTooltipModule,
//     MatTabsModule,
//     MatAutocompleteModule,
//     MatDatepickerModule,
//     MatBottomSheetModule,
//     MatSliderModule,

//     MatSnackBarModule,
//     MatDialogModule,
// MatExpansionModule,
// MatRadioModule  
//   ],
//   providers: [
//     MatIconRegistry,
//     {
//       provide: MAT_CHIPS_DEFAULT_OPTIONS,
//       useValue: {
//         separatorKeyCodes: [13, 188]
//       }
//     }
//   ]
// })
// export class ThemeModule {
//   constructor(
//     public matIconRegistry: MatIconRegistry) {
//     matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
//     matIconRegistry.registerFontClassAlias('fontawesome', 'fab');
//   }
// }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// import { AppComponent } from './app.component';

//Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule

  ],
  providers: [],
})
export class ThemeModule { }
