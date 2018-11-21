Task app with Hapi and MongoDB 
===

> This repo is for getting started building a tech stack with core tools like Node.js, Hapi v17 and MongoDB with Mongoose ORM

Full tutorial that accompanies this code is available [on Medium](https://medium.com/employbl/build-a-task-app-with-hapi-mongodb-and-vue-js-dc05c1bb8778).


### Seed some tasks

``` 
$ node src/utils/seed.js
```

### Start server

``` 
$ npm run start
```

### Roadmap

- [ ] Add relationships with [mongoose-autopopulate](https://github.com/mongodb-js/mongoose-autopopulate)
- [ ] Add [jsonwebtoken](https://jwt.io/) authentication

### Resources

- [Developing RESTful APIs with Hapi](https://auth0.com/blog/developing-restful-apis-with-hapijs/) - Auth0 blog


# Tutorial notes 

> If you run into `dyld: lazy symbol binding failed: Symbol not found` error, then running `npm rebuild bcrypt --build-from-source` will fix it.

- We use Mandrill by Mailchimp to send transactional email. You'll need a Mailchimp account and to [enable Mandrill](https://mailchimp.com/help/add-or-remove-mandrill/). Login to Mailchimp > Account > Transactional > Add Mandrill. This requires a Mailchimp paid plan, starting at a minimum of $10/month. Learn more about [how Mandrill billing works](https://mandrill.zendesk.com/hc/en-us/articles/205582847-How-Mandrill-Billing-Works)