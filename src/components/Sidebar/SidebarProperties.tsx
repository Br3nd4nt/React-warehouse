import { FilterInterface } from "../../pages/Filter";
export interface SidebarProps {
    isOpen: boolean;
    filter: FilterInterface
    allCategories: string[]
    onFilterChange: (filter: FilterInterface) => void;
}