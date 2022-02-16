import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from '../../Note'
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  text: string | undefined
  times!: string
  reminder: boolean = false
  showAddNote?: boolean
  subscription: Subscription

  @Output() onAddNote: EventEmitter<Note> = new EventEmitter()

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddNote = value)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text){
      alert('please add note')
      return
    }

    const newNote = {
      text: this.text,
      times: this.times,
      reminder: this.reminder
    }

    this.onAddNote.emit(newNote)

    this.text= ''
    this.times= ''
    this.reminder= false
  }

}
