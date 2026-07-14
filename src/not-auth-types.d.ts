import "better-auth";

declare module "better-auth" {
  interface User {
    role?: string;
    status?: string;
  }
  interface Session {
    user: User;
  }
}

// 🚀 ক্লায়েন্ট সাইড হুকের টাইপকেও একদম সিকিউর করার জন্য এই এক্সট্রা পার্টটুকু যোগ কর:
declare module "better-auth/client" {
  interface User {
    role?: string;
    status?: string;
  }
  interface Session {
    user: User;
  }
}
