import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  MenuItems: MenuItem[] = [
    { Name: 'Margherita', Category: 'Pizza', Price: 8.99 },
    { Name: 'Pepperoni', Category: 'Pizza', Price: 9.99 },
    { Name: 'Buffalo Wings', Category: 'Appetizers', Price: 6.99 },
    { Name: 'Garlic Bread', Category: 'Appetizers', Price: 4.99 },
    { Name: 'Caesar Salad', Category: 'Salads', Price: 7.99 },
    { Name: 'Greek Salad', Category: 'Salads', Price: 8.99 },
    { Name: 'Moussaka', Category: 'Greek', Price: 12.99 },
    { Name: 'Souvlaki', Category: 'Greek', Price: 10.99 },
    { Name: 'Spanakopita', Category: 'Greek', Price: 8.99 },
    { Name: 'Tzatziki', Category: 'Greek', Price: 4.99 },
    { Name: 'Taco Salad', Category: 'Mexican', Price: 8.99 },
    { Name: 'Chicken Quesadilla', Category: 'Mexican', Price: 10.99 },
    { Name: 'Beef Enchiladas', Category: 'Mexican', Price: 12.99 },
    { Name: 'Churros', Category: 'Mexican', Price: 4.99 },

  ]
  GetByCategory(Cat: string): MenuItem[] {
    return this.MenuItems.filter((item) => item.Category === Cat);
  }

  GetUniqueCategories(): string[] {
    return Array.from(new Set(this.MenuItems.map(item => item.Category)));
  }
}


