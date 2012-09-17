$.widget('controls.characterCarousel', {

  options: {
    componentID:        versu.config.controls.characterCarousel.componentID,
    componentDiv:       versu.config.controls.characterCarousel.componentDiv,
    charactersDiv:      versu.config.controls.characterCarousel.charactersDiv,
    characterDiv:       versu.config.controls.characterCarousel.characterDiv,
    leftArrowDiv:       versu.config.controls.characterCarousel.leftArrowDiv,
    rightArrowDiv:      versu.config.controls.characterCarousel.rightArrowDiv,
    charactersPerPanel: versu.config.controls.characterCarousel.charactersPerPanel
  },

  _init: function() {

    var self = this;
    self.componentID        = self.options.componentID;
    self.componentDiv       = $(self.options.componentDiv);
    self.charactersDiv      = $(self.options.charactersDiv);
    self.characterDiv       = $(self.options.characterDiv);
    self.leftArrowDiv       = $(self.options.leftArrowDiv);
    self.rightArrowDiv      = $(self.options.rightArrowDiv);
    self.charactersPerPanel = self.options.charactersPerPanel;


    //self.characterViewModel = new versu.viewModels.characterViewModel;
    //debugger;
    ko.applyBindings(versu.viewModels.characterViewModel, document.getElementById(self.componentID));

    var randomize = 'true';
    var number = 8;
    versu.messaging.calls.getCharacters(randomize, number, function(response) {
      versu.viewModels.characterViewModel.refreshCharacters(response.characters);
    });

    self.leftArrowDiv.bind( 'click', function(event) {
      self._handleArrowClick('left',  event, callback);
    });
    self.rightArrowDiv.bind('click', function(event) {
      self._handleArrowClick('right', event, callback);
    });
    self.charactersDiv.on("click", ".character-graphic-href", function() {
      id = $(this).attr('rel');
      versu.viewModels.characterViewModel.removeCharacter(id);
    });

    //console.info('control init', versu.controls.characterCarousel, self);
  },


  _setOption: function(key, value) {

    switch(key) {
      case 'componentID':
        break;
      case 'componentDiv':
          break;
      case 'charactersDiv':
          break;
      case 'characterDiv':
          break;
      case 'leftArrowDiv':
          break;
      case 'rightArrowDiv':
          break;
      case 'charactersPerPanel':
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
  _handleArrowClick: function(direction, event, callback) {
    // Call jquery tools api here
    return;

  }




});