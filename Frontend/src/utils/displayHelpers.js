/**
 * @file displayHelpers.js
 * @description Utility functions for displaying UI elements
 */

/**
 * Get the display icon for a space or workspace
 * Returns the icon if it exists, otherwise returns the first letter of the name
 * @param {Object} item - Space or workspace object
 * @param {string} item.name - Name of the space/workspace
 * @param {string|null} item.icon - Optional icon (emoji or character)
 * @returns {string} Icon to display (emoji or first letter)
 */
export const getDisplayIcon = (item) => {
  // If icon exists and is not empty, use it
  if (item?.icon && item.icon.trim() !== "") {
    return item.icon;
  }

  // Otherwise, use the first letter of the name
  if (item?.name && item.name.length > 0) {
    return item.name.charAt(0).toUpperCase();
  }

  // Fallback if no name exists
  return "?";
};

/**
 * Get initials from a name (first letter of first and last word)
 * Useful for user avatars
 * @param {string} name - Full name
 * @returns {string} Initials (1-2 characters)
 */
export const getInitials = (name) => {
  if (!name || name.trim() === "") {
    return "?";
  }

  const words = name.trim().split(/\s+/);

  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }

  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
};
