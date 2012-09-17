$.widget('controls.actionButtons', {

  options: {
    componentID:        versu.config.controls.actionButtons.componentID,
    componentDiv:       versu.config.controls.actionButtons.componentDiv,
    actButton:          versu.config.controls.actionButtons.actButton,
    continueButton:     versu.config.controls.actionButtons.continueButton
  },

  _init: function() {

    var self = this;
    self.componentID        = self.options.componentID;
    self.componentDiv       = $(self.options.componentDiv);
    self.actButton          = $(self.options.actButton);
    self.continueButton     = $(self.options.continueButton);
    
    self.actButton.bind( 'click', function(event) {
      self._act(event);
    });
    self.continueButton.bind( 'click', function(event) {
      self._continue(event);
    });
  },


  _setOption: function(key, value) {

    switch(key) {
      case 'componentID':
        break;
      case 'componentDiv':
          break;
      case 'actButton':
          break;
      case 'continueButton':
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
  // Action button methods
  //
  _act: function(event) {
    console.warn('$.actionButtons::_act called');
  },
  
  _continue: function(event) {
    console.warn('$.actionButtons::_continue called')
  }




});