import { Button } from '@ui/Button';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import { RightIcon } from 'src/assets/icons';
import ShieldIcon from 'src/assets/icons/ShieldIcon';
import {
  BgOverlayOne,
  bgOverlayTwo,
  CardImage,
  CryptoCoin,
  TradingImage,
} from 'src/assets/images';
import Card from 'src/components/Card';
import Header from 'src/components/Header';
import { earningProcess, offers, plans } from 'src/data';
import { FaArrowRightLong } from 'react-icons/fa6';
import Footer from 'src/components/Footer';

export default function Home() {
  return (
    <div>
      <div className="relative bg-blue-800 py-4 lg:py-10">
        <Image
          src={BgOverlayOne}
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <Wrapper className="relative z-10">
          <Header />
          <div className="flex flex-col md:flex-row justify-between gap-8 lg:mt-10">
            <div className="space-y-8">
              <span
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                className="text-4xl lg:text-h1 !font-bold text-white tracking-wider"
              >
                Maximize Your Profits <br /> with Data-Driven Trading <br />
                Strategies
              </span>
              <BodyText className="text-white">
                Investify is a powerful trading platform that provides you with
                the <br />
                tools and insights you need to make informed trading decisions.
              </BodyText>
              <div className="flex gap-6 mt-4">
                <Button>
                  Register <RightIcon className="text-2xl" />
                </Button>
                <Button kinds="secondary">Discover More</Button>
              </div>
            </div>

            <div className="flex gap-6 md:h-40">
              <div className="bg-green-50 w-64 rounded-lg p-4 flex flex-col justify-between">
                <div className="min-h-11 flex justify-between items-start">
                  <BodyText className="text-h2">25K+</BodyText>
                  <ShieldIcon />
                </div>
                <BodyText>Trusted by 25,000+ traders worldwide</BodyText>
              </div>
              <div className="bg-green-50 w-64 rounded-lg p-4 flex flex-col justify-between">
                <div className="min-h-11 flex justify-between items-start">
                  <BodyText className="text-h2">4.5 star</BodyText>
                  <ShieldIcon />
                </div>
                <BodyText>
                  Rated 4.9/5 stars by all our clients and users globally
                </BodyText>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      <Wrapper>
        <div className="my-6 md:my-20">
          <BodyText className="text-green-800 font-semibold">
            What we offer ?
          </BodyText>
          <div className="flex flex-col md:flex-row justify-between items-center pt-4">
            <div className="flex flex-col gap-4">
              <span
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                className="text-h1 tracking-wider"
              >
                The Investify Product
                <br /> offering Suite
              </span>
            </div>
            <BodyText className="text-gray-500">
              As funds flow into the company, earnings become continuous and are{' '}
              <br />
              distributed evenly among investors based on their deposit size.
              Our
              <br /> system guarantees free registration, stable hourly profit
              accrual, 24/7
              <br /> access to your user account and funds, automatic processing
              of all
              <br /> transactions, and instant withdrawals.
            </BodyText>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 justify-between my-5">
          {offers.map((offer) => (
            <Card
              key={offer.title}
              className="flex flex-col flex-1 basis-[300px] min-w-[300px] bg-[#102028] text-white"
            >
              <Image src={CardImage} alt="image" />

              <Button className="mt-4">{offer.header}</Button>

              <div className="w-[60%] min-h-[80px] mt-4">
                <BodyText className="!text-xl font-semibold">
                  {offer.title}
                </BodyText>
              </div>

              <div className="w-[80%] pb-4">
                <BodyText className="text-sm text-gray-500">
                  {offer.description}
                </BodyText>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 my-10 lg:my-20">
          <Image
            src={CryptoCoin}
            alt="image"
            className="w-[500px] md:h-[500px] rounded-3xl"
          />
          <div className="space-y-6">
            <BodyText className="text-green-800 font-semibold !py-4">
              Who we are ?
            </BodyText>
            <span
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              className="text-h1 tracking-wider"
            >
              Trusted by Traders,
              <br /> Built by Experts
            </span>
            <div className="space-y-10">
              <BodyText className="max-w-[600px] text-gray-500">
                We’re a team of quant analysts, hedge fund veterans, and
                software engineers who cracked the code to profitable trading.
                Since 2018, we’ve helped 35,000+ traders navigate volatile
                markets with AI-powered tools.
              </BodyText>
              <BodyText className="max-w-[600px] text-gray-500">
                Why Choose Us? Proven Track Record 85%+ signal accuracy over 3
                years (audited) $2.1B+ in tracked portfolio volume Transparent &
                Secure No shady promises - real backtested results Bank-level
                encryption for all data Education-First Approach Free beginner
                guides + advanced masterclasses 24/7 expert support
              </BodyText>
            </div>
          </div>
        </div>
      </Wrapper>

      <div className="bg-blue-100 py-20">
        <Wrapper className="!max-w-[1000px]">
          <div className="space-y-6 text-center">
            <BodyText className="text-green-800 font-semibold !py-4">
              Our Earning process
            </BodyText>
            <span
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              className="text-xl lg:text-h1 tracking-wider"
            >
              Be part of our life changing options, secure a great place for
              yourself in the market and attain financial freedom when you
              invest with us today!
            </span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center py-10 gap-6">
            {earningProcess.map((process) => {
              const Icon = process.icon;
              return (
                <div
                  key={process.title}
                  className="flex flex-col items-center justify-center text-center gap-4 max-w-60"
                >
                  <Icon className="text-5xl" />
                  <BodyText className="!font-semibold">
                    {process.title}
                  </BodyText>
                  <BodyText className="text-sm">{process.description}</BodyText>
                </div>
              );
            })}
          </div>
        </Wrapper>
      </div>

      <Wrapper className="py-10 lg:py-20">
        <div className="space-y-6 flex flex-col justify-center text-center">
          <div className="">
            <BodyText className="text-green-800 font-semibold !py-4">
              Our Earning process
            </BodyText>
            <span
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              className="text-xl lg:text-h1 tracking-wider"
            >
              Trusted by Traders, Built by <br /> Experts
            </span>
          </div>
          <BodyText className="max-w-[600px] text-gray-500 mx-auto">
            We’re a team of quant analysts, hedge fund veterans, and software
            engineers who cracked the code to profitable trading. Since 2018,
          </BodyText>
          <Image src={TradingImage} alt="image" />
        </div>
      </Wrapper>

      <Wrapper className="py-10">
        <div className="space-y-6 flex flex-col justify-center text-center">
          <div className="">
            <BodyText className="text-green-800 font-semibold !py-4">
              Our returns
            </BodyText>
            <span
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              className="text-xl lg:text-h1 tracking-wider"
            >
              Investment Plans
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card
                key={plan.title}
                className={`relative rounded-xl text-white ${plan.color} flex flex-col`}
              >
                <Image
                  src={bgOverlayTwo}
                  alt="bg"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative flex flex-col items-center space-y-10 p-4 flex-1">
                  <Button>{plan.title}</Button>
                  <Title>{plan.percent}</Title>
                  <BodyText>{plan.description}</BodyText>

                  <div className="w-full flex justify-between items-center">
                    <div className="space-y-4">
                      <Title>{plan.min}</Title>
                      <BodyText>Minimum</BodyText>
                    </div>
                    <div className="space-y-4">
                      <Title>{plan.max}</Title>
                      <BodyText>Maximum</BodyText>
                    </div>
                  </div>

                  <div className="mt-auto w-full flex justify-end">
                    <Button>
                      Make Deposit <FaArrowRightLong />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}
