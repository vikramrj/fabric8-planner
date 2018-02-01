import {
  Directive,
  OnChanges,
  AfterViewInit,
  EventEmitter,
  OnInit,
  Output,
  Input,
  OnDestroy,
  ElementRef,
  SimpleChange
} from '@angular/core';
import { dragula, DragulaService } from 'ng2-dragula';

@Directive({ selector: 'ngx-datatable[dragulaName]' })
export class DragulaExtendedDirective implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input() public dragulaName: string;
  @Input() public dragulaModel: any;
  @Input() public dragulaVScroll: any;
  @Input() public classSelector: string = 'null';
  @Output() public directiveDrop: EventEmitter<any> = new EventEmitter<any>();
  @Output() public directiveDrag: EventEmitter<any> = new EventEmitter<any>();

  subscriptionDrag: any = null;
  subscriptionDrop: any = null;
  protected container: any;
  private drake: any;
  private options: any;
  private el: ElementRef;
  private dragulaService: DragulaService;

  public constructor(el: ElementRef, dragulaService: DragulaService) {
      this.el = el;
      this.dragulaService = dragulaService;
  }
  ngOnInit() {
    // Todo
  }

  ngAfterViewInit() {
      if(this.el) {
          const container = this.el;

          // Check for the row's parent node: datatable-scroller
          // This is what you want to bind Dragula to, in order to drag sort
          if(container.nativeElement.querySelector('datatable-scroller')){
              const rowParent =  container.nativeElement.querySelector('datatable-scroller');

              // Check if this Dragula already exists
              if(!this.dragulaService.find(this.dragulaName)) {

                  // Must assign the new rowParent as the container you want to pass to Dragula
                  this.container = rowParent;
                  this.initializeDragula();
              }
          }
      }
  }

  ngOnDestroy() {

      // Clear this Dragula always
      // comment out if you want to keep it
      if (this.dragulaService.find(this.dragulaName)) {
          this.dragulaService.destroy(this.dragulaName);
      }

      // Clear DRAG and DROP subscription to prevent duplicates
      if(this.subscriptionDrag) {
          this.subscriptionDrag.unsubscribe();
          this.subscriptionDrag = null;
      }
      if(this.subscriptionDrop) {
          this.subscriptionDrop.unsubscribe();
          this.subscriptionDrop = null;
      }
  }

  public ngOnChanges(changes: { dragulaModel?: SimpleChange }): void {

    // Must update model on any changes
    // Otherwise it will fall out of sync with the 'dragulaModel'
    if (changes && changes.dragulaModel) {
        if (this.drake) {
            if (this.drake.models) {
                const modelIndex = this.drake.models.indexOf(changes.dragulaModel.previousValue);
                this.drake.models.splice(modelIndex, 1, changes.dragulaModel.currentValue);
            } else {
                this.drake.models = [changes.dragulaModel.currentValue];
            }
        }
    }
}

  protected initializeDragula() {
      // Create new Dragula container
      const bag = this.dragulaService.find(this.dragulaName);
      if (bag) {
          this.drake = bag.drake;
          this.checkModel();
          this.drake.containers.push(this.container);
      } else {

          // Check if classSelector was specified
          // *true:
          //    - the classSelector string will be used to match the class of the element clicked
          //    - the element with the matching class name will be used to drag the row
          // *false:
          //    - no class selector will be used
          //    - the whole row will default back to being draggable
          if(this.classSelector !== 'null') {
              const classSelector = this.classSelector;
              const options = {
                  moves: (el, container, handle) => {
                      return handle.className === classSelector;
                  }
              };
              this.drake = dragula([this.container], options);
          } else {
              this.drake = dragula([this.container]);
          }
          this.checkModel();
          this.dragulaService.add(this.dragulaName, this.drake);
      }

      // Set DRAG and DROP subscriptions and callbacks
      this.subscriptionDrag = this.dragulaService.drag.subscribe((value) => {
          this.drag(value.slice(1));
      });
      this.subscriptionDrop = this.dragulaService.drop.subscribe((value) => {
          const [bagName, el, target, source] = value;

          this.onDropModel(value.slice(1));
      });
  }

  private checkModel() {
      if (this.dragulaModel) {
          if (this.drake.models) {
              this.drake.models.push(this.dragulaModel);
          } else {
              this.drake.models = [this.dragulaModel];
          }
      }
  }

  private drag(args) {
      const [e, el] = args;
  }

  private onDropModel(args) {
      const [el, target, source] = args;

      // Added emitter on any DROP action
      this.directiveDrop.emit(this.dragulaModel);
  }
}
