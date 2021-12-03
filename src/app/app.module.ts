import { RecipeService } from './share/services/recipe-services/recipe.service';
import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './share/dropdown.directive';
import { ShoppingService } from './share/services/shopping-services/shopping.service';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeStarterComponent } from './recipe/recipe-starter/recipe-starter.component';
import { DataStorageService } from './share/services/data-storage-service/data-storage.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthPageComponent } from './auth/auth-page/auth-page.component';
import { AuthenService } from './share/services/authen/authen.service';
import { SpinnerComponent } from './share/spinner/spinner/spinner.component';
import { AuthInterceptorInterceptor } from './share/services/auth-interceptor-service/auth-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeEditComponent,
    RecipeStarterComponent,
    AuthPageComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [RecipeService, ShoppingService, DataStorageService, AuthenService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorInterceptor ,multi:true,}],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
