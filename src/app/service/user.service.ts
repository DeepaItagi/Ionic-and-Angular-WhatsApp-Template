import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Friend } from './user.model';
import { take, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public friends= new BehaviorSubject<Friend[]>([
    new Friend(
    '1',
    'Max',
    './../../assets/img.png',
    'Hello',
    new Date()
  ),
  new Friend(
    '2',
    'Max',
    './../../assets/img.png',
    'Hi',
    new Date()
  ),
  new Friend(
    '3',
    'Max',
    './../../assets/img.png',
    'Hi',
    new Date()
  ),
  new Friend(
    '4',
    'Max',
    './../../assets/img.png',
    'Hi',
    new Date()
  ),
  new Friend(
    '5',
    'Max',
    './../../assets/img.png',
    'Hi',
    new Date()
  ),
  new Friend(
    '6',
    'Max',
    './../../assets/img.png',
    'Hi',
    new Date()
  )
    
  ])

  

getFriend(id: string) {
  return this.friends.pipe(
    take(1),
    map(friends => {
      return { ...friends.find(p => p.id === id) };
    }) );
 }

}
