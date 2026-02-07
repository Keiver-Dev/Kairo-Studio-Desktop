/**
 * @file useSpace.js
 * @description Custom hook to access space context
 * Provides easy access to space state and operations
 */

import { useContext } from "react";
import { SpaceContext } from "@/contexts/SpaceContext";

/**
 * @function useSpace
 * @description Hook to access space context
 * @returns {Object} Space context value
 * @throws {Error} If used outside SpaceProvider
 *
 * @example
 * const { currentSpace, spaces, createSpace, deleteSpace } = useSpace();
 */
export const useSpace = () => {
  const context = useContext(SpaceContext);

  if (!context) {
    throw new Error("useSpace must be used within a SpaceProvider");
  }

  return context;
};
