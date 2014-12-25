Roundcube skin "Owncloud login"
=================================

**Note:** this is just a skin, it offers no functional improvements or alterations.

A skin for the login page of [Roundcube](http://roundcube.net/) webmail, based on the design of [ownCloud](https://owncloud.org/)'s login page.

Uses code and assets (images) from the default ownCloud theme, Roundcube's "Larry" theme and a random image found on the internet (don't sue me) as the main logo.

Also uses [jQuery](https://jquery.com/), because I'm lazy (it should be easy enough to rewrite those 5 lines in vanilla JavaScript). 

## Requirements

1. Roundcube (tested on version `1.0.4`, should work just fine on other versions that include the "Larry" skin)

## Compatibility

So far tested only on modern browsers, no clue what this thing does to IE. Use at your own risk.

## Installation

This skin only alters the login page so you'll be using it with some other skin for the main mailbox interface.
By default this skin uses "Larry" skin but you can change this by altering `meta.json`, line `"extends": "larry"` to whatever skin you have installed.

1. Drop this folder into `/roundcube/skins/` (*Note:* each skin has its own folder under `/skins/`, this one should too)
2. You're done! Log in and change the skin under user interface settings.

You can also just merge this folder with that of another skin; the only file that conflicts should be `/templates/login.html`. Keep the one from this skin and you're done. If there are other conflicts, you're probably better off just using the method above.

(Optional) You can set this (or any other) skin as the default for your Roundcube installation by modifying (or adding if it's not there already) the line `$config['skin'] = 'ownCloud login';` to the config file `/roundcube/config/config.inc.php`.

## Attribution

Based on the skin "Larry" for Roundcube, copyright (c) 2012, The Roundcube Dev Team, licensed under the Creative Commons Attribution-ShareAlike License (see http://creativecommons.org/licenses/by-sa/3.0/ for details).

Design based on the default skin of Owncloud, copyright (c) 2011, Jan-Christoph Borchardt, http://jancborchardt.net, licensed under the Affero General Public License version 3 or later (see https://www.gnu.org/licenses/agpl-3.0.html for details).
