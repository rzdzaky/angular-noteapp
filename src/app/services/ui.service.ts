import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddNote: boolean = false
  private subject = new Subject<any>()

  constructor() { }

  toggleAddNote(): void{
    this.showAddNote = !this.showAddNote
    this.subject.next(this.showAddNote)
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable()
  }
}
