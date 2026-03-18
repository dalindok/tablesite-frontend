declare namespace IUser {
  export interface IUserData {
    user_id: number;
    name: string;
    email: string;
    phone: string;
    role: UserRole;
    avatar_url: string | null;
    is_active: boolean;
    city: string;
    created_at: string;
    updated_at: string;
  }
}
