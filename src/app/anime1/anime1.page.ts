import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-anime1',
  templateUrl: './anime1.page.html',
  styleUrls: ['./anime1.page.scss'],
})
export class Anime1Page implements OnInit {
  anime: any;
  comentarios: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAnimeDetails(1).subscribe((data) => {
      this.anime = data;
    });

    this.apiService.getComments(1).subscribe((data: any[]) => {
      this.comentarios = data;
    });
    

  }
}
