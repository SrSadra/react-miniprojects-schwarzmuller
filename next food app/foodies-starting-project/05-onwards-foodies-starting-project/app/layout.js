import BackgroundHtml from './components/main-header/BackgroundHtml';
import Header from './components/main-header/Header';
import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BackgroundHtml />
        <Header />
        {children}
      </body>
    </html>
  );
}
