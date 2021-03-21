import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Friend } from 'src/app/service/user.model';
import { UserService } from 'src/app/service/user.service';
import { SelectcontactPopoverPage } from '../popover/selectcontact-popover/selectcontact-popover.page';

@Component({
  selector: 'app-selectcontact',
  templateUrl: './selectcontact.page.html',
  styleUrls: ['./selectcontact.page.scss'],
})
export class SelectcontactPage implements OnInit {

  friends:Friend[];
  friendSub:Subscription;
  
  constructor(private userService:UserService,
    private popoverController:PopoverController
    ) { }

  ngOnInit() {
    
    this.friendSub=this.userService.friends.subscribe(friends=>{
      this.friends=friends;});
        
    
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: SelectcontactPopoverPage ,
      cssClass: 'selectcontact-popover.page.scss',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
