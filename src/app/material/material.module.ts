import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';


import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatMenuModule } from '@angular/material/menu'
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatCardModule } from '@angular/material/card'
import { MatTabsModule } from '@angular/material/tabs'
import { MatStepperModule } from '@angular/material/stepper'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { MatDialogModule } from '@angular/material/dialog';
// const material = [
//   MatButtonModule,
//   MatIconModule,
//   MatDividerModule,
//   MatBadgeModule,
//   MatProgressSpinnerModule,
//   MatToolbarModule,
//   MatSidenavModule,
//   MatMenuModule,
//   MatListModule,
//   MatGridListModule,
//   MatExpansionModule,
//   MatCardModule,
//   MatTabsModule,
//   MatStepperModule,
//   MatInputModule,
//   MatFormFieldModule,
//   MatSelectModule,
//   MatAutocompleteModule,
//   MatPaginatedTabHeader,
//   MatTableModule,
//   MatPaginatorModule,
//   CdkTableModule,
//   MatPaginator,
//   MatTableDataSource
  


// ]
@NgModule({
  // imports: [
  //   NgModule,
  //   material
  // ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    MatPaginatorModule,
    MatDialogModule
    
  ]
})
export class MaterialModule { }

