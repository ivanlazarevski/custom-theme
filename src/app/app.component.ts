import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog'; // Wrapper, allows us to communicate between the parent and the component in the dialog.
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { MatRippleModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MerkurGameComponent } from './merkur-game/merkur-game.component';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

type Rating = {
  rate: number;
  count: number;
};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatCardModule, // Can use and customize. Recommended.
    MatButtonModule, // Can use and customize.
    MatToolbarModule, // Not really much use here.
    MatIconModule, // Could use these for more generic icons, they are slightly customizable (color)
    MatChipsModule, // Could implement, if we can find a use for it. Customizable.
    MatBadgeModule, // Can use and customize. Recommended.,
    MatBottomSheetModule, // Can be useful, wrapper. Recommended for mobile if we need something that warrants such behavior.
    MatCheckboxModule, // Looks good and it's very easy to implement and customize. Works the same as a regular input checkbox. Same for radio.
    MatRippleModule, // I would avoid mentioning the possibility of implementing this to overly ambitious designers :D But it's incredibly easy to implement.
    MatSliderModule, // Not sure if there's a point to implement this if its just for quickbet, and we already have sliders (maybe these are more generic?)
    MatStepperModule, // Idk if it would be reasonable to implement this in a new register page?
    MatTooltipModule, // I would even consider this mandatory. Supposedly customizable, but not really.
    MerkurGameComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'custom-theme';
  public badgeValue = 3;
  public displayBadge = true;
  public tooltipMessage = 'This is a material tooltip!';
  public gameList = [1, 2, 3, 4, 5];

  public simpleProduct: Product = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  constructor(public dialog: MatDialog) {}

  public displayProductInDialog(): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: this.simpleProduct,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result: ', result);
    });
  }
}
