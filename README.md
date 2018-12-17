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

# Tutorial notes 

> If you run into `dyld: lazy symbol binding failed: Symbol not found` error, then running `npm rebuild bcrypt --build-from-source` will fix it.

- We're using Mailgun because Mandrill is too expensive for what we need right now. No sense paying more than we have to for the same thing!

- You'll need to [add a domain](https://app.mailgun.com/app/domains/new) to your mailgun account. 

- If so inclined you can generate a super secure secret key using: `node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"`

