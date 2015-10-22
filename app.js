/*!
 * {plugin name}
 * @version {version}
 * @author  {author}
 * @url     {url}
 * @license {license}
 */
jQuery(document).ready(function(){

  var trigger = $(".js-trigger");

  // Init the plugin
  trigger.plugin({
    message: "I've changed"
  });

  // Call a public method from the plugin
  trigger.on("click", function(){
    trigger.plugin('sampleMethod');
  });

});