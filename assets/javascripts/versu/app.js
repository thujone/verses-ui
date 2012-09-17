
$().ready(function() {
  return versu.app.ready();
});

(function() {
  return versu.app = {
    ready: function() {
      var cfg, ctr;
      versu.config.setAjaxGlobals();
      this.bindButtons();
      if (versu.controls === void 0) {
        versu.controls = {};
      }
      if (versu.config === void 0) {
        versu.config = {};
      }
      ctr = versu.controls;
      cfg = versu.config.controls;
      ctr.characterCarousel = $(cfg.characterCarousel.componentDiv).characterCarousel();
      ctr.affordanceAccordion = $(cfg.affordanceAccordion.componentDiv).affordanceAccordion();
      ctr.chooseScenarioList = $(cfg.chooseScenarioList.componentDiv).chooseScenarioList();
      ctr.storyBox = $(cfg.storyBox.componentDiv).storyBox();
      ctr.actionButtons = $(cfg.actionButtons.componentDiv).actionButtons();
      ctr.chooseCharacterList = $(cfg.chooseCharacterList.componentDiv).chooseCharacterList();
    },
    bindButtons: function() {
      $("#get-client-id-button").toggle((function() {
        return versu.messaging.calls.getClientID(function(response) {
          return $("#get-client-id-response").text(JSON.stringify(response, null, 2));
        });
      }), function() {
        return $("#get-client-id-url, #get-client-id-response").text("");
      });
      $("#get-scenarios-button").toggle((function() {
        return versu.messaging.calls.getScenarios(function(response) {
          return $("#get-scenarios-response").text(JSON.stringify(response, null, 2));
        });
      }), function() {
        return $("#get-scenarios-url, #get-scenarios-response").text("");
      });
      $("#select-affordance-button").toggle((function() {
        return versu.messaging.calls.selectAffordance(333, function(response) {
          return $("#select-affordance-response").text(JSON.stringify(response, null, 2));
        });
      }), function() {
        return $("#select-affordance-url, #select-affordance-response").text("");
      });
      $("#set-developer-mode-button").toggle((function() {
        return versu.messaging.calls.setDeveloperMode(true, function(response) {
          return $("#set-developer-mode-response").text(JSON.stringify(response, null, 2));
        });
      }), function() {
        return $("#set-developer-mode-url, #set-developer-mode-response").text("");
      });
      $("#get-characters-button").toggle((function() {
        var number, randomize;
        randomize = 'false';
        number = 8;
        return versu.messaging.calls.getCharacters(randomize, number, function(response) {
          return $("#get-characters-response").text(JSON.stringify(response, null, 2));
        });
      }), function() {
        return $("#get-characters-url, #get-characters-response").text("");
      });
      $("#get-random-characters-button").click(function() {
        var number, randomize;
        randomize = 'true';
        number = 3;
        return versu.messaging.calls.getCharacters(randomize, number, function(response) {
          versu.viewModels.characterViewModel.refreshCharacters(response.characters);
          return versu.util.scrollToBottom();
        });
      });
      $('#add-one-character-button').click(function() {
        var number, randomize;
        randomize = 'true';
        number = 1;
        return versu.messaging.calls.getCharacters(randomize, number, function(response) {
          versu.viewModels.characterViewModel.addCharacter(response.characters);
          return versu.util.scrollToBottom();
        });
      });
      $('#render-scenarios-button').click(function() {
        return versu.messaging.calls.getScenarios(function(response) {
          versu.viewModels.scenarioViewModel.refreshScenarios(response.new_scenarios, 'new');
          versu.viewModels.scenarioViewModel.refreshScenarios(response.join_scenarios, 'join');
          return versu.util.scrollToBottom();
        });
      });
      $('#render-affordances-set-1-button').click(function() {
        return versu.messaging.calls.selectAffordance(333, function(response) {
          versu.viewModels.affordanceViewModel.setAffordanceCategories(response.affordances);
          return versu.util.scrollToBottom();
        });
      });
      $('#render-affordances-set-2-button').click(function() {
        return versu.messaging.calls.selectAffordance(334, function(response) {
          versu.viewModels.affordanceViewModel.setAffordanceCategories(response.affordances);
          return versu.util.scrollToBottom();
        });
      });
      return $('#affordances-wrapper').on("click", ".affordance-href", function() {
        var id, label;
        id = $(this).attr('rel');
        label = $(this).text();
        return alert(label + "\n" + 'ID: ' + id);
      });
    },
    displayURL: function(url, messageType) {
      return $("#" + messageType + "-url").text(url);
    }
  };
})();
