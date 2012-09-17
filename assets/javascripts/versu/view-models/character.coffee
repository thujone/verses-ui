versu.viewModels ||= {}

versu.viewModels.characterViewModel =

  # Current list of characters
  characters: new ko.observableArray()
  chooseCharacters: new ko.observableArray()

  # Test for whether there are characters or not
  doCharactersExist: () ->
    @characters().length > 0
  doChooseCharactersExist: () ->
    @chooseCharacters().length > 0
    
  # Replaces all characters with new set of characters
  refreshCharacters: (newCharacters) ->
    @characters newCharacters
    
  refreshChooseCharacterList: (newCharacters) ->
    @chooseCharacters newCharacters

  # Generates a graphics URL for a character and emotion
  composeImageURL: (character) ->
    imageURL = versu.config.paths.getCharacterImagesPath() + character["graphic_base"] + versu.constants.urlDelimiter + character["graphic_base"] + "_" + character["emotion"] + versu.constants.extensions.png
    imageURL

  # Remove a character by ID
  removeCharacter: (id) ->
    character = @getCharacter parseInt(id)
    @characters.remove character

  # Add or update a character
  addOrUpdateCharacter: (character) ->
    characters = @characters()
    found = false
    characters.forEach (value, index, array) ->
      if value.id is character.id
        characters[index] = character
        found = true
    array.push character unless found
    @characters array
  
  addCharacter: (character) ->
    console.log 'character', character[0]
    @characters.push character[0]

  # Gets a character from the array
  getCharacter: (id) ->
    characters = @characters()
    character = null
    _.each characters, (value, key, list) ->
      character = value if value.id is id
    character