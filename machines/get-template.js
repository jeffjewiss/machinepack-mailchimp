module.exports = {
  friendlyName: 'Get template',
  description: 'Get information about a specific template.',

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
    templateID: {
      example: 2000094,
      description: 'The unique id for the template.',
      required: true
    },
    fields: {
      example: 'id, name, type',
      description: 'A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.',
      required: false
    },
    excludeFields: {
      example: 'id, _links',
      description: 'A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.',
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
      description: 'Returns the information about a specific template.',
      example: {
        'id': 2000094,
        'type': 'gallery',
        'name': 'Event by Veerle Pieters',
        'drag_and_drop': true,
        'responsive': true,
        'category': 'Events',
        'date_created': '2015-09-16 13:16:04',
        'created_by': '',
        'active': true,
        'folder_id': 0,
        'thumbnail': 'http://gallery.mailchimp.com/27aac8a65e64c994c4416d6b8/images/event_veerle_pieters_nb.png',
        'share_url': '',
        '_links': [
          {
            'rel': 'self',
            'href': 'https://usX.api.mailchimp.com/3.0/templates/2000094',
            'method': 'GET',
            'targetSchema': 'https://api.mailchimp.com/schema/3.0/Templates/Instance.json'
          },
          {
            'rel': 'parent',
            'href': 'https://usX.api.mailchimp.com/3.0/templates',
            'method': 'GET',
            'targetSchema': 'https://api.mailchimp.com/schema/3.0/Templates/Collection.json',
            'schema': 'https://api.mailchimp.com/schema/3.0/CollectionLinks/Templates.json'
          },
          {
            'rel': 'delete',
            'href': 'https://usX.api.mailchimp.com/3.0/templates/2000094',
            'method': 'DELETE'
          }
        ]
      }
    },

  },

  fn: function(inputs, exits) {
    var request = require('request')

    request.get({
      url: 'https://' + inputs.dataCenter + '.api.mailchimp.com/3.0/templates/' + inputs.templateID,
      auth: {
        user: 'username',
        password: inputs.apiKey
      },
      json: true,
      qs: {
        fields: inputs.fields,
        exclude_fields: inputs.excludeFields
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
