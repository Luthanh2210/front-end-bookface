import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {UpdateProfileComponent} from './user/update-profile/update-profile.component';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import {FriendComponent} from './user/friend/friend.component';
import {CreatePostComponent} from './post/create-post/create-post.component';
import {HomeModule} from './home/home.module';


const routes: Routes = [
  {path: '',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
    },
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignupComponent},
  {
    path: 'users/update-profile/:id',
    component: UpdateProfileComponent
  },
  {
    path: 'users/user-profile/:id',
    component: UserProfileComponent
  },
  {
    path: 'users/list-friend/:id',
    component:  FriendComponent
  },
  {
    path: 'create-post',
    component: CreatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
