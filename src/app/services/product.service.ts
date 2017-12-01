import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppConfig } from "../app.config";
import { Product } from "../models/product";

@Injectable()
export class ProductService {

    constructor(private http: Http, private config: AppConfig) { }

    getAll() {
        return this.http.get(this.config.apiUrl + '/product/', this.jwt()).map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get(this.config.apiUrl + '/product/' + _id, this.jwt()).map((response: Response) => response.json());
    }

    create(product: Product) {
        return this.http.post(this.config.apiUrl + '/product/create', product, this.jwt());
    }

    update(product: Product) {
        return this.http.put(this.config.apiUrl + '/product/' + product._id, product, this.jwt());
    }

    delete(_id: number) {
        return this.http.delete(this.config.apiUrl + '/product/' + _id, this.jwt());
    }

    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
