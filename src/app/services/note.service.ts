import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Note } from '../Note'
import { NOTES } from '../mock-notes'

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  getNotes(): Observable<Note[]> {
    const notes = of(NOTES);
    return notes;
  }
}
