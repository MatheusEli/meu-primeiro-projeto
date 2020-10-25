import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public nameIconHeart = "heart-outline";

  constructor() { }

  ngOnInit() {
  }

  changeIcon(){

    if(this.nameIconHeart == "heart-outline"){

      this.nameIconHeart = "heart";
    }else{

      if(this.nameIconHeart == "heart"){

        this.nameIconHeart = "heart-outline";
      }
    }
  }
}
