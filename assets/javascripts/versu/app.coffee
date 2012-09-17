$().ready ->
  versu.app.ready()


(->
  versu.app =
    ready: ->
    
      # Set ajax defaults
      versu.config.setAjaxGlobals()
      
      # Bind buttons defined below
      @bindButtons()
      
      if versu.controls == undefined
        versu.controls = {}
      if versu.config == undefined
        versu.config = {}
      ctr = versu.controls
      cfg = versu.config.controls
      ctr.characterCarousel   = $(cfg.characterCarousel.componentDiv  ).characterCarousel()
      ctr.affordanceAccordion = $(cfg.affordanceAccordion.componentDiv).affordanceAccordion()
      ctr.chooseScenarioList  = $(cfg.chooseScenarioList.componentDiv).chooseScenarioList()
      ctr.storyBox            = $(cfg.storyBox.componentDiv).storyBox()
      ctr.actionButtons       = $(cfg.actionButtons.componentDiv).actionButtons()
      ctr.chooseCharacterList = $(cfg.chooseCharacterList.componentDiv).chooseCharacterList()
      
      #ko.applyBindings versu.viewModels.characterViewModel, document.getElementById('character-carousel');
      #ko.applyBindings versu.viewModels.scenarioViewModel, document.getElementById('choose-scenario-panel')
      #ko.applyBindings versu.viewModels.affordanceViewModel, document.getElementById('choose-affordance-panel')
      return


    # Bind the buttons on the page
    bindButtons: ->
    
      # Message calls
      $("#get-client-id-button").toggle (->
        versu.messaging.calls.getClientID (response) ->
          $("#get-client-id-response").text JSON.stringify(response, null, 2)

      ), ->
        $("#get-client-id-url, #get-client-id-response").text ""

      $("#get-scenarios-button").toggle (->
        versu.messaging.calls.getScenarios (response) ->
          $("#get-scenarios-response").text JSON.stringify(response, null, 2)

      ), ->
        $("#get-scenarios-url, #get-scenarios-response").text ""

      $("#select-affordance-button").toggle (->
        versu.messaging.calls.selectAffordance 333, (response) ->
          $("#select-affordance-response").text JSON.stringify(response, null, 2)

      ), ->
        $("#select-affordance-url, #select-affordance-response").text ""

      $("#set-developer-mode-button").toggle (->
        versu.messaging.calls.setDeveloperMode true, (response) ->
          $("#set-developer-mode-response").text JSON.stringify(response, null, 2)

      ), ->
        $("#set-developer-mode-url, #set-developer-mode-response").text ""

      $("#get-characters-button").toggle (->
        randomize = 'false'
        number = 8
        versu.messaging.calls.getCharacters randomize, number, (response) ->
          $("#get-characters-response").text JSON.stringify(response, null, 2)

      ), ->
        $("#get-characters-url, #get-characters-response").text ""



    
    
      # Characters
      $("#get-random-characters-button").click ->
        randomize = 'true'
        number = 3
        versu.messaging.calls.getCharacters randomize, number, (response) ->
          versu.viewModels.characterViewModel.refreshCharacters response.characters
          versu.util.scrollToBottom()

      
      $('#add-one-character-button').click ->
        randomize = 'true'
        number = 1
        versu.messaging.calls.getCharacters randomize, number, (response) ->
          versu.viewModels.characterViewModel.addCharacter response.characters
          versu.util.scrollToBottom()
     

      # Scenarios
      $('#render-scenarios-button').click ->
        versu.messaging.calls.getScenarios (response) ->
          versu.viewModels.scenarioViewModel.refreshScenarios response.new_scenarios, 'new'
          versu.viewModels.scenarioViewModel.refreshScenarios response.join_scenarios, 'join'
          versu.util.scrollToBottom()




      # Affordances
      $('#render-affordances-set-1-button').click ->
        versu.messaging.calls.selectAffordance 333, (response) ->
          versu.viewModels.affordanceViewModel.setAffordanceCategories response.affordances
          versu.util.scrollToBottom()

      $('#render-affordances-set-2-button').click ->
        versu.messaging.calls.selectAffordance 334, (response) ->
          versu.viewModels.affordanceViewModel.setAffordanceCategories response.affordances
          versu.util.scrollToBottom()
      
      $('#affordances-wrapper').on "click", ".affordance-href", ->
        id = $(this).attr('rel')
        label = $(this).text()
        alert(label + "\n" + 'ID: ' + id);



    # Print the URL in the message call url fields
    displayURL: (url, messageType) ->
      $("#" + messageType + "-url").text url

)()