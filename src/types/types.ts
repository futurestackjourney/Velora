export interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, pass: string) => void;
  logout: () => void;
  signup: (email: string, pass: string) => void;
}

export interface ChildrenProp {
    children: React.ReactNode;
}

// For Blog
export interface BlogItem {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  isNew?: boolean;
}

// FOr About

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}
