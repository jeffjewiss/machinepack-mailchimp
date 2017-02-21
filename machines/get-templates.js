module.exports = {
  friendlyName: 'Get templates',
  description: 'Get a list of an account’s available templates.',
  cacheable: false,
  sync: false,

  inputs: {
    apiKey: {
      example: 'xAmBxAmBxAmBkjbyKkjbyKkjbyK-us6',
      description: 'An API key created for your account.',
      required: true
    },
    dataCenter: {
      example: 'us6',
      description: 'The datacenter that houses the information for your account. Typically the last part of the API key.',
      required: true
    },
    fields: {
      example: '["one", "two"]',
      description: 'A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.',
      required: false
    },
    excludeFields: {
      example: '["one", "two"]',
      description: 'A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.',
      required: false
    },
    count: {
      example: 5,
      description: 'The number of records to return.',
      required: false
    },
    offset: {
      example: 10,
      description: 'The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.',
      required: false
    },
    createdBy: {
      example: 'John Doe',
      description: 'The MailChimp account user who created the template.',
      required: false
    },
    sinceCreatedAt: {
      example: '2015-09-16 13:16:04',
      description: 'Restrict the response to templates created after the set date.',
      required: false
    },
    beforeCreatedAt: {
      example: '2015-09-10 09:43:27',
      description: 'Restrict the response to templates created before the set date.',
      required: false
    },
    type: {
      example: 'base',
      description: 'Limit results based on template type. ("user", "base" or "gallery")',
      required: false
    },
    folderID: {
      example: '0b4b629ac7',
      description: 'The unique folder id.',
      required: false
    }

  },

  exits: {
    error: {
      description: 'Returns the error response.',
      example: { 
        type: 'http://developer.mailchimp.com/documentation/mailchimp/guides/error-glossary/',
        title: 'Resource Not Found',
        status: 404,
        detail: 'The requested resource could not be found.',
        instance: '' 
      }      
    },
    success: {
      description: 'Returns the information about all templates.',
      example: {
        "templates": [
          {
            "id": 2000094,
            "type": "gallery",
            "name": "Event by Veerle Pieters",
            "drag_and_drop": true,
            "responsive": true,
            "category": "Events",
            "date_created": "2015-09-16 13:16:04",
            "created_by": "",
            "active": true,
            "folder_id": 0,
            "thumbnail": "http://gallery.mailchimp.com/27aac8a65e64c994c4416d6b8/images/event_veerle_pieters_nb.png",
            "share_url": "",
            "_links": [
              {
                "rel": "self",
                "href": "https://usX.api.mailchimp.com/3.0/templates/2000094",
                "method": "GET",
                "targetSchema": "https://api.mailchimp.com/schema/3.0/Templates/Instance.json"
              },
              {
                "rel": "parent",
                "href": "https://usX.api.mailchimp.com/3.0/templates",
                "method": "GET",
                "targetSchema": "https://api.mailchimp.com/schema/3.0/Templates/Collection.json",
                "schema": "https://api.mailchimp.com/schema/3.0/CollectionLinks/Templates.json"
              },
              {
                "rel": "delete",
                "href": "https://usX.api.mailchimp.com/3.0/templates/2000094",
                "method": "DELETE"
              }
            ]
          }
        ],
        "_links": [
          {
            "rel": "parent",
            "href": "https://usX.api.mailchimp.com/3.0/",
            "method": "GET",
            "targetSchema": "https://api.mailchimp.com/schema/3.0/Root.json"
          },
          {
            "rel": "self",
            "href": "https://usX.api.mailchimp.com/3.0/templates",
            "method": "GET",
            "targetSchema": "https://api.mailchimp.com/schema/3.0/Templates/Collection.json",
            "schema": "https://api.mailchimp.com/schema/3.0/CollectionLinks/Templates.json"
          }
        ],
        "total_items": 1
      }
    },

  },

  fn: function(inputs, exits) {
    var request = require('request')

    request.get({
      url: 'https://' + inputs.dataCenter + '.api.mailchimp.com/3.0/templates',
      auth: {
        user: 'username',
        password: inputs.apiKey
      },
      json: true,
      qs: {
        fields: inputs.fields,
        exclude_fields: inputs.excludeFields,
        count: inputs.count,
        offset: inputs.offset,
        created_by: inputs.createdBy,
        since_created_at: inputs.sinceCreatedAt,
        before_created_at: inputs.beforeCreatedAt,
        type: inputs.type,
        folder_id: inputs.folderID
      }
    }, function (err, response, body) {
      if (err) {
        return exits.error(err)
      }
      if (response.statusCode > 299 || response.statusCode < 200) {
        var error = body.status ? body : {status: response.statusCode}
        return exits.error(error)
      }

      return exits.success(body)
    })
  },



};