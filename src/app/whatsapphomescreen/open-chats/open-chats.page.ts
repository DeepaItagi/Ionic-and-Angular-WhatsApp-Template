import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Friend } from 'src/app/service/user.model';
import { UserService } from 'src/app/service/user.service';
import { OpenChatsPopoverPage } from '../popover/open-chats-popover/open-chats-popover.page';

@Component({
  selector: 'app-open-chats',
  templateUrl: './open-chats.page.html',
  styleUrls: ['./open-chats.page.scss'],
})
export class OpenChatsPage implements OnInit {

  friends:Friend;
  private friendSub: Subscription;
  currentuser='Albert';
  newText=' ';
  messages=[
    {
      user:'Albert',
      sentat:new Date(),
      msg:'Hi'
    },
    {
      user:'Max',
      sentat:new Date(),
      msg:'Hey, Whats up'
    },
    {
      user:'Albert',
      sentat:new Date(),
      msg:'Working on Ionic, you?'
    }

  ];

  constructor(
    private userService:UserService,
   private  route: ActivatedRoute,
   private popoverController:PopoverController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
  
      this.friendSub = this.userService
        .getFriend(paramMap.get('id'))
        .subscribe(friend => {
          this.friends = friend;
        });
    });
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: OpenChatsPopoverPage ,
      cssClass: 'open-chats-popover.page.scss',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  sendMessage()
  {
    this.messages.push({
      user:'Albert',
      sentat:new Date(),
      msg: this.newText
    }
    )

  }

}
