import { Input } from '@ui/Input';
import { BodyText } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Link from 'next/link';
import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  InvestifyLogo,
  TwitterIcon,
} from 'src/assets/icons';

function Footer() {
  return (
    <div className="bg-blue-800 py-4 lg:py-10">
      <Wrapper>
        <div className="pb-10">
          <Link href="/">
            <InvestifyLogo className="text-9xl" />
          </Link>
          <div className="flex items-center justify-between gap-6 flex-wrap text-white ">
            <BodyText className="max-w-80">
              Combining quantitative AI, hedge fund strategies, and trader
              education to deliver consistent results.
            </BodyText>
            <div className="flex flex-col gap-1 lg:gap-4">
              <BodyText className="!font-semibold">Reach us</BodyText>
              <BodyText>Our Blog</BodyText>
              <BodyText>Contact Us</BodyText>
              <BodyText>Become a Seller</BodyText>
            </div>
            <div className="space-y-4">
              <BodyText className="!font-semibold">
                Subscribe to our newsletter
              </BodyText>
              <BodyText>Never stay out of the loop.</BodyText>
              <Input className="w-72" placeholder="email@domain.co" />
            </div>
          </div>
        </div>
        <hr className="w-full mt-10" />
        <div className="flex flex-col items-center lg:flex-row gap-6 justify-between text-white py-2">
          <div className="flex items-center gap-4">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
          <div className="flex items-center gap-4">
            <BodyText className="!text-sm">Terms & Condition</BodyText>
            <BodyText className="!text-sm">Privacy Policy</BodyText>
            <BodyText className="!text-sm">
              © All rights reserved. Investify 2025.
            </BodyText>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Footer;
