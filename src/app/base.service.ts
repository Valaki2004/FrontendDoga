import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private Url = 'https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.Url}/.json`)
  }

  createProduct(product: any) {
    product.price = parseFloat(product.price).toFixed(2)
    return this.http.post(`${this.Url}/.json`, product)
  }

  updateProduct(product: any) {
    product.price = parseFloat(product.price).toFixed(2)
    return this.http.put(`${this.Url}/${product.id}.json`, product)
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.Url}/${id}.json`)
  }

}
