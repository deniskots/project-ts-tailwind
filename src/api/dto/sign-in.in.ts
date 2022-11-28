export interface SignInIn{
    user: User;
}
interface User {
    username: string;
    token: string;
    email: string;
    bio: string;
    image: string;
}