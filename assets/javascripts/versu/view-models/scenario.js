
versu.viewModels || (versu.viewModels = {});

versu.viewModels.scenarioViewModel = {
  newScenarios: new ko.observableArray(),
  joinScenarios: new ko.observableArray(),
  refreshScenarios: function(scenarios, type) {
    if (type === 'new') {
      this.newScenarios(scenarios);
    }
    if (type === 'join') {
      this.joinScenarios(scenarios);
    }
  },
  doScenariosExist: function() {
    return this.newScenarios().length > 0 || this.joinScenarios().length > 0;
  },
  removeScenario: function(id) {
    this.newScenarios.remove(function(item) {
      return item.id === id;
    });
    return this.joinScenarios.remove(function(item) {
      return item.id === id;
    });
  },
  addOrUpdateScenario: function(scenario) {
    var found;
    scenario = this.newScenarios();
    found = false;
    scenario.forEach(function(value, index, array) {
      if (value.id === scenario.id) {
        scenario[index] = scenario;
        return found = true;
      }
    });
    if (!found) {
      array.push(scenario);
    }
    return this.newScenarios(array);
  },
  getScenario: function(id) {
    var array, scenario;
    array = this.newScenarios();
    scenario = void 0;
    array.forEach(function(value, index, array) {
      if (value.id === id) {
        return scenario = array[index];
      }
    });
    return scenario;
  }
};
