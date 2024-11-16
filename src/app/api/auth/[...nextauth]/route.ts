import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextApiRequest, NextApiResponse } from "next";

// 配置 NextAuth
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

// 处理 GET 请求
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, authOptions);  // 使用 NextApiRequest 和 NextApiResponse
}

// 处理 POST 请求
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, authOptions);  // 使用 NextApiRequest 和 NextApiResponse
}
