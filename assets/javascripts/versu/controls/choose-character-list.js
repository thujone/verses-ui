$.widget('controls.chooseCharacterList', {

  options: {
    componentID:        versu.config.controls.chooseCharacterList.componentID,
    componentDiv:       versu.config.controls.chooseCharacterList.componentDiv,
    charactersDiv:      versu.config.controls.chooseCharacterList.charactersDiv,
    characterDiv:       versu.config.controls.chooseCharacterList.characterDiv
  },

  _init: function() {

    var self = this;
    self.componentID        = self.options.componentID;
    self.componentDiv       = $(self.options.componentDiv);
    self.charactersDiv      = $(self.options.charactersDiv);
    self.characterDiv       = $(self.options.characterDiv);

    ko.applyBindings(versu.viewModels.characterViewModel, document.getElementById(self.componentID));

    var randomize = 'true';
    var number = 8;
    versu.messaging.calls.getCharacters(randomize, number, function(response) {
      versu.viewModels.characterViewModel.refreshChooseCharacterList(response.characters);
    });

    self.charactersDiv.on('click', '.character a:first', function(event) {
      self.characterID = $(this).attr('rel');
      console.warn('ID: ' + self.characterID);
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