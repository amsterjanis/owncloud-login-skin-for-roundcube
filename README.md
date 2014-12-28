Roundcube skin '*ownCloud login*'
=================================

![Preview image](https://github.com/amsterjanis/owncloud-login-skin-for-roundcube/raw/master/preview.png)

**Note:** this is just a skin, it offers no functional improvements or alterations.

--------------------------

A skin for the login page of [Roundcube](http://roundcube.net/) webmail, based on the design of [ownCloud](https://owncloud.org/)'s login page.

Uses code (CSS tidbits) from the default ownCloud theme and and assets (icons) from Roundcube's "Larry" theme. Attributions can be found on the bottom of the page.

## Requirements

Roundcube webmail (tested on version `1.0.4`, should work just fine at least down to `0.9`, probably even older).

## Compatibility

##### Roundcube plugins

Works with [Persistent Login](http://www.insanefactory.com/roundcube-persistent-login-plugin/) plugin out of the box.

##### Browser support

So far tested only on modern browsers (Firefox 37, Chrome 39, IE 11), if you need to support IE6 use at your own risk.

## Installation

1. Drop this folder into `/roundcube/skins/` (*Note:* each skin has its own folder under `/skins/`, this one should too)
2. You're done! Log in and change the skin under user interface settings.

---------------------------

This skin only alters the login page so you'll be using it with some other skin for the main mailbox interface.
By default this skin uses the "Larry" skin but you can change this by editing the file `meta.json`. Just change 
```
"extends": "larry",
```
to whatever skin you have installed.

*Note:* You can also just merge this with another skin; the only file that conflicts should be `/templates/login.html`. Keep the one from this skin and you're done.

---------------------------

(*Optional*) You can specify the default skin for your Roundcube installation by editing the config file `/roundcube/config/config.inc.php`:
```
$config['skin'] = 'custom_skin';
``` 
where `custom_skin` is the directory of the skin (under `/skins/`).

## Attribution

Structure based on the skin "Larry" for Roundcube, copyright (c) 2012, The Roundcube Dev Team, licensed under the Creative Commons Attribution-ShareAlike License (see http://creativecommons.org/licenses/by-sa/3.0/ for details).

Design based on the default skin of ownCloud, CSS styles copyright (c) 2011, Jan-Christoph Borchardt, http://jancborchardt.net, licensed under the Affero General Public License version 3 or later (see https://www.gnu.org/licenses/agpl-3.0.html for details).
