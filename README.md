# CIC Website
An update to the [CIC website](http://www.ciconline.co.uk), converted to use Node/Gulp as an asset pipeline.

Involves static HTML templating, CSS/JS concat/minification and BrowserSync for auto reload/live CSS injection.

To build simply run `npm install`, then `gulp` will start the whole pipeline by default. Everything compiles to static files in the `build` folder which can then be hosted on a web server.
