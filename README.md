# hugo-alpine-test

[![Netlify Status](https://api.netlify.com/api/v1/badges/6eb2ac56-7b4d-430e-832e-f644d19b57e3/deploy-status)](https://app.netlify.com/sites/agitated-kilby-da786e/deploys)


Just a simple test repo to test out AlpineJS in combo with Hugo. Live demo [here](https://agitated-kilby-da786e.netlify.com/).

You need Hugo extended version + Go installed to build. If that is installed you can do:

```
hugo server
```

Note: Before https://github.com/gohugoio/hugo/pull/6822 gets merged, you need to run with `hugo server --disableLiveReload` for Turbolinks to work.

And navigate to http://localhost:1313/

Alsos see:

* The AlpineJS docs, see https://github.com/alpinejs/alpine
* This project uses Bulma for styling see https://bulma.io/

You may also want to follow this issue, which, once solved, will make AlpineJS a more or less complete solution for common problem:

https://github.com/alpinejs/alpine/issues/49
