import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  constructor(private router: Router) {}

  active = false;
  enOn = false;
  esOn = true;

  ngOnInit() {}

  goHome() {
    this.router.navigate(['']);
    this.noShowBurger();
  }

  goVehicles() {
    this.router.navigate(['/vehicles']);
    this.noShowBurger();
  }

  goContact() {
    this.router.navigate(['/contact']);
    this.noShowBurger();
  }

  goDashboard() {
    this.router.navigate(['/dashboard']);
    this.noShowBurger();
  }

  showBurger() {
    this.active = !this.active;
  }

  noShowBurger() {
    this.active = false;
  }
}
