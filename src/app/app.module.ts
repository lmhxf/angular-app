import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { Data} from './data';

import { AppComponent } from './app.component';
import { HeroService} from './hero.service';
import { DashboardComponent} from './dashboard.component';
import { HeroComponent} from './hero.component';
import { HeroDetailComponent} from './hero-detail.component';
import { HeroSearchComponent} from './hero-search.component';

//@NgModule装饰器,存放根模块及其特性模块
@NgModule({
  //declarations: 声明本模块中拥有的视图类，angular有三种视图类：组件、指令、管道
  //exports - declarations 的子集，可用于其它模块的组件模板。
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  //imports - 本模块声明的组件模板需要的类所在的其它模块。
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(Data)
  ],
  //providers - 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
  providers: [HeroService],
  //bootstrap - 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性
  bootstrap: [AppComponent]
})
export class AppModule { }
