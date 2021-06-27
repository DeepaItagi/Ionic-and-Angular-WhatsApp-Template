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
    'Andrew',
    './../../assets/image.jpg',
    'Hi',
    new Date()
  ),
  new Friend(
    '3',
    'Siri',
    './../../assets/img.png',
    'Hi',
    new Date()
  ),
  new Friend(
    '4',
    'Sanvi',
    './../../assets/img1.jpg',
    'Hi',
    new Date()
  ),
  new Friend(
    '5',
    'Aradhya',
    './../../assets/image.jpg',
    'Hi',
    new Date()
  ),
  new Friend(
    '6',
    'Aditi',
    './../../assets/img1.jpg',
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
