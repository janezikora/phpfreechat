/**
 * This class centralize the pfc resources (translated messages, images, themes ...)
 * (depends on prototype library)
 * @author Stephane Gully
 */
var pfcResource = Class.create();
pfcResource.prototype = {
  
  initialize: function()
  {
    this.labels  = $H();
    this.fileurl = $H();
    this.smileys = $H();
    this.smileysreverse = $H();
  },

  setLabel: function(key, value)
  {
    this.labels[key] = value;
  },

  getLabel: function()
  {
    var key = this.getLabel.arguments[0];
    if (this.labels[key])
      return String.sprintf2(this.getLabel.arguments); //this.labels[key];
    else
      return "";
  },

  setFileUrl: function(key, value)
  {
    this.fileurl[key] = value;
  },
  
  getFileUrl: function(key)
  {
    if (this.fileurl[key])
      return this.fileurl[key];
    else
      return "";
  },

  setSmiley: function(key, value)
  {
    this.smileys[key] = value;
    this.smileysreverse[value] = key;
  },
  getSmiley: function(key)
  {
    if (this.smileys[key])
      return this.smileys[key];
    else
      return "";
  },
  getSmileyHash: function()
  {
    return this.smileys;
  },
  getSmileyReverseHash: function()
  {
    return this.smileysreverse;
  }
  
};





 



 







