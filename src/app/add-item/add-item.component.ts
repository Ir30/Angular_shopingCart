import { Component } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  title=""
  price=""
  description=""
  image=""
  SellerName=""
  Quanitiy=""

  readValues = ()=>{
    let data = {
      "title":this.title,
      "price":this.price,
      "description":this.description,
      "image":this.image,
      "SellerName":this.SellerName,
      "Quanitiy":this.Quanitiy
    }
    console.log(data)
  }

  

}
