import './globals.css';

export const metadata = {
    title: 'Google',
    description: 'Google 검색 페이지',
}

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
        <body>
        {children}
        </body>
        </html>
    )
}