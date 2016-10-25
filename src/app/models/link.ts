// import { LinkType } from './link-type';

export class Link {
  id: string;
  meta: {
    'comment' : string
  };
  type: string;
  attributes: {
    'meta': {
      'comment' : string
    },
    'source': string,
    'target': string,
    'comment': string
  };
  relationships:{
      'link_type': {
        'meta': {
          'comment' : string
        },
        'data': {
          'type':string
          'id':string
        }
      }
  }
}
