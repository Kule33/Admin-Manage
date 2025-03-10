import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stream-details',
  templateUrl: './streamDetails.component.html',
  styleUrls: ['./streamDetails.component.scss']
})
export class StreamDetailsComponent {
  streamId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.streamId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
