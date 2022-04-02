enum UserRole {
  ADMIN = "ADMIN", // Quản trị viên
  USER = "USER", // Người dùng
}

export interface IUser {
  uid?: string;
  username?: string;
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  role?: UserRole;
  signInProvider?: string;
  scopes?: string[];
  deviceTokens?: string[];
}

class User {
  private uid?: string;
  private username?: string;
  private name?: string;
  private email?: string;
  private phone?: string;
  private password?: string;
  private role?: UserRole;
  private scopes?: string[];
  private signInProvider?: string;
  private deviceTokens?: string[];

  constructor(user?: IUser);
  constructor(user?: IUser) {
    this.uid = user?.uid;
    this.username = user?.username;
    this.name = user?.name;
    this.email = user?.email;
    this.phone = user?.phone;
    this.password = user?.password;
    this.role = user?.role;
    this.signInProvider = user?.signInProvider;
    this.scopes = user?.scopes;
    this.deviceTokens = user?.deviceTokens;
  }

  get getUid(): string | undefined {
    return this.uid;
  }

  set setUid(uid: string | undefined) {
    this.uid = uid;
  }

  get getUsername(): string | undefined {
    return this.username;
  }

  set setUsername(username: string | undefined) {
    this.username = username;
  }

  get getName(): string | undefined {
    return this.name;
  }

  set setName(name: string | undefined) {
    this.name = name;
  }

  get getEmail(): string | undefined {
    return this.email;
  }

  set setEmail(email: string | undefined) {
    this.email = email;
  }

  get getPhone(): string | undefined {
    return this.phone;
  }

  set setPhone(phone: string | undefined) {
    this.phone = phone;
  }

  get getPassword(): string | undefined {
    return this.password;
  }

  set setPassword(password: string | undefined) {
    this.password = password;
  }

  get getRole(): UserRole | undefined {
    return this.role;
  }

  set setRole(role: UserRole | undefined) {
    this.role = role;
  }

  get getSignInProvider(): string | undefined {
    return this.signInProvider;
  }

  set setSignInProvider(signInProvider: string | undefined) {
    this.signInProvider = signInProvider;
  }

  get getScopes(): string[] | undefined {
    return this.scopes;
  }

  set setScopes(scopes: string[] | undefined) {
    this.scopes = scopes;
  }

  get getDeviceTokens(): string[] | undefined {
    return this.deviceTokens;
  }

  set setDeviceTokens(deviceTokens: string[] | undefined) {
    this.deviceTokens = deviceTokens;
  }
}

export default User;
