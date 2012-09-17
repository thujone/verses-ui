
versu.viewModels || (versu.viewModels = {});

versu.viewModels.storyViewModel = {
  storyList: new ko.observableArray(),
  doStoryItemsExist: function() {
    return this.storyList().length > 0;
  },
  refreshStoryItems: function(newStoryItems) {
    return this.storyList(newStoryItems);
  },
  removeStoryItem: function(id) {
    var storyItem;
    storyItem = this.getStoryItem(parseInt(id));
    return this.storyList.remove(storyItem);
  },
  addStoryItem: function(storyItem) {
    return this.storyList.push(storyItem);
  },
  getStoryItem: function(id) {
    var storyItem;
    storyItem = this.storyList();
    storyItem = null;
    _.each(storyList, function(value, key, list) {
      if (value.id === id) {
        return storyItem = value;
      }
    });
    return storyItem;
  }
};
