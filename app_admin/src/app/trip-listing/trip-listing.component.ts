import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trips } from '../data/trips';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css']
})
export class TripListingComponent implements OnInit {
  trips: Array<any> = trips;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }
}
