import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Friend } from 'src/app/service/user.model';
import { UserService } from 'src/app/service/user.service';
import { OpenStatusPopoverPage } from '../popover/open-status-popover/open-status-popover.page';

@Component({
  selector: 'app-open-status',
  templateUrl: './open-status.page.html',
  styleUrls: ['./open-status.page.scss'],
})
export class OpenStatusPage implements OnInit {

  friends:Friend;
  friendSub: Subscription;

  constructor(
    private userService:UserService,
    private route:ActivatedRoute,
    private popoverController:PopoverController) { }

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
      component: OpenStatusPopoverPage ,
      cssClass: 'open-status-popover.page.scss',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
