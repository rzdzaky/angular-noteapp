import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
