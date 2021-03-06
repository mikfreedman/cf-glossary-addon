<img src="icons/pivotal-glossary-128.png" align="right" />

# Pivotal Glossary
>This chrome extension will show results from [cf-glossary.cfapps.io](http://cf-glossary.cfapps.io/)


[![CircleCI](https://circleci.com/gh/mikfreedman/pivotal-glossary-clients.svg?style=svg)](https://circleci.com/gh/mikfreedman/pivotal-glossary-clients)

* You use it via the Chrome context menu by selecting "Lookup in Pivotal Glossary"
* The shell for this application was generated using [Extensionizr](http://extensionizr.com)
* Lookup is performed locally in your browser; no data is sent to any remote server.
* You can contribute new definitions to the github repo at [pivotal-cf/glossary](https://github.com/pivotal-cf/glossary)

## Installing the Extension

### As an extension from the Chrome Webstore
[https://chrome.google.com/webstore/detail/pivotal-glossary/ljjopgdkacddgfcpfofhngkbopmoamkk](https://chrome.google.com/webstore/detail/pivotal-glossary/ljjopgdkacddgfcpfofhngkbopmoamkk)

### As an unpacked local extension

1. Follow the [Local Development](#local-development) instructions below
1. Go to [chrome://extensions/](chrome://extensions/)
1. Ensure that the Developer mode checkbox in the top right-hand corner is checked.
1. `npm build`
1. Click Load unpacked extension… to pop up a file-selection dialog.
1. Navigate to the directory in which your extension files live, find the `build` directory and select it.

Each time you add a new feature, you will need to reload the extension from the [chrome://extensions/](chrome://extensions/) page.


## Local Development

### Installation

__OSX__

```bash
brew update
brew install nodejs npm
npm install
```

__Linux (Debian Flavor)__

``` bash
sudo apt update
sudo apt install npm

# https://github.com/joyent/node/issues/3911
if [[ ! -e /usr/bin/node ]] ; then
  sudo ln -s /usr/bin/nodejs /usr/bin/node
fi
```

__Then:__

```bash
npm install
```

### Tests

```bash
npm test
```

## Deployment

This application is automatically deployed to the Chrome Web Store via CircleCI ([mikfreedman/pivotal-glossary-clients](https://circleci.com/gh/mikfreedman/pivotal-glossary-clients)).

The Circle CI build must be configured with the following environment variables:

* APP_ID
* CLIENT_SECRET
* CLIENT_ID
* REFRESH_TOKEN

This page: https://developer.chrome.com/webstore/using_webstore_api explains how to go about getting these keys. It should go without saying, but **do not** store these variables in your `circle.yml` but rather as encrypted variables on circleci itself.

In order to manually deploy this application, you must build it with:

```bash
npm run build
```
Then upload the zip from `/dist` via the [Chrome Web Store developer dashboard](https://chrome.google.com/webstore/developer/dashboard)

## Related Projects

| Project | Description |
| ------- | ----------- |
| [pivotal-cf/glossary](https://github.com/pivotal-cf/glossary) | Glossary upon which this addon is based, hosted here: <https://cf-glossary.cfapps.io> |
| [Manifaust/cloud-glossary](https://github.com/Manifaust/cloud-glossary) | Another Glossary project, hosted here: <https://glossary.cfapps.io> |
| [motevets/pivotal-glossary](https://github.com/motevets/pivotal-glossary) | Chrome extension that will expand acronyms based on [pivotal-cf/glossary](https://github.com/pivotal-cf/glossary). [webstore link](https://chrome.google.com/webstore/detail/pivotal-glossary/ldjikeaflhaeahnfcloapnfpnmbjloog) |
