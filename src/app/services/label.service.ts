import { Component, Inject, Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { cloneDeep } from 'lodash';
import { Logger } from 'ngx-base';
import { Space, Spaces } from 'ngx-fabric8-wit';
import { LabelModel } from '../models/label.model';
import { WorkItem } from '../models/work-item';
import { HttpService } from './http-service';

@Injectable()
export class LabelService {

  constructor(
    private http: HttpService,
    private logger: Logger,
    private spaces: Spaces
  ) {}

  notifyError(message: string, httpError: any) {
    this.logger.log('ERROR [WorkItemService] ' + message + (httpError.message ? ' ' + httpError.message : ''));
  }

    /**
   * getLabels - We call this service method to fetch all labels in currect space
   * @return Observable of LabelModel[] - Array of labels.
   * Url - http://localhost:8080/api/spaces/829d2039-3929-4e8e-865b-fd463b8b34f1/labels/
   */

  getLabels(): Observable<LabelModel[]> {
    return this.spaces.current
    .switchMap(currentSpace => {
        if (currentSpace) {
          return this.http.get(currentSpace.links.self + '/labels');
        } else {
          return [];
        }
    }).map (response => {
      return response.json().data as LabelModel[];
    });
  }

  getLabels2(labelUrl): Observable<LabelModel[]> {
    return this.http.get(labelUrl)
    .map (response => {
      return response.json().data as LabelModel[];
    });
  }

  createLabel(label: LabelModel, url: string): Observable<LabelModel> {
    return this.http.post(url, {data: label})
      .map (response => {
        return response.json().data as LabelModel;
      });
  }
}
