/**
 * @file SpaceContext.jsx
 * @description Context provider for managing space state within a workspace
 * Provides space data and operations to all components
 */

import { createContext, useState, useEffect, useCallback, useContext } from "react";
import { spaceService } from "@/services/spaceService";
import { WorkspaceContext } from "./WorkspaceContext";

// Create context
export const SpaceContext = createContext(null);

/**
 * @component SpaceProvider
 * @description Provider component that wraps the app and provides space state
 */
export const SpaceProvider = ({ children }) => {
    const { currentWorkspace } = useContext(WorkspaceContext);

    const [spaces, setSpaces] = useState([]);
    const [currentSpace, setCurrentSpace] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /**
     * Load spaces when workspace changes
     */
    useEffect(() => {
        if (currentWorkspace) {
            loadSpaces(currentWorkspace.id);
        } else {
            setSpaces([]);
            setCurrentSpace(null);
            setLoading(false); // Fix: Stop loading if no workspace
        }
    }, [currentWorkspace]);

    /**
     * Load spaces for current workspace
     */
    const loadSpaces = async (workspaceId) => {
        try {
            setLoading(true);
            setError(null);
            const response = await spaceService.getSpacesByWorkspace(workspaceId);

            if (response.success) {
                setSpaces(response.data);

                // Set current space from localStorage or default to first
                const savedSpaceId = localStorage.getItem(`currentSpaceId_${workspaceId}`);
                const space = savedSpaceId
                    ? response.data.find((sp) => sp.id === savedSpaceId)
                    : response.data[0];

                setCurrentSpace(space || response.data[0] || null);
            }
        } catch (err) {
            console.error("Error loading spaces:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    /**
     * Switch to a different space
     */
    const switchSpace = useCallback((spaceId) => {
        const space = spaces.find((sp) => sp.id === spaceId);

        if (space) {
            setCurrentSpace(space);
            if (currentWorkspace) {
                localStorage.setItem(`currentSpaceId_${currentWorkspace.id}`, spaceId);
            }
        } else {
            console.error(`Space with ID ${spaceId} not found`);
        }
    }, [spaces, currentWorkspace]);

    /**
     * Create a new space
     */
    const createSpace = useCallback(async (data) => {
        if (!currentWorkspace) {
            throw new Error("No workspace selected");
        }

        try {
            setLoading(true);
            setError(null);
            const response = await spaceService.createSpace(currentWorkspace.id, data);

            if (response.success) {
                setSpaces((prev) => [...prev, response.data]);
                // Optionally switch to the new space
                setCurrentSpace(response.data);
                localStorage.setItem(`currentSpaceId_${currentWorkspace.id}`, response.data.id);
                return response.data;
            }
        } catch (err) {
            console.error("Error creating space:", err);
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [currentWorkspace]);

    /**
     * Update an existing space
     */
    const updateSpace = useCallback(async (spaceId, data) => {
        try {
            setLoading(true);
            setError(null);
            const response = await spaceService.updateSpace(spaceId, data);

            if (response.success) {
                setSpaces((prev) =>
                    prev.map((sp) => (sp.id === spaceId ? response.data : sp))
                );

                // Update current space if it's the one being updated
                if (currentSpace?.id === spaceId) {
                    setCurrentSpace(response.data);
                }

                return response.data;
            }
        } catch (err) {
            console.error("Error updating space:", err);
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [currentSpace]);

    /**
     * Delete a space
     */
    const deleteSpace = useCallback(async (spaceId) => {
        try {
            setLoading(true);
            setError(null);
            const response = await spaceService.deleteSpace(spaceId);

            if (response.success) {
                setSpaces((prev) => prev.filter((sp) => sp.id !== spaceId));

                // If deleting current space, switch to first available
                if (currentSpace?.id === spaceId) {
                    const remaining = spaces.filter((sp) => sp.id !== spaceId);
                    if (remaining.length > 0) {
                        setCurrentSpace(remaining[0]);
                        if (currentWorkspace) {
                            localStorage.setItem(`currentSpaceId_${currentWorkspace.id}`, remaining[0].id);
                        }
                    } else {
                        setCurrentSpace(null);
                        if (currentWorkspace) {
                            localStorage.removeItem(`currentSpaceId_${currentWorkspace.id}`);
                        }
                    }
                }

                return true;
            }
        } catch (err) {
            console.error("Error deleting space:", err);
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [currentSpace, spaces, currentWorkspace]);

    const value = {
        spaces,
        currentSpace,
        loading,
        error,
        switchSpace,
        createSpace,
        updateSpace,
        deleteSpace,
        refreshSpaces: () => currentWorkspace && loadSpaces(currentWorkspace.id),
    };

    return (
        <SpaceContext.Provider value={value}>
            {children}
        </SpaceContext.Provider>
    );
};
