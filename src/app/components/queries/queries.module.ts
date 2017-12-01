import { NgModule } from "@angular/core";
import { ProductQueryComponent } from "./product.query.component";
import { CommonModule } from "@angular/common";
import { ProductService } from "../../services/product.service";

@NgModule({
    declarations: [
      ProductQueryComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
      ProductQueryComponent  
    ],
    providers: [
      ProductService
    ]
  })
  export class QueriesModule { }
  