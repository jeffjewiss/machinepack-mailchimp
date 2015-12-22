module.exports = {
  friendlyName: 'Get mailing lists',
  description: 'Get all of the mailing lists for an account.',
  extendedDescription: '',
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
    beforeDateCreated: {
      example: 'true',
      description: 'Restrict response to lists created before the set date.',
      required: false
    },
    sinceDateCreated: {
      example: 'true',
      description: 'Restrict results to lists created after the set date.',
      required: false
    },
    beforeCampaignLastSent: {
      example: 'true',
      description: 'Restrict results to lists created before the last campaign send date.',
      required: false
    },
    sinceCampaignLastSent: {
      example: 'true',
      description: 'Restrict results to lists created after the last campaign send date.',
      required: false
    }
  },
  defaultExit: 'success',
  exits: {
    error: {
      description: 'Unexpected error occurred.'
    },
    success: {
      description: 'Returns the lists.',
      example: {
        lists: [
          {
            id: 'adsf8ydfsa80',
            name: 'My First List',
            contact: '[Object]',
            permission_reminder: '',
            use_archive_bar: true,
            campaign_defaults: '[Object]',
            notify_on_subscribe: 'me@example.com',
            notify_on_unsubscribe: 'me@example.com',
            date_created: '2015-06-04T04:05:18+00:00',
            list_rating: 0,
            email_type_option: false,
            subscribe_url_short: 'http://example.com',
            subscribe_url_long: 'http://nodeschool.us9.list-manage1.com/subscribe?u=dsaf98uadsfhjioafdsljafs',
            beamer_address: 'us2-adsfoysdafh-adsf98asdf89@inbound.mailchimp.com',
            visibility: 'prv',
            modules: [],
            stats: '[Object]',
            _links: '[Object]'
          }
        ],
        _links: [
          {
            rel: 'self',
            href: 'https://us9.api.mailchimp.com/3.0/lists',
            method: 'GET',
            targetSchema: 'https://us9.api.mailchimp.com/schema/3.0/Lists/Collection.json',
            schema: 'https://us9.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json'
          },
          {
            rel: 'parent',
            href: 'https://us9.api.mailchimp.com/3.0/',
            method: 'GET',
            targetSchema: 'https://us9.api.mailchimp.com/schema/3.0/Root.json'
          },
          {
            rel: 'create',
            href: 'https://us9.api.mailchimp.com/3.0/lists',
            method: 'POST',
            schema: 'https://us9.api.mailchimp.com/schema/3.0/Lists/Instance.json'
          }
        ],
        total_items: 1
      }
    }
  },
  fn: function (inputs, exits) {
    var request = require('request')

    request.get({
      url: 'https://' + inputs.dataCenter + '.api.mailchimp.com/3.0/lists',
      auth: {
        user: 'username',
        password: inputs.apiKey
      },
      form: {
        filters: inputs.filters,
        start: inputs.start,
        limit: inputs.limit,
        sort_field: inputs.sortField,
        sort_dir: inputs.sortDir
      }
    }, function (err, response, body) {
      if (err) {
        return exits.error(err)
      }
      if (response.statusCode > 299 || response.statusCode < 200) {
        return exits.error(response.statusCode)
      }

      var parsedBody = JSON.parse(body)

      return exits.success({
        lists: parsedBody.lists,
        totalItems: parsedBody.total_items,
        _links: parsedBody['_links']
      })
    })
  }
}
