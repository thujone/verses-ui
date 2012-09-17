versu.viewModels ||= {}

versu.viewModels.scenarioViewModel =

  # Lists of new and joinable scenarios
  newScenarios: new ko.observableArray()
  joinScenarios: new ko.observableArray()
  
  refreshScenarios: (scenarios, type) ->
    @newScenarios scenarios if type == 'new'
    @joinScenarios scenarios if type == 'join'
    return

  # Test for whether there are scenarios or not
  doScenariosExist: () ->
    @newScenarios().length > 0 || @joinScenarios().length > 0

  # Remove a scenario by ID
  removeScenario: (id) ->
    @newScenarios.remove (item) ->
      item.id is id
    @joinScenarios.remove (item) ->
      item.id is id

  # Add or update a scenario
  addOrUpdateScenario: (scenario) ->
    scenario = @newScenarios()
    found = false
    scenario.forEach (value, index, array) ->
      if value.id is scenario.id
        scenario[index] = scenario
        found = true
    array.push scenario unless found
    @newScenarios array

  # Gets a scenario from the array
  getScenario: (id) ->
    array = @newScenarios()
    scenario = undefined
    array.forEach (value, index, array) ->
      scenario = array[index]  if value.id is id
    scenario
