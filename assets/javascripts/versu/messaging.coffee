versu.messaging =


  getAjaxSuccess: (caller, response, callback) ->
    console.info 'ajax success!', 'caller:', caller, 'response:', response
    if callback
      callback response
    else
      console.warn "no callback defined for " + caller

  getAjaxError: (caller, request, message, failureCallback) ->
    console.info 'ajax failure!', 'caller:', caller, 'request:', request, 'message:', message
    if failureCallback
      failureCallback caller, request, message
    else
      @showDefaultAjaxError caller, request, message

  showDefaultAjaxError: (caller, request, message) ->
    try
      console.error "showDefaultAjaxError:", caller, request, message
    catch error
      console.error "caught ajax error:", error

  generateURL: (args) ->
    url = versu.config.webServiceURL
    
    # If just a string (i.e., single argument), convert to an array for processing below
    args = [args]  if _.isString(args)
    if _.isArray(args)
      _.each args, (arg) ->
        url += versu.constants.urlDelimiter + arg

    else
      console.error "error generating a RESTful url"
    url

  messageTypes:
    getClientID: "get-client-id"
    setDeveloperMode: "set-developer-mode"
    getScenarios: "get-scenarios"
    setPlayerName: "set-player-name"
    selectScenario: "select-scenario"
    getCharacters: "get-characters"
    getCharacterPegs: "get-character-pegs"
    selectCharacter: "select-character"
    tickStory: "tick-story"
    selectAffordance: "select-affordance"

  calls:
    getClientID: (callback, failureCallback) ->
      caller = "getClientID"
      args = versu.messaging.messageTypes.getClientID
      versu.app.displayURL versu.messaging.generateURL(args), versu.messaging.messageTypes.getClientID
      $.ajax
        url: versu.messaging.generateURL(args)
        success: (response) ->
          versu.messaging.getAjaxSuccess caller, response, callback

        error: (request, message) ->
          versu.messaging.getAjaxError caller, request, message, failureCallback


    setDeveloperMode: (isDeveloperMode, callback, failureCallback) ->
      caller = "setDeveloperMode"
      isDeveloperMode = "true"
      args = [versu.messaging.messageTypes.setDeveloperMode, isDeveloperMode]
      versu.app.displayURL versu.messaging.generateURL(args), versu.messaging.messageTypes.setDeveloperMode
      $.ajax
        url: versu.messaging.generateURL(args)
        success: (response) ->
          versu.messaging.getAjaxSuccess caller, response, callback

        error: (request, message) ->
          versu.messaging.getAjaxError caller, request, message, failureCallback


    getScenarios: (callback, failureCallback) ->
      caller = "getScenarios"
      args = versu.messaging.messageTypes.getScenarios
      versu.app.displayURL versu.messaging.generateURL(args), versu.messaging.messageTypes.getScenarios
      $.ajax
        url: versu.messaging.generateURL(args)
        success: (response) ->
          versu.messaging.getAjaxSuccess caller, response, callback

        error: (request, message) ->
          versu.messaging.getAjaxError caller, request, message, failureCallback


    setPlayerName: (callback) ->

    selectScenario: (callback) ->

    getCharacters: (randomize, number, callback, failureCallback) ->
      caller = "getCharacters"
      randomize = "true"
      args = [versu.messaging.messageTypes.getCharacters, randomize, number]
      url = versu.messaging.generateURL(args)
      versu.app.displayURL url, versu.messaging.messageTypes[caller]
      $.ajax
        url: versu.messaging.generateURL(args)
        success: (response) ->
          versu.messaging.getAjaxSuccess caller, response, callback

        error: (request, message) ->
          versu.messaging.getAjaxError caller, request, message, failureCallback


    getCharacterPegs: (callback) ->

    selectCharacter: (callback) ->

    tickStory: (callback) ->

    selectAffordance: (affordanceID, callback, failureCallback) ->
      caller = "selectAffordance"
      args = [versu.messaging.messageTypes.selectAffordance, versu.config.clientState.clientID, versu.config.clientState.characterID, affordanceID] #TODO - hardcoded affordance ID
      versu.app.displayURL versu.messaging.generateURL(args), versu.messaging.messageTypes.selectAffordance
      $.ajax
        url: versu.messaging.generateURL(args)
        success: (response) ->
          versu.messaging.getAjaxSuccess caller, response, callback

        error: (request, message) ->
          versu.messaging.getAjaxError caller, request, message, failureCallback

