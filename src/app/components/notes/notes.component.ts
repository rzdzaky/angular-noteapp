import { Component, OnInit } from '@angular/core';
import { Note } from '../../Note'
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(notes => this.notes = notes);
  }

  deleteNote(note: Note) {
    this.noteService.deleteNote(note).subscribe(() => this.notes = this.notes.filter(n => n.id !== note.id));
  }

  toggleReminder(note: Note) {
    note.reminder = !note.reminder
    this.noteService.updateNoteReminder(note).subscribe()
  }

  addNote(note:Note){
    this.noteService.addNote(note).subscribe(notes => this.notes.push(note));
  }

}
