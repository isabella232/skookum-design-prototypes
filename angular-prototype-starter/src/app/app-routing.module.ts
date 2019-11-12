import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// App Components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LocationsComponent } from './about/locations/locations.component';
import { NoContentComponent } from './no-content/no-content.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    data: {animation: 'HomePage'}
  },
  {
    path: 'about', 
    component: AboutComponent,
    data: {animation: 'AboutPage'},
    children: [
      {
        path: 'locations',
        component: LocationsComponent
      }
    ]
  },
  { 
    path: '**',
    component: NoContentComponent 
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}

export const RoutingComponent = [
  HomeComponent,
  AboutComponent,
  LocationsComponent,
  NoContentComponent
]
