/**
 * @file workspaceService.js
 * @description Service for workspace-related API operations
 * Handles all HTTP requests to workspace endpoints
 */

import api from "./api";

/**
 * @namespace workspaceService
 * @description Collection of workspace-related API methods
 */
export const workspaceService = {
  /**
   * @async
   * @function getAllWorkspaces
   * @description Fetch all workspaces for the current user
   * @returns {Promise<Object>} Response with workspaces array
   */
  getAllWorkspaces: async () => {
    try {
      const response = await api.get("/workspaces");
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error("Error fetching workspaces:", error);
      throw error;
    }
  },

  /**
   * @async
   * @function getWorkspaceById
   * @description Fetch a specific workspace by ID
   * @param {string} id - Workspace ID
   * @returns {Promise<Object>} Response with workspace object
   */
  getWorkspaceById: async (id) => {
    try {
      const response = await api.get(`/workspaces/${id}`);
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error(`Error fetching workspace ${id}:`, error);
      throw error;
    }
  },

  /**
   * @async
   * @function createWorkspace
   * @description Create a new workspace
   * @param {Object} data - Workspace data
   * @param {string} data.name - Workspace name
   * @param {string|null} data.icon - Workspace icon/initial (optional)
   * @param {string} data.color - Workspace color
   * @param {Object} data.settings - Workspace settings (optional)
   * @returns {Promise<Object>} Response with created workspace object
   */
  createWorkspace: async (data) => {
    try {
      const response = await api.post("/workspaces", data);
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error("Error creating workspace:", error);
      throw error;
    }
  },

  /**
   * @async
   * @function updateWorkspace
   * @description Update an existing workspace
   * @param {string} id - Workspace ID
   * @param {Object} data - Updated workspace data
   * @returns {Promise<Object>} Response with updated workspace object
   */
  updateWorkspace: async (id, data) => {
    try {
      const response = await api.put(`/workspaces/${id}`, data);
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error(`Error updating workspace ${id}:`, error);
      throw error;
    }
  },

  /**
   * @async
   * @function deleteWorkspace
   * @description Delete a workspace
   * @param {string} id - Workspace ID
   * @returns {Promise<Object>} Success response
   */
  deleteWorkspace: async (id) => {
    try {
      const response = await api.delete(`/workspaces/${id}`);
      return {
        success: true,
        message: response.data.message || "Workspace deleted successfully",
      };
    } catch (error) {
      console.error(`Error deleting workspace ${id}:`, error);
      throw error;
    }
  },
};
