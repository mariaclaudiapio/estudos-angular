import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() photos: IPhoto[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnInit() {
    this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: IPhoto[]) {
    const newRows = [];

    for(let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }

    return newRows;
  }


}
