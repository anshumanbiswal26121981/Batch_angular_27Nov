import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'underscore';

import { FileUploadService } from '../services/fileupload.service';
import { FriendService } from '../services/friend.service';
import { UserService } from '../services/user.service';
import { Friend } from '../models/friend.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserHelperService {

  constructor(private fileService: FileUploadService, private friendService: FriendService, private userService: UserService) { }

  private createImageFromBlob(image: Blob): Observable<any> {
    return new Observable(observer => {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        let imageToShow = reader.result;
        observer.next(imageToShow);
      }, false);

      if (image) {
        reader.readAsDataURL(image);
      }
    });
  }

  private loadFriendsIcons(friends: any[]): Observable<any> {
    return new Observable(observer => {
      friends.forEach(oneFriend => {
        this.fileService.getPhotoById(oneFriend.photoId).subscribe(res => {
          this.createImageFromBlob(res).subscribe(response => {
            oneFriend.friendIcon = response;
            observer.next(friends);
          })
        }, err => {
          throw err;
        });
      });
    });
  }

  mapUserToFriendRequest(userArray: User[], friendRequestArray: Friend[]): Observable<any> {
    let finalUserList : User[] = [];
    return new Observable(observer => {
      userArray.forEach(user => {
        if (friendRequestArray.length === 0) {
          user.isNewUser = true;
          finalUserList.push(user);
          return;
        }

        let elementMatch = _.find(friendRequestArray, function (friendReq) {
          return friendReq.userId === user.id || friendReq.friendId === user.id;
        })

        if (elementMatch && elementMatch.friendId === user.id && elementMatch.status === 'Request Pending') {
          user.status = elementMatch.status;
          user.isRequest = true;
          finalUserList.push(user);
        }

        if (elementMatch && (elementMatch.friendId === user.id || elementMatch.userId === user.id) && elementMatch.status === 'Request Rejected') {
          user.status = elementMatch.status;
          user.isRejected = true;
          finalUserList.push(user);
        }

        if (!elementMatch) {
          user.isNewUser = true;
          finalUserList.push(user);
        }
      });
      observer.next(finalUserList);
    })
  }

  createNetworkUserList(userId: string | undefined, allUsers: User[]): Observable<any> {
    return new Observable(observer => {
      allUsers = _.filter(allUsers, function (user) { return user.id !== userId; });
      if (allUsers.length === 0) {
        observer.next(allUsers);
      }

      this.friendService.getAllFriendRequests().subscribe(friendRequestArray => {
        friendRequestArray = _.filter(friendRequestArray, function (request) {
          return request.userId === userId || request.friendId === userId;
        })
        this.mapUserToFriendRequest(allUsers, friendRequestArray).subscribe(mappedFriendList => {
          if (mappedFriendList.length === 0) {
            observer.next(mappedFriendList);
          }
          this.loadFriendsIcons(mappedFriendList).subscribe(result => {
            observer.next(result);
          });
        });
      });
    });
  }

  createNewFriendRequest(friendReqObject: Friend): Observable<any> {
    return new Observable(observer => {
      this.friendService.createRequest(friendReqObject).subscribe(() => {
        observer.next();
      });
    });
  }

  prepareRequestingFriends(filteredRequests: any[]): Observable<any> {
    return new Observable(observer => {
      filteredRequests.forEach(element => {
        this.userService.getUserById(element.uniqueId).subscribe((friendDetails: { firstName: any; lastName: any; profession: any; photoId: String; }) => {
          element.firstName = friendDetails.firstName;
          element.lastName = friendDetails.lastName;
          element.profession = friendDetails.profession;
          this.fileService.getPhotoById(friendDetails.photoId).subscribe(res => {
            this.createImageFromBlob(res).subscribe(response => {
              element.friendIcon = response;
              observer.next(filteredRequests);
            });
          }, err => {
            throw err;
          });
        });
      });
    });
  }

  loadRequestingFriends(userId: any): Observable<any> {
    return new Observable(observer => {
      let friendsArray : User[] = [];
      this.friendService.getAllFriendRequests().subscribe(friendRequests => {
        let filteredRequests = _.filter(friendRequests, function (request) {
          return (request.userId === userId || request.friendId === userId)
        });

        filteredRequests.forEach(oneRequest => {
          if ((oneRequest.userId === userId || oneRequest.friendId === userId) && oneRequest.status === 'You are friend') {
            oneRequest.uniqueId = oneRequest.userId === userId ? oneRequest.friendId : oneRequest.userId;
            oneRequest.isFriend = true;
            friendsArray.push(oneRequest);
          } else if (oneRequest.friendId === userId && oneRequest.status === 'Request Pending') {
            oneRequest.uniqueId = oneRequest.userId;
            oneRequest.isRequest = true;
            friendsArray.push(oneRequest);
          }
        });

        if (friendsArray.length === 0) {
          observer.next(friendsArray);
          return;
        }

        this.prepareRequestingFriends(friendsArray).subscribe(result => {
          observer.next(result);
        });
      });
    });
  }

  updateFriendRequest(friendReqObject: { id: any; status?: string; }): Observable<any> {
    return new Observable(observer => {
      this.friendService.updateFriendRequest(friendReqObject).subscribe(() => {
        observer.next();
      });
    });
  }
}