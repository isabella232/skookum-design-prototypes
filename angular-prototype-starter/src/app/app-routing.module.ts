import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { UxComponentsComponent } from './uxcomponents/uxcomponents.component';
// import { LayoutsComponent } from './layouts/layouts.component';
import { NoContentComponent } from './no-content/no-content.component';

// import { RadioButtonsComponent } from './uxcomponents/radio-buttons/radio-buttons.component';
// import { SliderComponent } from './uxcomponents/slider/slider.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  // { 
  //   path: 'layouts', 
  //   component: LayoutsComponent 
  // },
  // { 
  //   path: 'components', 
  //   component: UxComponentsComponent,
  //   children: [
  //     {
  //       path: 'radio-buttons',
  //       component: RadioButtonsComponent
  //     },
  //     {
  //       path: 'slider',
  //       component: SliderComponent
  //     }
  //   ]
  // },
  { 
    path: '**',
    component: NoContentComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

export const RoutingComponent = [
  HomeComponent,
  //UxComponentsComponent,
  // LayoutsComponent,
  NoContentComponent
]