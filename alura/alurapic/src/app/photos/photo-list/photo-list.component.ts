import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPhoto } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit {

  photos: IPhoto[] = [];

  constructor(
    private PhotoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName;
    this.PhotoService
    .listFromUser(userName)
    .subscribe(photos => this.photos = photos);
  }
}
