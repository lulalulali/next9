'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function HomePage(): JSX.Element {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <h1>欢迎, {session.user?.name}!</h1>
        {session.user?.image && (
          <Image src={session.user.image} alt="User image" width={100} height={100} />
        )}
        <button onClick={() => signOut()}>退出</button>
      </div>
    );
  }

  return (
    <div>
      <h1>您尚未登录</h1>
      <button onClick={() => signIn('google')}>使用 Google 登录</button>
    </div>
  );
}
