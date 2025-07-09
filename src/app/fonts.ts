// app/fonts.ts
import { Inter, Josefin_Sans } from 'next/font/google';

export const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Add the weights you need
  variable: '--font-josefin',
  display: 'swap',
});
export const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Add the weights you need
  variable: '--font-inter',
  display: 'swap',
});
