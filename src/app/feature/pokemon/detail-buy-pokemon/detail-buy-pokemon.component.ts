import { Component, OnInit } from '@angular/core';
import { RealtimeDatabaseService } from '../../../services/realtime-database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-buy-pokemon',
  templateUrl: './detail-buy-pokemon.component.html',
  styleUrl: './detail-buy-pokemon.component.css'
})
export class DetailBuyPokemonComponent implements OnInit {
  data: any;
  constructor(private realtimeDatabase: RealtimeDatabaseService, private router : Router) {}

  async ngOnInit() {
    const buyObject = await this.realtimeDatabase.getFormSubmissions();

    this.data = Object.entries(buyObject).map(([key, value]) => {
      return { id: key, ...(value ?? {}) };
    });
  }

  editRow(id: string) {
    console.log('Edit ID:', id);
    this.router.navigate(['/edit-buy', id]);
  }

  deleteRow(id: string) {
    this.realtimeDatabase.deleteFormSubmission(id);
    console.log('Delete ID:', id);
  }
}
