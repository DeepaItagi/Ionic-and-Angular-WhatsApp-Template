import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Friend } from '../service/user.model';
import { UserService } from '../service/user.service';
import { HomescreenpopoverPage } from './popover/homescreenpopover/homescreenpopover.page';

@Component({
  selector: 'app-whatsapphomescreen',
  templateUrl: './whatsapphomescreen.page.html',
  styleUrls: ['./whatsapphomescreen.page.scss'],
})
export class WhatsapphomescreenPage implements OnInit {

  friends:Friend[];
  type:string;
  friendSub:Subscription;
  
  
  constructor(
    
    private userService:UserService,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.type='chats';
    this.friendSub=this.userService.friends.subscribe(friends=>{
      this.friends=friends;});
  }

  //popover
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: HomescreenpopoverPage ,
      cssClass: 'homescreenpopover.page.scss',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
