import { create } from "zustand";

interface SideBar {
  isCollapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

export const useSidebar = create<SideBar>((set) => ({
  isCollapsed: false,
  onExpand: () => set((state) => ({ isCollapsed: false })),
  onCollapse: () => set((state) => ({ isCollapsed: true })),
}));
