import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Friend } from 'src/app/models/friend.model';

import { User } from '../../models/user.model';
import { UserHelperService } from '../../utilities/user-helper.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent extends BaseComponent implements OnInit {
  friends: User[] = [];
  activeUserObject: any;
  noFriends: Boolean | undefined;
  isLoading: Boolean = true;
  unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(private userHelper: UserHelperService) {
    super();
    let currentUserVar = localStorage.getItem('currentUser');
    if (currentUserVar) { // i.e, not null and not empty string 
    // now returnUrl cannot be null, so it must be a string, which is valid to use in this call
    this.activeUserObject = JSON.parse(currentUserVar);
    }
   
  }


  ngOnInit() {
    this.userHelper.loadRequestingFriends(this.activeUserObject._id).pipe(takeUntil(this.unsubscribe)).subscribe(finalRequesters => {
      this.isLoading = false;
      this.noFriends = finalRequesters.length === 0 ? true : false;
      this.friends = finalRequesters;
    });
  }

  onAcceptButtonClick(frinedClicked: any) {    
    let friendRequestObject = {
      id: frinedClicked.id,
      status: 'You are friend'
    }

    this.userHelper.updateFriendRequest(friendRequestObject).pipe(takeUntil(this.unsubscribe)).subscribe(() => {
      this.ngOnInit();
    });
  }

  onRejectButtonClick(frinedClicked: any) {
    let friendRequestObject = {
      id: frinedClicked.id,
      status: 'Request Rejected'
    }

    this.userHelper.updateFriendRequest(friendRequestObject).pipe(takeUntil(this.unsubscribe)).subscribe(() => {
      this.ngOnInit();
    });
  }
}