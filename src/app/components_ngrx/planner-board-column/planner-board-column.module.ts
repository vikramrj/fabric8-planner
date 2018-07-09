import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { PlannerCardModule } from './../planner-card/planner-card.module';
import { PlannerBoardColumnComponent } from './planner-board-column.component';
@NgModule({
  imports: [
    CommonModule,
    DragulaModule,
    PlannerCardModule
  ],
  declarations: [ PlannerBoardColumnComponent ],
  providers: [ DragulaService ],
  exports: [ PlannerBoardColumnComponent ]
})

export class PlannerBoardColumnModule {}
