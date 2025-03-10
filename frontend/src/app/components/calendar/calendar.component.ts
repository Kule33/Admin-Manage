import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import { CalendarOptions } from '@fullcalendar/core'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin], 
   
    dayCellDidMount: (info) => {
      const today = new Date();
      if (
        info.date.getFullYear() === today.getFullYear() &&
        info.date.getMonth() === today.getMonth() &&
        info.date.getDate() === today.getDate()
      ) {
        info.el.classList.add('today-highlight'); // Add CSS class dynamically
      }
    }
  };

  ngOnInit() {
    console.log("✅ Calendar Component Loaded");
  }
}
