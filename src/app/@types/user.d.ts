declare namespace IUser {
  interface IUserResponse {
    success: boolean;
    message: string;
    data: Data;
  }

  interface Data {
    user: User;
  }

  interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    avatar_url: any;
    role: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
  }
}
