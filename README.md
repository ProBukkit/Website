# Website
This is the web design for all the different web pages on the PoweredRails web server.

## Static Resourcing
Please keep in mind that, any resource you pull onto a web page should come directly from the static directory.
For instance, resourcing an image? Try `static/images/my_image.png`.  Fetching a stylesheet? `static/images/index.css`.

You may add any folders you want into the static file.

The reason this is done, is because PoweredRail's web server fetches it's resources from a static system on resources.poweredrails.org

## Clean up
Note that anything place in the static directory will be uploaded to the resource system on PoweredRails.  So relative links are not allowed.
For instance, the following would be invalid: `../static/images/whoops.png`, try to avoid doing this.

Any resource linking to static will be replaced as `{{{prr}}}`.  Using the Mustache engine, `{{{prr}}}` gets replaced as `"http://resources.poweredrails.org"`, (this is also why using relative path operators would be invalid)
