/**
 * Provides a fairly simple cookie-data wrapper that supports
 * event-listening, encryption, automatic-syncing, and diffing.
 */

var browserCookie;

/**
 * Initializes the {@code browserCookie} object. If an error occurs,
 * it simply resets all data.
 */
(function() {
  try {
    browserCookie = JSON.parse(document.cookie);
  } catch {
    document.cookie = "";
    browserCookie = {};
    console.err("Site cookie was corrupted, hence previous data cannot " +
      "be retrieved without signing in again!");
  }
})();
