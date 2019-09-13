# Nacelle Justuno Nuxt Module

Integrate [Justuno](https://www.justuno.com/) pop-ups and banners on your [Nacelle](https://getnacelle.com/) Nuxt project.

## Requirements

* A Nacelle project set up locally. See https://docs.getnacelle.com for getting started.
* Justuno app added to your Shopify store

## Setup

Once you hace Nacelle and Justuno set up you can install this module in your project from `npm`:

```
npm install @nacelle/nacelle-justuno-nuxt-module --save
```

After the package has installed, open `nuxt.config.js`. Under `modules` add `@nacelle/nacelle-justuno-nuxt-module` to the array.

Next go to your Justuno dashboard and find the page for "Embed Code". In the embed code find `window.ju_num="<Your Justuno Account ID>";` and copy the string between the quotes to get your account id.

Back in `nuxt.config.js` add `justuno: '<Justuno Account ID>'` to the `nacelle` config object.

Justuno is now connected to your Nacelle project and will begin displaying any banners or popups you have configured.
