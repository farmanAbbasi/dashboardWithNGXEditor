import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

// Main route
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

//installed 
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { PostService } from './services/post.service';
import { NgxEditorModule } from 'ngx-editor';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/app/header/header.component';
import { FooterComponent } from './components/app/footer/footer.component';
import { SidebarComponent } from './components/app/sidebar/sidebar.component';
import { GlobalService } from './services/global.service';

// Modules
import { GridStackModule } from 'ng2-gridstack';
import { ForumComponent } from './components/forum/forum.component';
import { EditorComponent } from './components/editor/editor.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ForumComponent,
    EditorComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule,
    GridStackModule,
    InfiniteScrollModule,
    MatCardModule,
    FormsModule,
    HttpModule,
    NgxEditorModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [GlobalService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
