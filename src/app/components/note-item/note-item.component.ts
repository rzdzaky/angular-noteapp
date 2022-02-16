import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../Note'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  faTimes = faTimes;
  @Input() note: Note | undefined;
  @Output() onDeleteNote: EventEmitter<Note> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Note> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(note:any) {
    this.onDeleteNote.emit(note)
  }

  onToggle(note:any) {
    this.onToggleReminder.emit(note)
  }

}
