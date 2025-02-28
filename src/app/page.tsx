import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Social Share Example - My NextJS App',
  description: 'This page demonstrates how to set up OpenGraph and Twitter Card meta tags in NextJS.',
  openGraph: {
    title: '오리너구리',
    description: '오리너구리 이미지입니다. :)',
    type: 'website',
    locale: 'ko_KR',
    siteName: 'My NextJS App',
    images: [
      { url: '/platypus.webp', width: 512, height: 512, alt: '오리너구리 이미지' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '오리너구리',
    description: '오리너구리 이미지입니다. :)',
    images: ['/platypus.webp'],
  }
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-blue-50 to-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Social Share Example</h1>
      <p className="mt-4 text-lg text-gray-600">
        이 페이지는 Head 컴포넌트를 사용해 OpenGraph 및 Twitter Card meta 태그를
        설정하는 방법을 보여줍니다.
      </p>
      <p className="mt-4 text-sm text-gray-500">
        참고: 메타 태그는 페이지가 배포된 후에 적용됩니다. 페이지를 배포한 후,
        Facebook Sharing Debugger나 Twitter Card Validator와 같은 도구로
        미리보기를 확인하세요.
      </p>
      <div className="mt-8 relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
        <Image
          src="/platypus.webp"
          alt="오리너구리 이미지" 
          className="w-full max-w-md rounded-lg shadow-lg relative z-10"
          width={512}
          height={512}
        />
      </div>
    </main>
  );
}
