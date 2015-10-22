/*!
 * {plugin name}
 * @version {version}
 * @author  {author}
 * @url     {url}
 * @license {license}
 */
;(function( $, window, document, undefined ){
  "use strict";

  /**
   * Plugin constructor
   * @param {HTMLElement|jQuery} element - The element to create the affix for
   * @param {Object} options             - The options
   */
  var Plugin = function( element, options ){
    /**
     * DOM plugin element
     * @type {Object}
     */
    this.element = element;

    /**
     * DOM plugin element wrapped in jQuery
     * @type {Object}
     */
    this.$element = $(element);

    /**
     * Current options
     * @type {Object}
     */
    this.options = options;

    /**
     * Init
     */
    this.init();
  };

  /**
   * Default options
   * @type {Object}
   */
  Plugin.prototype.defaults = {
    message: "Hello world!",
    number: 0,
    boolean: true
  };

  /**
   * Init the affix
   * @return {Object}
   */
  Plugin.prototype.init = function() {
    // Introduce defaults that can be extended either
    // globally or using an object literal.
    this.config = $.extend({}, this.defaults, this.options);

    // Sample usage:
    // Set the message per instance:
    // $('#elem').plugin({ message: 'Goodbye World!'});
    // or
    // var p = new Plugin(document.getElementById('elem'),
    // { message: 'Goodbye World!'}).init()
    // or, set the global default message:
    // Plugin.defaults.message = 'Goodbye World!'
    // this.sampleMethod();

    console.log("init called");

    return this;
  };

  /**
   * Sample method
   * @type {Function}
   */
  Plugin.prototype.sampleMethod = function() {
    // eg. show the currently configured message
    console.log(this.config.message, this.config.number, this.config.boolean, this.options);
  };

  /**
   * Create a shorthand reference point for our defaults
   * @type {Object}
   */
  Plugin.defaults = Plugin.prototype.defaults;

  /**
   * jQuery Plugin interface
   * @param  {Object} options - The options
   * @return {Object}         - The plugin object
   */
  $.fn.plugin = function(options) {
    var args = Array.prototype.slice.call(arguments, 1);

    return this.each(function() {
      var item = $(this),
          data = item.data('plugin');

      if(!data) {
        // create plugin data if not created
        item.data('plugin', new Plugin(this, options));
      } else {
        // otherwise check arguments for method call
        if(typeof options === 'string') {
          data[options].apply(data, args);
        }
      }
    });
  };

})( jQuery, window, document );