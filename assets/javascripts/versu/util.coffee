versu.util =
  
  # Takes an object and returns an array of its keys
  getObjectKeys: (objectToMap) ->
    
    #console.log('objectToMap', objectToMap);
    keys = $.map(objectToMap, (element, index) ->
      element[index]
    )
    
    #console.log('keys', keys);
    keys

  
  # Get querystring param value
  getParameter: (name) ->
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")
    regexS = "[\\?&]" + name + "=([^&#]*)"
    regex = new RegExp(regexS)
    results = regex.exec(window.location.href)
    unless results?
      ""
    else
      decodeURIComponent results[1].replace(/\+/g, " ")

  
  # Get hash value
  getHash: ->
    hashValue = parseInt(window.location.hash.substr(1))
    if hashValue is "" or not hashValue? or isNaN(hashValue) or hashValue < 1
      0
    else
      hashValue

  setHash: (value) ->
    window.location.hash = value.toString()

  
  # Get the key of an object param
  getKey: (value) ->
    for property of this
      propertyValue = this[property]
      return property  if propertyValue is value  unless $.isFunction(propertyValue)
    null

  
  # Pull attribute values out of an array of objects and stuff into a new array
  getObjectAttributeAsArray: (objectArray, attribute) ->
    retArray = []
    objLength = objectArray.length
    i = 0
    i
    while i < objLength
      retArray.push objectArray[i][attribute]
      i = i + 1
    retArray

  getBaseURL: ->
    window.location.protocol + "://" + window.location.hostname

  strip: (stringToStrip, stringToSearch) ->
    stringToSearch.replace stringToStrip, ""

  stripQuotes: (str) ->
    str.replace /(^'|'$)/g, ""

  
  # TIME
  # Get current year
  getCurrentYear: ->
    date = new Date()
    date.getFullYear()

  
  # Get now in epoch
  getNowInEpoch: ->
    now = new Date()
    Math.ceil (now.getTime() - now.getMilliseconds()) / 1000

  
  # Parse the JSON-formatted date by converting to microseconds since epoch
  convertJSONDateToEpoch: (date) ->
    
    # JSON date looks like this: '/Date(1224043230000)/'
    epoch = date.replace("/Date(", "")
    epoch = epoch.replace(")/", "")
    Math.ceil epoch / 1000

  htmlEncode: (value) ->
    $("<div/>").text(value).html()

  htmlDecode: (value) ->
    $("<div/>").html(value).text()

  encodeUTF8: (value) ->
    unescape encodeURIComponent(value)

  decodeUTF8: (value) ->
    decodeURIComponent escape(value)
    
    
  # Scroll to bottom
  scrollToBottom: (container, speed) ->
    $(container).animate({
      scrollTop: $(container)[0].scrollHeight
    }, speed);
  