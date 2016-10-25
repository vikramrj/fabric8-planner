import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let workitems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((n) => {
      return {'fields': {'system.assignee': 'someUser' + n,
                         'system.creator': 'someOtherUser' + n,
                         'system.description': 'Some Description ' + n,
                         'system.state': 'new',
                         'system.title': 'Some Title ' + n},
              'id': '' + n,
              'type': 'system.userstory',
              'version': 1};
    });

    let loginStatus = {
      'status': 200,
      'responseText': 'Good Job'
    };

    let workitemtypes = [
    {
      'fields': {
        'system.assignee': {
          'required': false,
          'type': {
            'kind': 'user'
          }
        },
        'system.creator': {
          'required': true,
          'type': {
            'kind': 'user'
          }
        },
        'system.description': {
          'required': false,
          'type': {
            'kind': 'string'
          }
        },
        'system.remote_item_id': {
          'required': false,
          'type': {
            'kind': 'string'
          }
        },
        'system.state': {
          'required': true,
          'type': {
            'baseType': 'string',
            'kind': 'enum',
            'values': [
              'new',
              'open',
              'in progress',
              'resolved',
              'closed'
            ]
          }
        },
        'system.title': {
          'required': true,
          'type': {
            'kind': 'string'
          }
        }
      },
      'name': 'system.userstory',
      'version': 0
    },
    {
      'fields': {
        'system.assignee': {
          'required': false,
          'type': {
            'kind': 'user'
          }
        },
        'system.creator': {
          'required': true,
          'type': {
            'kind': 'user'
          }
        },
        'system.description': {
          'required': false,
          'type': {
            'kind': 'string'
          }
        },
        'system.remote_item_id': {
          'required': false,
          'type': {
            'kind': 'string'
          }
        },
        'system.state': {
          'required': true,
          'type': {
            'baseType': 'string',
            'kind': 'enum',
            'values': [
              'new',
              'open',
              'in progress',
              'resolved',
              'closed'
            ]
          }
        },
        'system.title': {
          'required': true,
          'type': {
            'kind': 'string'
          }
        }
      },
      'name': 'system.valueproposition',
      'version': 0
    },
    {
      'fields': {
        'system.assignee': {
          'required': false,
          'type': {
            'kind': 'user'
          }
        },
        'system.creator': {
          'required': true,
          'type': {
            'kind': 'user'
          }
        },
        'system.description': {
          'required': false,
          'type': {
            'kind': 'string'
          }
        },
        'system.remote_item_id': {
          'required': false,
          'type': {
            'kind': 'string'
          }
        },
        'system.state': {
          'required': true,
          'type': {
            'baseType': 'string',
            'kind': 'enum',
            'values': [
              'new',
              'open',
              'in progress',
              'resolved',
              'closed'
            ]
          }
        },
        'system.title': {
          'required': true,
          'type': {
            'kind': 'string'
          }
        }
      },
      'name': 'system.fundamental',
      'version': 0
    },
    {
      'fields': {
        'system.assignee': {
          'required': false,
          'type': {
            'kind': 'user'
          }
        },
        'system.creator': {
          'required': true,
          'type': {
            'kind': 'user'
          }
        },
        'system.description': {
          'required': false,
          'type': {
            'kind': 'string'
          }
        },
        'system.remote_item_id': {
          'required': false,
          'type': {
            'kind': 'string'
          }
        },
        'system.state': {
          'required': true,
          'type': {
            'baseType': 'string',
            'kind': 'enum',
            'values': [
              'new',
              'open',
              'in progress',
              'resolved',
              'closed'
            ]
          }
        },
        'system.title': {
          'required': true,
          'type': {
            'kind': 'string'
          }
        }
      },
      'name': 'system.experience',
      'version': 0
    },
    {
      'fields': {
        'system.assignee': {
          'required': false,
          'type': {
            'kind': 'user'
          }
        },
        'system.creator': {
          'required': true,
          'type': {
            'kind': 'user'
          }
        },
        'system.description': {
          'required': false,
          'type': {
            'kind': 'string'
          }
        },
        'system.remote_item_id': {
          'required': false,
          'type': {
            'kind': 'string'
          }
        },
        'system.state': {
          'required': true,
          'type': {
            'baseType': 'string',
            'kind': 'enum',
            'values': [
              'new',
              'open',
              'in progress',
              'resolved',
              'closed'
            ]
          }
        },
        'system.title': {
          'required': true,
          'type': {
            'kind': 'string'
          }
        }
      },
      'name': 'system.feature',
      'version': 0
    },
    {
      'fields': {
        'system.assignee': {
          'required': false,
          'type': {
            'kind': 'user'
          }
        },
        'system.creator': {
          'required': true,
          'type': {
            'kind': 'user'
          }
        },
        'system.description': {
          'required': false,
          'type': {
            'kind': 'string'
          }
        },
        'system.remote_item_id': {
          'required': false,
          'type': {
            'kind': 'string'
          }
        },
        'system.state': {
          'required': true,
          'type': {
            'baseType': 'string',
            'kind': 'enum',
            'values': [
              'new',
              'open',
              'in progress',
              'resolved',
              'closed'
            ]
          }
        },
        'system.title': {
          'required': true,
          'type': {
            'kind': 'string'
          }
        }
      },
      'name': 'system.bug',
      'version': 0
    }
  ];


    let user = {
      'fullName': 'Sudipta Sen',
      'imageURL': 'https://avatars.githubusercontent.com/u/2410474?v=3'
    };

    let linkCategories = {
      "meta": { "comment": "Note, that the 'id' field is optional for a create request." },
      "id": "1",
      "type": "linkcategories",
      "attributes": {
        "name": "test",
        "title": "This category is reserved for link types that belong to the 'test' subsystem."
      }
    }

    let linkTypes = [
      {
        "type": "linktypes",
        "id": "1",
        "attributes": {
          "name": "tested-by-link-type",
          "description": "A test work item can 'test' if a the code in a pull request passes the tests.",
          "source_type": "test-workitemtype",
          "target_type": "pull-request-workitemttype",
          "forward_name": "tests",
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
          "forward_name": "tests1",
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
    ];

    let link = {
      "meta": { "comment": "Note, that the 'id' field is optional for a create request." },
      "id": "40bbdd3d-8b5d-4fd6-ac90-7236b669af04",
      "type": "linktypes",
      "attributes": {
        "name": "tested-by-link-type",
        "description": "A test work item can 'test' if a the code in a pull request passes the tests.",
        "source_type": "test-workitemtype",
        "target_type": "pull-request-workitemttype",
        "forward_name": "tests",
        "reverse_name": "tested by"
      },
      "relationships": {
        "link_category": {
          "meta": { "comment": "See the creation of link categories for what this ID means" },
          "data": { "type": "link_category", "id": "6c5610be-30b2-4880-9fec-81e4f8e4fd76" }
        }
      }
    }

    return {loginStatus, workitems, workitemtypes, user, linkCategories, linkTypes, link};
  }
}