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

This skin only alters the login page so you'll be using it with some other skin for the main mailbox interface

#### With the "Larry" skin

1. Drop this folder into `/roundcube/skins/` (*Note:* each theme has its own folder under `/skins/`, this one should too)
2. You're done! Log in and change the skin under user interface settings.

#### With the "Classic" skin

1. Open the file `meta.json` and change the line `"extends": "larry",` to `"extends": "classic",`
2. Drop this folder into `/roundcube/skins/` (*Note:* each theme has its own folder under `/skins/`, this one should too) 
3. You're done! Log in and change the skin under user interface settings.

#### With a custom skin

1. Back up your current skin directory
2. Drop the contents of this folder into the folder of your preferred skin
3. When asked to overwrite `/templates/login.html` say yes (no other files should conflict, if they do you'll have some renaming to do)
4. You're done!


