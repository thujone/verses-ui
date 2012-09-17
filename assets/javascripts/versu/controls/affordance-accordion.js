$.widget('controls.affordanceAccordion', {

  options: {
    componentID:        versu.config.controls.affordanceAccordion.componentID,
    componentDiv:       versu.config.controls.affordanceAccordion.componentDiv,
    categoryClass:      versu.config.controls.affordanceAccordion.categoryClass,
    affordanceClass:    versu.config.controls.affordanceAccordion.affordanceClass,
    closeButton:        versu.config.controls.affordanceAccordion.closeButton,
    animationSpeed:     versu.config.controls.affordanceAccordion.animationSpeed,
    pipClass:           versu.config.controls.affordanceAccordion.pipClass,
    firstAccordionBody: versu.config.controls.affordanceAccordion.firstAccordionBody,
    accordionBody:      versu.config.controls.affordanceAccordion.accordionBody,
    affordances:        versu.config.controls.affordanceAccordion.affordances
  },

  _init: function() {

    var self = this;
    
    console.log('versu.viewModels', versu.viewModels);
    ko.applyBindings(versu.viewModels.affordanceViewModel, document.getElementById(self.options.componentID));

    var affordanceID = 333;
    versu.messaging.calls.selectAffordance(affordanceID, function(response) {
      versu.viewModels.affordanceViewModel.setAffordanceCategories(response.affordances);
    });

    $(self.options.closeButton).bind( 'click', function(event) {
      self._hideAccordion(event, callback);
    });
    
    /*
    $('#affordances').on('click',
      '.affordance-category-link',
      function() {
        $('.accordion-body').removeClass('in');
        //$(this).closest('.affordance-category').find('.accordion-body').addClass('in');
      }
    );
    */

    $('#affordances').on('click',
      '.affordance-category-link',
      function() {
        var beforeHeight = $('#affordances-clone').height() || $('#affordances').height();
        console.log('beforeHeight', beforeHeight);
        setTimeout( function() {
          $('#affordances-clone').remove();
          $('#affordances').clone().attr('id', 'affordances-clone').appendTo('body');
          var afterHeight = $('#affordances-clone').height();
          console.log('afterHeight', afterHeight);
          var difference = beforeHeight - afterHeight;
          var storyBoxHeight = $('#story-box').height();
          $('#story-box').animate({
            height: storyBoxHeight + difference
          }, 245, function() {
            //alert('got here');
            versu.util.scrollToBottom('#story-box', 100);
            //versu.config.controls.storyBox.scrollSpeed);
          });
        }, 5);
      }
    );


    
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
      case 'firstAccordionBody':
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

  //openFirstCategory: function() {
  //  $(this.options.firstAccordionBody).addClass('in');
  //}



});