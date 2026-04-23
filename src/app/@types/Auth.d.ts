declare namespace IAuth {
  interface Root {
    success: boolean;
    message: string;
    data: Data;
  }

  interface Data {
    token: string;
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

  interface ISentOPT {
    phone: string;
    is_debug: boolean;
  }

  interface IVerifyOTP {
    phone: string;
    otp: string;
  }
}
