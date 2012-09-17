versu.viewModels ||= {}

versu.viewModels.storyViewModel =

  # Complete list of game text entries
  storyList: new ko.observableArray()

  # Test for whether there are text entries or not
  doStoryItemsExist: () ->
    @storyList().length > 0
    
  # Replaces story box with new list of story items
  refreshStoryItems: (newStoryItems) ->
    @storyList newStoryItems

  # Remove a affordance by ID
  removeStoryItem: (id) ->
    storyItem = @getStoryItem parseInt(id)
    @storyList.remove storyItem
  
  # Add entry to end of list
  addStoryItem: (storyItem) ->
    @storyList.push storyItem

  # Gets a text entry from the array
  getStoryItem: (id) ->
    storyItem = @storyList()
    storyItem = null
    _.each storyList, (value, key, list) ->
      storyItem = value if value.id is id
    storyItem