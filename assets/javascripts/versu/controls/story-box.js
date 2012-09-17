$.widget('controls.storyBox', {

  options: {
    componentID:        versu.config.controls.storyBox.componentID,
    componentDiv:       versu.config.controls.storyBox.componentDiv,
    storyList:          versu.config.controls.storyBox.storyList,
    storyEntry:         versu.config.controls.storyBox.storyEntry,
    scrollSpeed:        versu.config.controls.storyBox.scrollSpeed
  },

  _init: function() {

    var self = this;
    //self.componentID        = self.options.componentID;
    //self.componentDiv       = $(self.options.componentDiv);
    //self.storyList          = $(self.options.storyList);
    //self.storyEntry         = $(self.options.storyEntry)
    ko.applyBindings(versu.viewModels.storyViewModel, document.getElementById(self.options.componentID));

    var affordanceID = 333;
    versu.messaging.calls.selectAffordance(affordanceID, function(response) {
      versu.viewModels.storyViewModel.refreshStoryItems(response.content);
      versu.util.scrollToBottom(self.options.componentDiv, self.options.scrollSpeed);
    });
    
    setInterval(function() {
      versu.messaging.calls.selectAffordance(affordanceID, function(response) {
        _.each(response.content, function(storyItem) {
          versu.viewModels.storyViewModel.addStoryItem(storyItem);
          versu.util.scrollToBottom(self.options.componentDiv, self.options.scrollSpeed);
        });
      });
    }, 20000);
    

    

  },


  _setOption: function(key, value) {

    switch(key) {
      case 'componentID':
        break;
      case 'componentDiv':
          break;
      case 'categoryClass':
          break;
      case 'affordanceClass':
          break;
      case 'closeButton':
          break;
      case 'animationSpeed':
          break;
      case 'pipClass':
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
  _hideAccordion: function(event, callback) {
    // Call jquery tools api here
    return;

  }




});