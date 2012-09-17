
versu.util = {
  getObjectKeys: function(objectToMap) {
    var keys;
    keys = $.map(objectToMap, function(element, index) {
      return element[index];
    });
    return keys;
  },
  getParameter: function(name) {
    var regex, regexS, results;
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    regexS = "[\\?&]" + name + "=([^&#]*)";
    regex = new RegExp(regexS);
    results = regex.exec(window.location.href);
    if (results == null) {
      return "";
    } else {
      return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
  },
  getHash: function() {
    var hashValue;
    hashValue = parseInt(window.location.hash.substr(1));
    if (hashValue === "" || !(hashValue != null) || isNaN(hashValue) || hashValue < 1) {
      return 0;
    } else {
      return hashValue;
    }
  },
  setHash: function(value) {
    return window.location.hash = value.toString();
  },
  getKey: function(value) {
    var property, propertyValue;
    for (property in this) {
      propertyValue = this[property];
      if (!$.isFunction(propertyValue) ? propertyValue === value : void 0) {
        return property;
      }
    }
    return null;
  },
  getObjectAttributeAsArray: function(objectArray, attribute) {
    var i, objLength, retArray;
    retArray = [];
    objLength = objectArray.length;
    i = 0;
    i;

    while (i < objLength) {
      retArray.push(objectArray[i][attribute]);
      i = i + 1;
    }
    return retArray;
  },
  getBaseURL: function() {
    return window.location.protocol + "://" + window.location.hostname;
  },
  strip: function(stringToStrip, stringToSearch) {
    return stringToSearch.replace(stringToStrip, "");
  },
  stripQuotes: function(str) {
    return str.replace(/(^'|'$)/g, "");
  },
  getCurrentYear: function() {
    var date;
    date = new Date();
    return date.getFullYear();
  },
  getNowInEpoch: function() {
    var now;
    now = new Date();
    return Math.ceil((now.getTime() - now.getMilliseconds()) / 1000);
  },
  convertJSONDateToEpoch: function(date) {
    var epoch;
    epoch = date.replace("/Date(", "");
    epoch = epoch.replace(")/", "");
    return Math.ceil(epoch / 1000);
  },
  htmlEncode: function(value) {
    return $("<div/>").text(value).html();
  },
  htmlDecode: function(value) {
    return $("<div/>").html(value).text();
  },
  encodeUTF8: function(value) {
    return unescape(encodeURIComponent(value));
  },
  decodeUTF8: function(value) {
    return decodeURIComponent(escape(value));
  },
  scrollToBottom: function(container, speed) {
    return $(container).animate({
      scrollTop: $(container)[0].scrollHeight
    }, speed);
  }
};
