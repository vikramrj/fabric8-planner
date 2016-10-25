import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AuthenticationService } from '../../../../auth/authentication.service';
import { Logger } from '../../../../shared/logger.service';
import { LinkType } from '../../../../models/link-type';
import { Link } from '../../../../models/link';


@Injectable()
export class WorkItemLinkService {
  private headers = new Headers({'Content-Type': 'application/vnd.api+json'});
  // Fetching link category of system for now (To be refactored after full implementation)
  private linkCatgoryUrl = process.env.API_URL + 'linkcategories/1';
  private linkTypesUrl = process.env.API_URL + 'linkTypes';
  private linksUrl = process.env.API_URL + 'links';
  public linkTypes: LinkType[] = [];

  constructor(private http: Http,
              private logger: Logger,
              private auth: AuthenticationService) {    
    if(this.auth.getToken() != null) {
      this.headers.set('Authorization', 'Bearer ' + this.auth.getToken());
    }
    logger.log('WorkItemLinkService running in ' + process.env.ENV + ' mode.');
  }

  getLinkTypes(): Promise<LinkType[]> {
    return this.http
      .get(this.linkTypesUrl, {headers: this.headers})
      .toPromise()
      .then(response => process.env.ENV != 'development' ? response.json() as LinkType[] : response.json().data as LinkType[])
      .catch(this.handleError);
  }

  createLink(link: Link): Promise<Link> {
    return this.http
      .put(this.linksUrl, JSON.stringify(link), {headers: this.headers})
      .toPromise()
      .then(response => process.env.ENV != 'inmemory' ? response.json() as Link : link)
      .catch(this.handleError);
  }

  deleteLink(link: Link): Promise<void> {
    const url = `${this.linksUrl}/${link.id}`;
    return this.http
      .put(this.linksUrl, JSON.stringify(link), {headers: this.headers})
      .toPromise()
      .then(response => {console.log(response);})
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}