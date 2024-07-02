import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  searched: string = '';
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();
  
  onSearchChange(): void {
    console.log(this.searched);
    this.searchChange.emit(this.searched);
  }
}
