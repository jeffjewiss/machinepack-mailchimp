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
      example: 'id, name, contact.company',
      description: 'A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.',
      required: false
    },
    excludeFields: {
      example: 'id, name, contact.company',
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
    },
    email: {
      example: 'freddie@freddiesjokes.com',
      description: 'Restrict results to lists that include a specific subscriber’s email address.',
      required: false
    },
    sort_field: {
      example: 'date_created',
      description: 'Returns files sorted by the specified field. Possible values: date_created',
      required: false
    },
    sort_dir: {
      example: 'ASC',
      description: 'Determines the order direction for sorted results. Possible values: ASC, DESC',
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
            id: '57afe96172',
            name: 'Freddie\'s Jokes',
            contact: {
              company: 'MailChimp',
              address1: '675 Ponce De Leon Ave NE',
              address2: 'Suite 5000',
              city: 'Atlanta',
              state: 'GA',
              zip: '30308',
              country: 'US',
              phone: ''
            },
            permission_reminder: 'You\'re receiving this email because you just can\'t get enough of Freddie\'s jokes.',
            use_archive_bar: true,
            campaign_defaults: {
              'from_name': 'Freddie',
              'from_email': 'freddie@freddiesjokes.com',
              'subject': '',
              'language': 'en'
            },
            notify_on_subscribe: 'me@example.com',
            notify_on_unsubscribe: 'me@example.com',
            date_created: '2015-06-04T04:05:18+00:00',
            list_rating: 3,
            email_type_option: false,
            subscribe_url_short: 'http://example.com',
            subscribe_url_long: 'http://nodeschool.us9.list-manage1.com/subscribe?u=dsaf98uadsfhjioafdsljafs',
            beamer_address: 'us2-adsfoysdafh-adsf98asdf89@inbound.mailchimp.com',
            visibility: 'prv',
            modules: [],
            stats: {
              'member_count': 203,
              'unsubscribe_count': 0,
              'cleaned_count': 0,
              'member_count_since_send': 0,
              'unsubscribe_count_since_send': 0,
              'cleaned_count_since_send': 0,
              'campaign_count': 3,
              'campaign_last_sent': '',
              'merge_field_count': 2,
              'avg_sub_rate': 15,
              'avg_unsub_rate': 0,
              'target_sub_rate': 0,
              'open_rate': 0,
              'click_rate': 0,
              'last_sub_date': '2015-09-15T17:27:16+00:00',
              'last_unsub_date': ''
            },
            _links: [
              {
                'rel': 'self',
                'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172',
                'method': 'GET',
                'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/Instance.json'
              },
              {
                'rel': 'parent',
                'href': 'https://usX.api.mailchimp.com/3.0/lists',
                'method': 'GET',
                'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/Collection.json',
                'schema': 'https://api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json'
              },
              {
                'rel': 'update',
                'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172',
                'method': 'PATCH',
                'schema': 'https://api.mailchimp.com/schema/3.0/Lists/Instance.json'
              },
              {
                'rel': 'delete',
                'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172',
                'method': 'DELETE'
              },
              {
                'rel': 'abuse-reports',
                'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/abuse-reports',
                'method': 'GET',
                'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/Abuse/Collection.json',
                'schema': 'https://api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json'
              },
              {
                'rel': 'activity',
                'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/activity',
                'method': 'GET',
                'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/Activity/Collection.json'
              },
              {
                'rel': 'clients',
                'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/clients',
                'method': 'GET',
                'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/Clients/Collection.json'
              },
              {
                'rel': 'growth-history',
                'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/growth-history',
                'method': 'GET',
                'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/Growth/Collection.json',
                'schema': 'https://api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json'
              },
              {
                'rel': 'interest-categories',
                'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/interest-categories',
                'method': 'GET',
                'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/InterestCategories/Collection.json',
                'schema': 'https://api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json'
              },
              {
                'rel': 'members',
                'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/members',
                'method': 'GET',
                'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/Members/Collection.json',
                'schema': 'https://api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json'
              },
              {
                'rel': 'merge-fields',
                'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/merge-fields',
                'method': 'GET',
                'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/MergeFields/Collection.json',
                'schema': 'https://api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json'
              },
              {
                'rel': 'segments',
                'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/segments',
                'method': 'GET',
                'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/Segments/Collection.json',
                'schema': 'https://api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json'
              }
            ]
          }
        ],
        _links: [
          {
            'rel': 'self',
            'href': 'https://usX.api.mailchimp.com/3.0/lists',
            'method': 'GET',
            'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/Collection.json',
            'schema': 'https://api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json'
          },
          {
            'rel': 'parent',
            'href': 'https://usX.api.mailchimp.com/3.0/',
            'method': 'GET',
            'targetSchema': 'https://api.mailchimp.com/schema/3.0/Root.json'
          },
          {
            'rel': 'create',
            'href': 'https://usX.api.mailchimp.com/3.0/lists',
            'method': 'POST',
            'schema': 'https://api.mailchimp.com/schema/3.0/Lists/Instance.json'
          }
        ],
        total_items: 1,
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
        fields: inputs.fields,
        exclude_fields: inputs.excludeFields,
        count: inputs.count,
        offset: inputs.offset,
        before_date_created: inputs.beforeDateCreated,
        since_date_created: inputs.sinceDateCreated,
        before_campaign_last_sent: inputs.beforeCampaignLastSent,
        since_campaign_last_sent: inputs.sinceCampaignLastSent,
        email: inputs.email,
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
