
versu.viewModels || (versu.viewModels = {});

versu.viewModels.affordanceViewModel = {
  affordances: new ko.observableArray(),
  affordanceCategories: new ko.observableArray(),
  doAffordancesExist: function() {
    return this.affordances().length > 0;
  },
  doAffordanceCategoriesExist: function() {
    return this.affordanceCategories().length > 0;
  },
  setAffordances: function(affordances) {
    return this.affordances(affordances);
  },
  setAffordanceCategories: function(affordanceCategories) {
    return this.affordanceCategories(affordanceCategories);
  },
  removeAffordance: function(id) {
    var affordance;
    affordance = this.getAffordance(parseInt(id));
    return this.affordances.remove(affordance);
  },
  addOrUpdateAffordance: function(affordance) {
    var affordances, found;
    affordances = this.affordances();
    found = false;
    affordances.forEach(function(value, index, array) {
      if (value.id === affordance.id) {
        affordances[index] = affordance;
        return found = true;
      }
    });
    if (!found) {
      array.push(affordance);
    }
    return this.affordances(array);
  },
  addAffordance: function(affordance) {
    console.log('affordance', affordance[0]);
    return this.affordances.push(affordance[0]);
  },
  getAffordance: function(id) {
    var affordance, affordances;
    affordances = this.affordances();
    affordance = null;
    _.each(affordances, function(value, key, list) {
      if (value.id === id) {
        return affordance = value;
      }
    });
    return affordance;
  },
  composeAccordionCategoryID: function(index) {
    return versu.config.controls.affordanceAccordion.accordionCategoryIDPrefix + index;
  },
  composeAccordionCategoryLink: function(index) {
    return '#' + this.composeAccordionCategoryID(index);
  },
  getAccordionBodyClasses: function(index) {
    var classes;
    classes = 'accordion-body collapse';
    if (index === 0) {
      classes += ' in';
    }
    return classes;
  }
};
