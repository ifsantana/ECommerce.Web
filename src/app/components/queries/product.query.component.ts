import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Component } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { AlertService } from "../../services/alert.service";
import { Product } from "../../models/product";
import { User } from "../../models/user";

@Component({
    moduleId: module.id,
    templateUrl: 'product.query.component.html'
 })

 export class ProductQueryComponent implements OnInit {
    currentUser: User;
    products: Product[] = [];

    constructor(private productService: ProductService, private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit(): void {
        this.loadAllProducts();
    }

    deleteProduct(_id: number) {
        this.productService.delete(_id).subscribe(() => { this.loadAllProducts(); });
    }

    private loadAllProducts() {
        this.productService.getAll().subscribe(products => { this.products = products; });
    }

 }