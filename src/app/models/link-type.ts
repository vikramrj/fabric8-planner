import { LinkCategory } from './link-category';

export class LinkType {
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
      'link_category': LinkCategory
  }
}