
versu.messaging = {
  getAjaxSuccess: function(caller, response, callback) {
    console.info('ajax success!', 'caller:', caller, 'response:', response);
    if (callback) {
      return callback(response);
    } else {
      return console.warn("no callback defined for " + caller);
    }
  },
  getAjaxError: function(caller, request, message, failureCallback) {
    console.info('ajax failure!', 'caller:', caller, 'request:', request, 'message:', message);
    if (failureCallback) {
      return failureCallback(caller, request, message);
    } else {
      return this.showDefaultAjaxError(caller, request, message);
    }
  },
  showDefaultAjaxError: function(caller, request, message) {
    try {
      return console.error("showDefaultAjaxError:", caller, request, message);
    } catch (error) {
      return console.error("caught ajax error:", error);
    }
  },
  generateURL: function(args) {
    var url;
    url = versu.config.webServiceURL;
    if (_.isString(args)) {
      args = [args];
    }
    if (_.isArray(args)) {
      _.each(args, function(arg) {
        return url += versu.constants.urlDelimiter + arg;
      });
    } else {
      console.error("error generating a RESTful url");
    }
    return url;
  },
  messageTypes: {
    getClientID: "get-client-id",
    setDeveloperMode: "set-developer-mode",
    getScenarios: "get-scenarios",
    setPlayerName: "set-player-name",
    selectScenario: "select-scenario",
    getCharacters: "get-characters",
    getCharacterPegs: "get-character-pegs",
    selectCharacter: "select-character",
    tickStory: "tick-story",
    selectAffordance: "select-affordance"
  },
  calls: {
    getClientID: function(callback, failureCallback) {
      var args, caller;
      caller = "getClientID";
      args = versu.messaging.messageTypes.getClientID;
      versu.app.displayURL(versu.messaging.generateURL(args), versu.messaging.messageTypes.getClientID);
      return $.ajax({
        url: versu.messaging.generateURL(args),
        success: function(response) {
          return versu.messaging.getAjaxSuccess(caller, response, callback);
        },
        error: function(request, message) {
          return versu.messaging.getAjaxError(caller, request, message, failureCallback);
        }
      });
    },
    setDeveloperMode: function(isDeveloperMode, callback, failureCallback) {
      var args, caller;
      caller = "setDeveloperMode";
      isDeveloperMode = "true";
      args = [versu.messaging.messageTypes.setDeveloperMode, isDeveloperMode];
      versu.app.displayURL(versu.messaging.generateURL(args), versu.messaging.messageTypes.setDeveloperMode);
      return $.ajax({
        url: versu.messaging.generateURL(args),
        success: function(response) {
          return versu.messaging.getAjaxSuccess(caller, response, callback);
        },
        error: function(request, message) {
          return versu.messaging.getAjaxError(caller, request, message, failureCallback);
        }
      });
    },
    getScenarios: function(callback, failureCallback) {
      var args, caller;
      caller = "getScenarios";
      args = versu.messaging.messageTypes.getScenarios;
      versu.app.displayURL(versu.messaging.generateURL(args), versu.messaging.messageTypes.getScenarios);
      return $.ajax({
        url: versu.messaging.generateURL(args),
        success: function(response) {
          return versu.messaging.getAjaxSuccess(caller, response, callback);
        },
        error: function(request, message) {
          return versu.messaging.getAjaxError(caller, request, message, failureCallback);
        }
      });
    },
    setPlayerName: function(callback) {},
    selectScenario: function(callback) {},
    getCharacters: function(randomize, number, callback, failureCallback) {
      var args, caller, url;
      caller = "getCharacters";
      randomize = "true";
      args = [versu.messaging.messageTypes.getCharacters, randomize, number];
      url = versu.messaging.generateURL(args);
      versu.app.displayURL(url, versu.messaging.messageTypes[caller]);
      return $.ajax({
        url: versu.messaging.generateURL(args),
        success: function(response) {
          return versu.messaging.getAjaxSuccess(caller, response, callback);
        },
        error: function(request, message) {
          return versu.messaging.getAjaxError(caller, request, message, failureCallback);
        }
      });
    },
    getCharacterPegs: function(callback) {},
    selectCharacter: function(callback) {},
    tickStory: function(callback) {},
    selectAffordance: function(affordanceID, callback, failureCallback) {
      var args, caller;
      caller = "selectAffordance";
      args = [versu.messaging.messageTypes.selectAffordance, versu.config.clientState.clientID, versu.config.clientState.characterID, affordanceID];
      versu.app.displayURL(versu.messaging.generateURL(args), versu.messaging.messageTypes.selectAffordance);
      return $.ajax({
        url: versu.messaging.generateURL(args),
        success: function(response) {
          return versu.messaging.getAjaxSuccess(caller, response, callback);
        },
        error: function(request, message) {
          return versu.messaging.getAjaxError(caller, request, message, failureCallback);
        }
      });
    }
  }
};
