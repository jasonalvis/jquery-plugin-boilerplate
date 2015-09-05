/**
 * Plugin
 * @version 1.0.0
 * @author Jason Alvis
 * @website http://jasonalvis.co.uk
 * @license The MIT License (MIT)
 * @basedoff Highly configurable mutable plugin boilerplate
 * https://github.com/jquery-boilerplate/jquery-patterns/blob/master/patterns/jquery.highly-configurable.plugin.boilerplate.js
 */
;(function( $, window, document, undefined ){
  "use strict";

  /**
   * Plugin constructor
   * @public
   * @param {HTMLElement|jQuery} element - The element to create the plugin for.
   * @param {Object} [options] - The options
   */
  var Plugin = function( element, options ){
    /**
     * Plugin DOM element
     * @public
     */
    this.element = element;

    /**
     * Plugin DOM element wrapped in jQuery
     * @public
     */
    this.$element = $(element);

    /**
     * Current options
     * @public
     */
    this.options = options;

    /**
     * Plugin init
     * @public
     */
    this.init();
  };

  /**
   * Default options for the plugin
   * @public
   */
  Plugin.prototype.defaults = {
    message: "Hello world!",
    number: 0,
    boolean: true
  };

  /**
   * Init the plugin
   * @public
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
   * @public
   */
  Plugin.prototype.sampleMethod = function() {
    // eg. show the currently configured message
    console.log(this.config.message, this.config.number, this.config.boolean, this.options);
  };

  /**
   * Create a shortened reference point for our defaults
   */
  Plugin.defaults = Plugin.prototype.defaults;

  /**
   * The jQuery plugin interface
   * @public
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