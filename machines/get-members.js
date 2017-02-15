module.exports = {
  friendlyName: 'Get members',
  description: 'Get information about members in a list',
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
    listID: {
      example: '57afe96172',
      description: 'The unique id for the list.',
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
    emailType: {
      example: 'html',
      description: 'The email type.',
      required: false
    },
    status: {
      example: 'subscribed',
      description: 'The subscriber’s status.',
      required: false
    },
    sinceTimestampOpt: {
      example: '2015-10-21T15:41:36+00:00',
      description: 'Restrict results to subscribers who opted-in after the set timeframe.',
      required: false
    },
    beforeTimestampOpt: {
      example: '2015-10-21T15:41:36+00:00',
      description: 'Restrict results to subscribers who opted-in before the set timeframe.',
      required: false
    },
    sinceLastChanged: {
      example: '2015-10-21T15:41:36+00:00',
      description: 'Restrict results to subscribers whose information changed after the set timeframe.',
      required: false
    },
    beforeLastChanged: {
      example: '2015-10-21T15:41:36+00:00',
      description: 'Restrict results to subscribers whose information changed before the set timeframe.',
      required: false
    },
    uniqueEmailID: {
      example: 'a865ca2957',
      description: 'A unique identifier for the email address across all MailChimp lists. ',
      required: false
    },
    vipOnly: {
      example: 'false',
      description: 'A filter to return only the list’s VIP members.',
      required: false
    },
    interestCategoryID: {
      example: 'a1e9f4b7f6',
      description: 'The unique id for the interest category.',
      required: false
    },
    interestIDs: {
      example: '9112523ad7, 513811fc2',
      description: 'Used to filter list members by interests. Must be accompanied by interest_category_id and interest_match. The value must be a comma separated list of interest ids present for the given interest category.',
      required: false
    },
    interestMatch: {
      example: 'any',
      description: 'Used to filter list members by interests. Must be accompanied by interest_category_id and interest_ids. “any” will match a member with any of the interest supplied, “all” will only match members with every interest supplied, and “none” will match members without any of the interest supplied.',
      required: false
    }
  },

  defaultExit: 'success',

  exits: {
    error: {
      description: 'Unexpected error occurred.'
    },
    success: {
      description: 'Returns the information about members.',
      example: {

        members: [{
          id: 'f777bbffab8d1ceca8b757df63c47cb8',
          email_address: 'urist.mcvankab+1@freddiesjokes.co',
          unique_email_id: '882e9bec19',
          email_type: 'html',
          status: 'subscribed',
          merge_fields: '[Object]',
          interests: '[Object]',
          stats: '[Object]',
          ip_signup: '198.2.191.34',
          timestamp_signup: '2015-09-15 17:24:43',
          ip_opt: '66.249.85.180',
          timestamp_opt: '2015-09-15 17:27:16',
          member_rating: 2,
          last_changed: '2015-09-15 17:27:16',
          language: 'en',
          vip: false,
          email_client: '',
          location: '[Object]',
          last_note: '[Object]',
          list_id: '57afe96172',
          _links: [{
              "rel": "self",
              "href": "https://usX.api.mailchimp.com/3.0/lists/57afe96172/members/f777bbffab8d1ceca8b757df63c47cb8",
              "method": "GET",
              "targetSchema": "https://api.mailchimp.com/schema/3.0/Lists/Members/Instance.json"
            },
            {
              "rel": "parent",
              "href": "https://usX.api.mailchimp.com/3.0/lists/57afe96172/members",
              "method": "GET",
              "targetSchema": "https://api.mailchimp.com/schema/3.0/Lists/Members/Collection.json",
              "schema": "https://api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json"
            },
            {
              "rel": "update",
              "href": "https://usX.api.mailchimp.com/3.0/lists/57afe96172/members/f777bbffab8d1ceca8b757df63c47cb8",
              "method": "PATCH",
              "schema": "https://api.mailchimp.com/schema/3.0/Lists/Members/Instance.json"
            },
            {
              "rel": "upsert",
              "href": "https://usX.api.mailchimp.com/3.0/lists/57afe96172/members/f777bbffab8d1ceca8b757df63c47cb8",
              "method": "PUT",
              "schema": "https://api.mailchimp.com/schema/3.0/Lists/Members/Instance.json"
            },
            {
              "rel": "delete",
              "href": "https://usX.api.mailchimp.com/3.0/lists/57afe96172/members/f777bbffab8d1ceca8b757df63c47cb8",
              "method": "DELETE"
            },
            {
              "rel": "activity",
              "href": "https://usX.api.mailchimp.com/3.0/lists/57afe96172/members/f777bbffab8d1ceca8b757df63c47cb8/activity",
              "method": "GET",
              "targetSchema": "https://api.mailchimp.com/schema/3.0/Lists/Members/Activity/Collection.json"
            },
            {
              "rel": "goals",
              "href": "https://usX.api.mailchimp.com/3.0/lists/57afe96172/members/f777bbffab8d1ceca8b757df63c47cb8/goals",
              "method": "GET",
              "targetSchema": "https://api.mailchimp.com/schema/3.0/Lists/Members/Goals/Collection.json"
            },
            {
              "rel": "notes",
              "href": "https://usX.api.mailchimp.com/3.0/lists/57afe96172/members/f777bbffab8d1ceca8b757df63c47cb8/notes",
              "method": "GET",
              "targetSchema": "https://api.mailchimp.com/schema/3.0/Lists/Members/Notes/Collection.json"
            }
          ]
        }],

        list_id: '57afe96172',
        total_items: 1,

        _links: [{
            'rel': 'self',
            'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/members',
            'method': 'GET',
            'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/Members/Collection.json',
            'schema': 'https://api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json'
          },
          {
            'rel': 'parent',
            'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172',
            'method': 'GET',
            'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/Instance.json'
          },
          {
            'rel': 'create',
            'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/members',
            'method': 'POST',
            'schema': 'https://api.mailchimp.com/schema/3.0/Lists/Members/Instance.json'
          }
        ],

      }
    }
  },

  fn: function (inputs, exits) {
    var request = require('request')

    request.get({
      url: 'https://' + inputs.dataCenter + '.api.mailchimp.com/3.0/lists/' + inputs.listID + '/members',
      auth: {
        user: 'username',
        password: inputs.apiKey
      },
      qs: {
        fields: inputs.fields,
        exclude_fields: inputs.excludeFields,
        count: inputs.count,
        offset: inputs.offset,
        email_type: inputs.emailType,
        status: inputs.status,
        since_timestamp_opt: inputs.sinceTimestampOpt,
        before_timestamp_opt: inputs.beforeTimestampOpt,
        since_last_changed: inputs.sinceLastChanged,
        before_last_changed: inputs.beforeLastChanged,
        unique_email_id: inputs.uniqueEmailID,
        vip_only: inputs.vipOnly,
        interest_category_id: inputs.interestCategoryID,
        interest_ids: inputs.interestIDs,
        interest_match: inputs.interestMatch
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
        members: parsedBody.members,
        list_id: parsedBody.list_id,
        total_items: parsedBody.total_items,
        _links: parsedBody._links
      })
    })
  }

};
