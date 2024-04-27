import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produits } from '../Beans/produitsBean';
import { latestproduct } from '../Beans/latestproduct';
@Injectable({
  providedIn: 'root',
})
export class ProduitsService {
  constructor(private http: HttpClient) {}
  getMostPopularProduct(): Observable<produits> {
    return this.http.get<produits>(
      'http://localhost:8080/Petshop/api/achatproduit/most-popular-product'
    );
  }
  getCountProducts(): Observable<any> {
    return this.http.get<any>(
      'http://localhost:8080/Petshop/api/produit/get-count-products'
    );
  }
  getLatestProducts(): Observable<latestproduct[]>{
    return this.http.get<latestproduct[]>(
      'http://localhost:8080/Petshop/api/produit/get-Threelatest-products'
    );
  }
  getAllProducts(): Observable<latestproduct[]>{
    return this.http.get<latestproduct[]>(
      'http://localhost:8080/Petshop/api/produit/get-all-products'
    );
  }
}
