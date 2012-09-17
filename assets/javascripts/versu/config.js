
versu.config = {
  webServiceURL: "http://localhost/versu-ws/service.php",
  clientState: {
    clientID: 12,
    characterID: 104
  },
  setAjaxGlobals: function() {
    return $.ajaxSetup({
      cache: false,
      global: true,
      type: "GET",
      url: versu.config.webServiceURL,
      dataType: "json"
    });
  },
  paths: {
    getAssetsPath: function() {
      return "assets" + versu.constants.urlDelimiter;
    },
    getImagesPath: function() {
      return versu.config.paths.getAssetsPath() + "images" + versu.constants.urlDelimiter;
    },
    getCharacterImagesPath: function() {
      return versu.config.paths.getImagesPath() + "characters" + versu.constants.urlDelimiter;
    },
    getJavascriptsPath: function() {
      return versu.config.paths.getAssetsPath() + "javascripts" + versu.constants.urlDelimiter;
    },
    getStylesheetsPath: function() {
      return versu.config.paths.getAssetsPath() + "stylesheets" + versu.constants.urlDelimiter;
    }
  },
  controls: {
    characterCarousel: {
      componentID: 'character-carousel',
      componentDiv: '#character-carousel',
      charactersDiv: '#characters',
      characterDiv: '.character',
      leftArrowDiv: '#left-arrow',
      rightArrowDiv: '#right-arrow',
      charactersPerPanel: 4
    },
    chooseCharacterList: {
      componentID: 'choose-character-list',
      componentDiv: '#choose-character-list',
      charactersDiv: '#choose-characters',
      characterDiv: '.character'
    },
    affordanceAccordion: {
      componentID: 'affordance-accordion',
      componentDiv: '#affordance-accordion',
      categoryClass: '.category',
      affordanceClass: '.affordance',
      closeButton: '#close-button',
      animationSpeed: 200,
      pipClass: '.pip',
      accordionCategoryIDPrefix: 'collapse-',
      firstAccordionBody: '#affordances .accordion-body:first',
      affordances: '#affordances',
      accordionBody: '.accordion-body'
    },
    chooseScenarioList: {
      componentID: 'choose-scenario-list',
      componentDiv: '#choose-scenario-list',
      scenarios: '#scenarios',
      scenarioDiv: '.scenario',
      scenarioHref: '.scenario-href'
    },
    storyBox: {
      componentID: 'story-box',
      componentDiv: '#story-box',
      storyList: '#story-list',
      storyEntry: '.story-entry',
      scrollSpeed: 200
    },
    actionButtons: {
      componentID: 'story-box',
      componentDiv: '#story-box',
      actButton: '#act-now-button',
      continueButton: '#continue-button'
    }
  }
};
