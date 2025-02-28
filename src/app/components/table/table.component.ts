import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {}
