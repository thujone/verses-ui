$.widget('controls.chooseScenarioList', {

  options: {
    componentID:        versu.config.controls.chooseScenarioList.componentID,
    componentDiv:       versu.config.controls.chooseScenarioList.componentDiv,
    scenarios:          versu.config.controls.chooseScenarioList.scenarios,
    scenarioDiv:        versu.config.controls.chooseScenarioList.scenarioDiv,
    scenarioHref:       versu.config.controls.chooseScenarioList.scenarioHref
 },

  _init: function() {

    var self = this;
    self.componentID        = self.options.componentID;
    self.componentDiv       = $(self.options.componentDiv);
    
    self.scenarioDiv        = $(self.options.scenarioDiv);
    self.scenarioHref       = $(self.options.scenarioHref);

    //debugger
    ko.applyBindings(versu.viewModels.scenarioViewModel, document.getElementById(self.componentID));

    versu.messaging.calls.getScenarios(function(response) {
      versu.viewModels.scenarioViewModel.refreshScenarios(response.new_scenarios, 'new');
      versu.viewModels.scenarioViewModel.refreshScenarios(response.join_scenarios, 'join');
    });

    self.scenarioDiv.bind('click', function(event) {
      console.log('clicked scenarioDiv');
    });
    
    $(self.options.scenarios).on("click", ".scenario-href", function() {
      var id = $(this).attr('rel')
      var label = $(this).text()
      alert(label + "\n" + 'ID: ' + id);
    });
  },


  _setOption: function(key, value) {

    switch(key) {
      case 'componentID':
        break;
      case 'componentDiv':
          break;
      case 'scenarioDiv':
          break;
      case 'scenarioHref':
          break;
    }

    // jQuery UI 1.8
    $.Widget.prototype._setOption.apply(this, arguments);
    // jQuery UI 1.9
    //this._super( "_setOption", key, value );
  },


  // Use the destroy method to clean up any modifications your widget has made to the DOM
  destroy: function() {
    // jQuery UI 1.8
    $.Widget.prototype.destroy.call(this);
    // jQuery UI 1.9
  },




  //
  // Character-specific methods
  //





});