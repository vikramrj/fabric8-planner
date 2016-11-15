import { Component, OnInit, Input } from '@angular/core';
import { Http } from "@angular/http";
import { LinkType } from '../../../../models/link-type';
import { Link } from '../../../../models/link';
import { WorkItemLinkService } from './work-item-link.service';
import { WorkItem } from '../../../work-item';
import { SearchData } from './search-data';
@Component({
    selector: 'alm-work-item-link',
    templateUrl: './work-item-link.component.html',
    styleUrls: ['./work-item-link.component.scss'],
})
export class WorkItemLinkComponent implements OnInit {
    @Input() workItem: WorkItem;
    linkTypes : LinkType[];
    link: Link;
    selectedItem: Object;
    selectedLink: string;
    searchSource : SearchData;
    constructor (
        private WorkItemLinkService: WorkItemLinkService,
        http: Http
    ){
        this.searchSource = new SearchData(http);
    }
    public items:Array<Object> = [
        {
            id: '1',
            value: 'PRNFLY-22 Sort tables with the table header'
        },
        {
            id: '2',
            value: 'ISS-22 new issue'
        },
        {
            id: '3',
            value: 'UST-22 new user story'
        },
        {
            id: '4',
            value: 'EPIC-22 new epic'
        }
    ];
    public relations:Array<any> = [
        {
        "type": "linktypes",
        "id": "1",
        "attributes": {
          "name": "tested-by-link-type",
          "description": "A test work item can 'test' if a the code in a pull request passes the tests.",
          "source_type": "test-workitemtype",
          "target_type": "pull-request-workitemttype",
          "forward_name": "Is related",
          "reverse_name": "tested by"
        },
        "relationships": {
          "link_category": {
            "meta": { "comment": "See the creation of link categories for what this ID means" },
            "data": { "type": "link_category", "id": "6c5610be-30b2-4880-9fec-81e4f8e4fd76" },
            "links": {
              "self": "http://example.com/api/linktypes/40bbdd3d-8b5d-4fd6-ac90-7236b669af04/relationships/link_category",
              "related": "http://example.com/api/linktypes/40bbdd3d-8b5d-4fd6-ac90-7236b669af04/link_category"
            }
          }
        },
        "links": {
          "self": "http://example.com/api/linktypes/40bbdd3d-8b5d-4fd6-ac90-7236b669af04"
        }
      },
      {
        "type": "linktypes",
        "id": "2",
        "attributes": {
          "name": "tested-by-link-type",
          "description": "A test work item can 'test' if a the code in a pull request passes the tests.",
          "source_type": "test-workitemtype",
          "target_type": "pull-request-workitemttype",
          "forward_name": "Is blocked",
          "reverse_name": "tested by"
        },
        "relationships": {
          "link_category": {
            "meta": { "comment": "See the creation of link categories for what this ID means" },
            "data": { "type": "link_category", "id": "6c5610be-30b2-4880-9fec-81e4f8e4fd76" },
            "links": {
              "self": "http://example.com/api/linktypes/40bbdd3d-8b5d-4fd6-ac90-7236b669af04/relationships/link_category",
              "related": "http://example.com/api/linktypes/40bbdd3d-8b5d-4fd6-ac90-7236b669af04/link_category"
            }
          }
        },
        "links": {
          "self": "http://example.com/api/linktypes/40bbdd3d-8b5d-4fd6-ac90-7236b669af04"
        }
      }
    ]

    ngOnInit() {
        this.loadLinkTypes();
    }

    renderResults(data: any): string {
        let html: string = "";
        // html += data.id ? `<b>(${data.id})</b>` : "";
        html += data.value ? `<span>${data.value}</span>` : data;
        return html;
    }

    createLinkObject(sourceId: string, targetId: string, linkId: string) : void {
        this.link = {
            meta: {
                'comment' : 'Hello World'
            },
            type: 'links',
            attributes: {
                'meta': {
                    'comment' : 'linking'
                },
                'source': sourceId,
                'target': targetId,
                'comment': 'test'
            },
            relationships:{
                'link_type': {
                    "meta": { "comment": "See the creation of link types for what this ID means" },
                    "data": {"type": "linktypes",id:linkId}
                }
            }
        } as Link;
        // return link;
    }

    onSelectItem(item: Object): void{
        console.log("value is changed to ", item);
        this.selectedItem = item;
    }

    onSelectRelation(relation: string): void{
        console.log("relation is changed to ", relation);
        this.selectedLink = relation;
    }

    createLink(event: any = null): void {
        //  console.log(this.workItem);
         this.createLinkObject(this.workItem['id'], this.selectedItem['id'], this.selectedLink)
         this.WorkItemLinkService
        .createLink(this.link)
        .then(response => {
        //   this.link = link;
          console.log(response);
        }).catch((error) =>{
            // this.linkTypes = this.relations;
            console.log(error);
        })
    }

    loadLinkTypes(): void {
        this.WorkItemLinkService
        .getLinkTypes()
        .then((lTypes) => {
            console.log(lTypes);
            this.linkTypes = lTypes;
            // return lTypes.reverse();
        }).catch(() =>{
            this.linkTypes = this.relations;
            console.log('hello');
        })
    }

    private value:any = {};
    private _disabledV:string = '0';
    private disabled:boolean = false;
    visible = false;
   
    toggle() {
        this.visible = !this.visible;
    }

    private get disabledV():string {
        return this._disabledV;
    }

    private set disabledV(value:string) {
        this._disabledV = value;
        this.disabled = this._disabledV === '1';
    }

    public selected(value:any):void {
        console.log('Selected value is: ', value);
    }

    public removed(value:any):void {
        console.log('Removed value is: ', value);
    }

    public typed(value:any):void {
        console.log('New search input: ', value);
    }

    public refreshValue(value:any):void {
        this.value = value;
    }
}