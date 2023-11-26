import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductStatic} from "../../shared/models/ProductStatic";
import {GridModule} from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, GridModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  public gridData: unknown[] = ProductStatic;

  constructor() {
  }

}
