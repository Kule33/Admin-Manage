import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface PredefinedItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-tariff',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss']
})
export class TariffComponent {
  tariffForm: FormGroup;
  predefinedItems: PredefinedItem[] = [
    { id: 'panelMeetings', label: 'Resource Personnel – no of panel meetings' },
    { id: 'personnel', label: 'Resource Personnel – no of personnel' },
    { id: 'refreshment', label: 'Value of refreshment' },
    { id: 'documentation', label: 'Documentation' },
    { id: 'transport', label: 'Transport (km)' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the form with predefined items first
    this.tariffForm = this.fb.group({
      items: this.fb.array([])
    });
    
    // Add predefined items
    this.initPredefinedItems();
  }

  // Initialize predefined items
  initPredefinedItems() {
    const itemsArray = this.tariffForm.get('items') as FormArray;
    
    // Clear existing items if any
    while (itemsArray.length) {
      itemsArray.removeAt(0);
    }
    
    // Add predefined items
    this.predefinedItems.forEach(item => {
      itemsArray.push(this.fb.group({
        id: [item.id],
        description: [item.label], // Store the label in description
        quantity: [''],
        cost: ['']
      }));
    });
  }

  // Create a new dynamic item (row) in the form
  createItem(): FormGroup {
    return this.fb.group({
      id: ['dynamic_' + Date.now()], // Generate unique ID
      description: [''],
      quantity: [''],
      cost: ['']
    });
  }

  // Getter for all items array
  get items(): FormArray {
    return this.tariffForm.get('items') as FormArray;
  }
  
  // Getter for dynamically added items (after predefined items)
  get dynamicItems(): FormArray {
    const allItems = this.tariffForm.get('items') as FormArray;
    // Create a new FormArray with only the dynamic items (after predefined ones)
    return this.fb.array(
      Array.from({ length: Math.max(0, allItems.length - this.predefinedItems.length) }, 
        (_, i) => allItems.at(i + this.predefinedItems.length)
      )
    );
  }

  // Add a new row dynamically
  addItem() {
    this.items.push(this.createItem());
  }

  // Remove a specific dynamic row
  removeItem(index: number) {
    const actualIndex = index + this.predefinedItems.length;
    if (actualIndex >= this.predefinedItems.length) {
      this.items.removeAt(actualIndex);
    }
  }

  // Navigation methods
  goBack() {
    this.router.navigate(['/']);
  }

  goNext() {
    console.log(this.tariffForm.value);
    // Handle form submission/validation
  }
}
