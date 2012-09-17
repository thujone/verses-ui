versu.viewModels ||= {}

versu.viewModels.affordanceViewModel =

  # Current list of affordances
  affordances: new ko.observableArray()
  affordanceCategories: new ko.observableArray()

  # Test for whether there are affordances or not
  doAffordancesExist: () ->
    @affordances().length > 0
  doAffordanceCategoriesExist: () ->
    @affordanceCategories().length > 0
    
  # Replaces all affordances with new set of affordances
  setAffordances: (affordances) ->
    @affordances affordances
    
  # Set affordance categories
  setAffordanceCategories: (affordanceCategories) ->
    @affordanceCategories affordanceCategories

  # Remove a affordance by ID
  removeAffordance: (id) ->
    affordance = @getAffordance parseInt(id)
    @affordances.remove affordance

  # Add or update a affordance
  addOrUpdateAffordance: (affordance) ->
    affordances = @affordances()
    found = false
    affordances.forEach (value, index, array) ->
      if value.id is affordance.id
        affordances[index] = affordance
        found = true
    array.push affordance unless found
    @affordances array
  
  addAffordance: (affordance) ->
    console.log 'affordance', affordance[0]
    @affordances.push affordance[0]

  # Gets a affordance from the array
  getAffordance: (id) ->
    affordances = @affordances()
    affordance = null
    _.each affordances, (value, key, list) ->
      affordance = value if value.id is id
    affordance
    
  composeAccordionCategoryID: (index) ->
    versu.config.controls.affordanceAccordion.accordionCategoryIDPrefix + index
    
  composeAccordionCategoryLink: (index) ->
    '#' + @composeAccordionCategoryID index
    
  getAccordionBodyClasses: (index) ->
    classes = 'accordion-body collapse'
    classes += ' in' if index == 0
    classes
    
