/**
 * @file spaceService.js
 * @description Service for space-related API operations
 * Handles all HTTP requests to space endpoints
 */

import api from "./api";

/**
 * @namespace spaceService
 * @description Collection of space-related API methods
 */
export const spaceService = {
  /**
   * @async
   * @function getSpacesByWorkspace
   * @description Fetch all spaces for a specific workspace
   * @param {string} workspaceId - Workspace ID
   * @returns {Promise<Object>} Response with spaces array
   */
  getSpacesByWorkspace: async (workspaceId) => {
    try {
      const response = await api.get(`/workspaces/${workspaceId}/spaces`);
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error(
        `Error fetching spaces for workspace ${workspaceId}:`,
        error
      );
      throw error;
    }
  },

  /**
   * @async
   * @function getSpaceById
   * @description Fetch a specific space by ID
   * @param {string} id - Space ID
   * @returns {Promise<Object>} Response with space object
   */
  getSpaceById: async (id) => {
    try {
      const response = await api.get(`/spaces/${id}`);
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error(`Error fetching space ${id}:`, error);
      throw error;
    }
  },

  /**
   * @async
   * @function createSpace
   * @description Create a new space within a workspace
   * @param {string} workspaceId - Parent workspace ID
   * @param {Object} data - Space data
   * @param {string} data.name - Space name
   * @param {string} data.description - Space description (optional)
   * @param {string|null} data.icon - Space icon/emoji (optional)
   * @param {string} data.color - Space color
   * @param {boolean} data.isPrivate - Privacy setting
   * @returns {Promise<Object>} Response with created space object
   */
  createSpace: async (workspaceId, data) => {
    try {
      const response = await api.post(
        `/workspaces/${workspaceId}/spaces`,
        data
      );
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error(`Error creating space in workspace ${workspaceId}:`, error);
      throw error;
    }
  },

  /**
   * @async
   * @function updateSpace
   * @description Update an existing space
   * @param {string} id - Space ID
   * @param {Object} data - Updated space data
   * @returns {Promise<Object>} Response with updated space object
   */
  updateSpace: async (id, data) => {
    try {
      const response = await api.put(`/spaces/${id}`, data);
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error(`Error updating space ${id}:`, error);
      throw error;
    }
  },

  /**
   * @async
   * @function deleteSpace
   * @description Delete a space
   * @param {string} id - Space ID
   * @returns {Promise<Object>} Success response
   */
  deleteSpace: async (id) => {
    try {
      const response = await api.delete(`/spaces/${id}`);
      return {
        success: true,
        message: response.data.message || "Space deleted successfully",
      };
    } catch (error) {
      console.error(`Error deleting space ${id}:`, error);
      throw error;
    }
  },
};
