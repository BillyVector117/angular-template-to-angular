import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { SearchComponent } from "./pages/search/search.component";
const app_routes: Routes = [
    { path: "home", component: PortfolioComponent },
    { path: "about", component: AboutComponent },
    { path: "item/:id", component: ItemComponent },
    { path: "search/:words", component: SearchComponent },
    { path: "**", pathMatch: "full", redirectTo: "home" }
]
// Take app_modules and set to RouterModule decorator
@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}