
versu.viewModels || (versu.viewModels = {});

versu.viewModels.characterViewModel = {
  characters: new ko.observableArray(),
  chooseCharacters: new ko.observableArray(),
  doCharactersExist: function() {
    return this.characters().length > 0;
  },
  doChooseCharactersExist: function() {
    return this.chooseCharacters().length > 0;
  },
  refreshCharacters: function(newCharacters) {
    return this.characters(newCharacters);
  },
  refreshChooseCharacterList: function(newCharacters) {
    return this.chooseCharacters(newCharacters);
  },
  composeImageURL: function(character) {
    var imageURL;
    imageURL = versu.config.paths.getCharacterImagesPath() + character["graphic_base"] + versu.constants.urlDelimiter + character["graphic_base"] + "_" + character["emotion"] + versu.constants.extensions.png;
    return imageURL;
  },
  removeCharacter: function(id) {
    var character;
    character = this.getCharacter(parseInt(id));
    return this.characters.remove(character);
  },
  addOrUpdateCharacter: function(character) {
    var characters, found;
    characters = this.characters();
    found = false;
    characters.forEach(function(value, index, array) {
      if (value.id === character.id) {
        characters[index] = character;
        return found = true;
      }
    });
    if (!found) {
      array.push(character);
    }
    return this.characters(array);
  },
  addCharacter: function(character) {
    console.log('character', character[0]);
    return this.characters.push(character[0]);
  },
  getCharacter: function(id) {
    var character, characters;
    characters = this.characters();
    character = null;
    _.each(characters, function(value, key, list) {
      if (value.id === id) {
        return character = value;
      }
    });
    return character;
  }
};
