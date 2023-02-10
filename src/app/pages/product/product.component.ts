import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { product } from '../../models/product.entity';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ngOnInit(): void {
    this.metodoget();
    this.postProducts();
    this.updateProducts();
    this.deleteProducts()
  }
  constructor(private http:HttpClient){}
  readonly api = 'https://api.escuelajs.co/api/v1/products'
  metodoget(){
    const api = `${this.api}`
    const e = this.http.get(api).subscribe(e=>{console.log(e)})
  }
  postProducts(){
    const data = {
      title: 'balon',
      price: 24,
      description:'indumentaria deportiva/ jose araujo',
      images:['imagen sin argumentos'],
      categoryId:600
    }
    const api = `${this.api}`
    this.http.post(this.api,data).subscribe(e=>{console.log(e)})
  }
  updateProducts(){
    const actualizar={
      title :'guantes',
      price:23,
      description:'utiles deportivos / jose araujo'
    }
    const api ='https://api.escuelajs.co/api/v1/products/2'
    this.http.put(api,actualizar).subscribe(e=>{console.log(e)})
  }
  deleteProducts(){
  const api = 'https://api.escuelajs.co/api/v1/products/6';
  this.http.delete(api).subscribe(e=>{console.log(e)})

  }
}

