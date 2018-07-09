import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'f8-planner-column',
  templateUrl: './planner-board-column.component.html',
  styleUrls: ['./planner-board-column.component.less']
})

export class PlannerBoardColumnComponent implements OnDestroy, OnInit {
  @Input() column;

  private eventListeners: any[] = [];

  constructor(private dragulaService: DragulaService) {
  }

  ngOnInit() {
    this.eventListeners.push(
      this.dragulaService.drop.subscribe((value) => {
        this.onDrop(value.slice(1));
      })
    );
  }

  ngOnDestroy() {
    this.eventListeners.forEach(subscriber => subscriber.unsubscribe());
  }

  onDrop(args) {
    const [el, target, source, sibling] = args;
    const payload = {
      workItem: '',
      destinationWorkItemID: '',
      direction: 'above'
    };
    if (sibling === null) {
      payload.direction = 'below';
    } else {
      console.log(sibling.children[0].getAttribute('data-id'), '####-37');
    }
    console.log(el.children[0].getAttribute('data-id'), '####-34');
    console.log(target, '####-35');
    console.log(source, '####-36');
  }
}
