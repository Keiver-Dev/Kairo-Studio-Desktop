/**
 * @file WorkspaceContext.jsx
 * @description Context provider for managing workspace state globally
 * Provides workspace data and operations to all components
 */

import { createContext, useState, useEffect, useCallback } from "react";
import { workspaceService } from "@/services/workspaceService";

// Create context
export const WorkspaceContext = createContext(null);

/**
 * @component WorkspaceProvider
 * @description Provider component that wraps the app and provides workspace state
 */
export const WorkspaceProvider = ({ children }) => {
    const [workspaces, setWorkspaces] = useState([]);
    const [currentWorkspace, setCurrentWorkspace] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /**
     * Load all workspaces on mount
     */
    useEffect(() => {
        loadWorkspaces();
    }, []);

    /**
     * Load workspaces from service
     */
    const loadWorkspaces = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await workspaceService.getAllWorkspaces();

            if (response.success) {
                setWorkspaces(response.data);

                // Set current workspace from localStorage or default to first
                const savedWorkspaceId = localStorage.getItem("currentWorkspaceId");
                const workspace = savedWorkspaceId
                    ? response.data.find((ws) => ws.id === savedWorkspaceId)
                    : response.data[0];

                setCurrentWorkspace(workspace || response.data[0]);
            }
        } catch (err) {
            console.error("Error loading workspaces:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    /**
     * Switch to a different workspace
     */
    const switchWorkspace = useCallback((workspaceId) => {
        const workspace = workspaces.find((ws) => ws.id === workspaceId);

        if (workspace) {
            setCurrentWorkspace(workspace);
            localStorage.setItem("currentWorkspaceId", workspaceId);
        } else {
            console.error(`Workspace with ID ${workspaceId} not found`);
        }
    }, [workspaces]);

    /**
     * Create a new workspace
     */
    const createWorkspace = useCallback(async (data) => {
        try {
            setLoading(true);
            setError(null);
            const response = await workspaceService.createWorkspace(data);

            if (response.success) {
                setWorkspaces((prev) => [...prev, response.data]);
                // Optionally switch to the new workspace
                setCurrentWorkspace(response.data);
                localStorage.setItem("currentWorkspaceId", response.data.id);
                return response.data;
            }
        } catch (err) {
            console.error("Error creating workspace:", err);
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * Update an existing workspace
     */
    const updateWorkspace = useCallback(async (workspaceId, data) => {
        try {
            setLoading(true);
            setError(null);
            const response = await workspaceService.updateWorkspace(workspaceId, data);

            if (response.success) {
                setWorkspaces((prev) =>
                    prev.map((ws) => (ws.id === workspaceId ? response.data : ws))
                );

                // Update current workspace if it's the one being updated
                if (currentWorkspace?.id === workspaceId) {
                    setCurrentWorkspace(response.data);
                }

                return response.data;
            }
        } catch (err) {
            console.error("Error updating workspace:", err);
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [currentWorkspace]);

    /**
     * Delete a workspace
     */
    const deleteWorkspace = useCallback(async (workspaceId) => {
        try {
            setLoading(true);
            setError(null);
            const response = await workspaceService.deleteWorkspace(workspaceId);

            if (response.success) {
                setWorkspaces((prev) => prev.filter((ws) => ws.id !== workspaceId));

                // If deleting current workspace, switch to first available
                if (currentWorkspace?.id === workspaceId) {
                    const remaining = workspaces.filter((ws) => ws.id !== workspaceId);
                    if (remaining.length > 0) {
                        setCurrentWorkspace(remaining[0]);
                        localStorage.setItem("currentWorkspaceId", remaining[0].id);
                    } else {
                        setCurrentWorkspace(null);
                        localStorage.removeItem("currentWorkspaceId");
                    }
                }

                return true;
            }
        } catch (err) {
            console.error("Error deleting workspace:", err);
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [currentWorkspace, workspaces]);

    const value = {
        workspaces,
        currentWorkspace,
        loading,
        error,
        switchWorkspace,
        createWorkspace,
        updateWorkspace,
        deleteWorkspace,
        refreshWorkspaces: loadWorkspaces,
    };

    return (
        <WorkspaceContext.Provider value={value}>
            {children}
        </WorkspaceContext.Provider>
    );
};
