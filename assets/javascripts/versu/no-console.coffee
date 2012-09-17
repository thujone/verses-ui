if not window.console or not console.log
  names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"]
  window.console = {}
  i = 0

  while i < names.length
    window.console[names[i]] = ->
    ++i
  names = null