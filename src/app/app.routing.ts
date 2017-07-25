import { Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";

const appRoutes:Routes =[
  {
    path:'',
    component:LoginComponent,
    data:{
      title:'Login'
    }
  }
]

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents =[
  LoginComponent
]


