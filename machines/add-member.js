module.exports = {
  friendlyName: 'Add member',
  description: 'Add a new member to the list.',
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
    emailAddress: {
      example: 'test@email.com',
      description: 'Email address for a subscriber.',
      required: true
    },
    emailType: {
      example: 'html',
      description: 'Type of email this member asked to get (‘html’ or ‘text’).',
      required: false
    },
    status: {
      example: 'subscribed',
      description: 'Subscriber’s current status. (‘subscribed’, ‘unsubscribed’, ‘cleaned’, ‘pending’, or ‘transactional’)',
      required: true
    },
    mergeFields: {
      example: {},
      description: 'An individual merge var and value for a member.',
      required: false
    },
    interests: {
      example: {},
      description: 'The key of this object’s properties is the ID of the interest in question.',
      required: false
    },
    language: {
      example: 'en',
      description: 'If set/detected, the subscriber’s language.',
      required: false
    },
    vip: {
      example: 'true',
      description: 'VIP status for subscriber.',
      required: false
    },
    location: {
      example: {},
      description: 'Subscriber location information.',
      required: false
    },
    ipSignup: {
      example: '127.0.0.1',
      description: 'IP address the subscriber signed up from.',
      required: false
    },
    timestampSignup: {
      example: '2015-10-21T15:41:36+00:00',
      description: 'The date and time the subscriber signed up for the list.',
      required: false
    },
    ipOpt: {
      example: '198.2.191.34',
      description: 'The IP address the subscriber used to confirm their opt-in status.',
      required: false
    },
    timestampOpt: {
      example: '2015-10-21T15:41:36+00:00',
      description: 'The date and time the subscribe confirmed their opt-in status.',
      required: false
    }
  },

  exits: {
    error: {
      description: 'Returns the error response.',
      example: {
        type: 'http://developer.mailchimp.com/documentation/mailchimp/guides/error-glossary/',
        title: 'Member Exists',
        status: 400,
        detail: 'test@email.com is already a list member. Use PUT to insert or update list members.',
        instance: ''
      }
    },
    success: {
      description: 'Returns the information about the new member.',
      example: {
        id: '852aaa9532cb36adfb5e9fef7a4206a9',
        email_address: 'urist.mcvankab+1@freddiesjokes.co',
        unique_email_id: 'fab20fa03d',
        email_type: 'html',
        status: 'subscribed',
        merge_fields: {},
        interests: {},
        stats: {},
        ip_signup: '198.2.191.34',
        timestamp_signup: '2015-09-15 17:24:43',
        ip_opt: '66.249.85.180',
        timestamp_opt: '2015-09-15 17:27:16',
        member_rating: 2,
        last_changed: '2015-09-15 17:27:16',
        language: 'en',
        vip: false,
        email_client: '',
        location: {},
        list_id: '57afe96172',
        _links: [
          {
            'rel': 'self',
            'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/members/852aaa9532cb36adfb5e9fef7a4206a9',
            'method': 'GET',
            'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/Members/Instance.json'
          },
          {
            'rel': 'parent',
            'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/members',
            'method': 'GET',
            'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/Members/Collection.json',
            'schema': 'https://api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json'
          },
          {
            'rel': 'update',
            'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/members/852aaa9532cb36adfb5e9fef7a4206a9',
            'method': 'PATCH',
            'schema': 'https://api.mailchimp.com/schema/3.0/Lists/Members/Instance.json'
          },
          {
            'rel': 'upsert',
            'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/members/852aaa9532cb36adfb5e9fef7a4206a9',
            'method': 'PUT',
            'schema': 'https://api.mailchimp.com/schema/3.0/Lists/Members/Instance.json'
          },
          {
            'rel': 'delete',
            'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/members/852aaa9532cb36adfb5e9fef7a4206a9',
            'method': 'DELETE'
          },
          {
            'rel': 'activity',
            'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/members/852aaa9532cb36adfb5e9fef7a4206a9/activity',
            'method': 'GET',
            'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/Members/Activity/Collection.json'
          },
          {
            'rel': 'goals',
            'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/members/852aaa9532cb36adfb5e9fef7a4206a9/goals',
            'method': 'GET',
            'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/Members/Goals/Collection.json'
          },
          {
            'rel': 'notes',
            'href': 'https://usX.api.mailchimp.com/3.0/lists/57afe96172/members/852aaa9532cb36adfb5e9fef7a4206a9/notes',
            'method': 'GET',
            'targetSchema': 'https://api.mailchimp.com/schema/3.0/Lists/Members/Notes/Collection.json'
          }
        ]
      }
    }
  },

  fn: function(inputs, exits) {
    var request = require('request')

    request.post({
      url: 'https://' + inputs.dataCenter + '.api.mailchimp.com/3.0/lists/' + inputs.listID + '/members',
      auth: {
        user: 'username',
        password: inputs.apiKey
      },
      json: true,
      body: {
        email_address: inputs.emailAddress,
        email_type: inputs.emailType,
        status: inputs.status,
        merge_fields: inputs.mergeFields,
        interests: inputs.interests,
        language: inputs.language,
        vip: inputs.vip,
        location: inputs.location,
        ip_signup: inputs.ip_signup,
        timestamp_signup: inputs.timestamp_signup,
        ip_opt: inputs.ip_opt,
        timestamp_opt: inputs.timestamp_opt
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
  }

};
