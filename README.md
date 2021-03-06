# Shuffle #

*	Shuffle is an online local bulletin board that empowers local communities through emphasis on maximum post visibility. 

*	Shuffle is like all the niche Facebook groups combined into one website.

* 	The name "Shuffle" describes two things:
	* The grid layout of cards resembles the typical layout of the antiquated physical bulletin boards, but with a modern design.
	
	* These cards can be shuffled, to bubble up posts that are yet to be discovered. 

## Overview ##

*	It can be used as a local bartering network. People post second hand items they want to sell to their community.

* 	It can be used to advertise upcoming events.

*	It can be used to alert an entire geographic community of urgent news.

*	It can be used for micro-entrepreneurs - e.g. college students who can make and sell food to their colleagues.

*	It can be used as a social network.


## Application Structure ##

* api (Node, Firebase)
	* lib
		* cors
			* index.js
		* firbase_utils
			* firebase_feed.js
	* routes
		* active.js
		* contributions.js
		* explore.js
		* index.js
		* likes.js
		* uploads.js
		* user.js
	* config.js
	* index.js

	* processes.json

* app (React)
	* bin
	* modules
		* actions
		* components
		* reducers
		* routes
		* utils
		* App.js 
	* public
	* routes
		* index.js
	* views
		* app.ejs
		* error.ejs
		* index.ejs
	* app.js
	* .babelrc (gitignore)
	* config.js
	* processes.js
	* webpack.config.js
* www
	* bin
	* public
	* routes
	* views

* env.sh (gitignore)






