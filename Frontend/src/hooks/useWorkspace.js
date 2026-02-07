/**
 * @file useWorkspace.js
 * @description Custom hook to access workspace context
 * Provides easy access to workspace state and operations
 */

import { useContext } from "react";
import { WorkspaceContext } from "@/contexts/WorkspaceContext";

/**
 * @function useWorkspace
 * @description Hook to access workspace context
 * @returns {Object} Workspace context value
 * @throws {Error} If used outside WorkspaceProvider
 *
 * @example
 * const { currentWorkspace, workspaces, switchWorkspace } = useWorkspace();
 */
export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);

  if (!context) {
    throw new Error("useWorkspace must be used within a WorkspaceProvider");
  }

  return context;
};
