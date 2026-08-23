export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface MobileMenuProps {
  items: NavigationItem[];
  isOpen: boolean;
  onClose: () => void;
}

export interface HeaderProps {
  items: NavigationItem[];
}
