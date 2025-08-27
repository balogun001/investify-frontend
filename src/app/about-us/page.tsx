import { Button } from '@ui/Button';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import React from 'react';
import { RightIcon } from 'src/assets/icons';
import { BgOverlayOne, FounderImage } from 'src/assets/images';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

function page() {
  return (
    <>
      <div className="relative bg-blue-800 py-4 lg:py-10">
        <Image
          src={BgOverlayOne}
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <Wrapper className="relative z-10">
          <Header />
          <div className="flex flex-col gap-8 lg:my-10">
            <div className="space-y-8">
              <span
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                className="text-4xl lg:text-h1 !font-bold text-white tracking-wider"
              >
                About us
              </span>
              <BodyText className="text-white max-w-2xl">
                Our trading Platform is designed to meet the demanding needs of
                trading investors looking for maximum performance, reliability
                and total data safety.
              </BodyText>
              <Button>
                Register now <RightIcon className="text-2xl" />
              </Button>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="">
        <Wrapper className="py-10 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-10 flex-wrap">
            <div className="flex-1">
              <Image src={FounderImage} alt="Founder" className="h-auto" />
            </div>
            <div className="flex-1 space-y-8">
              <Button kinds="secondary">Globally Recognized</Button>
              <Title>
                We are a globally systematic <br /> investment manager
              </Title>
              <BodyText className="tracking-widest">
                Our trading Platform is designed to meet the demanding needs of
                trading investors looking for maximum performance, reliability
                and total data safety. We have ambitious plans to implement a
                wide range of investment programs and products, as well as
                several activities related to training and mentoring in finance
                Create a diversified investment portfolio, with a variety of
                hundreds of financial instruments to choose from. Trade and
                invest in top financial instruments, including a wide selection
                of stocks. Enjoy near-instant execution of market orders and no
                daily withdrawal limits. Invest in various markets on an
                intuitive trading platform.
              </BodyText>
              <Button>Sign Up</Button>
            </div>
          </div>
          <div className="py-8 space-y-8">
            <BodyText>
              We believe in the power of disruption and the importance of
              decentralization to create a new system that acts in the best
              interest of everyone. Each member of our team brings something
              unique and innovative to the table, but the common thread that
              links us together is our passion for the equity markets,
              blockchain, equality, and leading the next financial revolution
              that changes the equation to bring power back to the people.
            </BodyText>
            <BodyText>
              Choose among a wide variety of Currencies, Cash Indices, Cash
              Equities, major digital assets,ETFS & cryptocurrencies, including
              Bitcoin, Ethereum, EOS, Litecoin, Ripple, NEO, Monero, Energies
              and Oil – all from a single account.
            </BodyText>
            <BodyText>
              At Investify, sustainability is a core investment conviction. As
              the race to net zero accelerates and action to preserve the
              world’s vital natural capital intensifies, we believe that
              investors with the skills to adapt will capture new growth
              opportunities and avoid emerging risks. Invest in the digital
              asset economy with complete trust. Invest here and be rest assured
              of investment portfolio security, fast and accurate payout as
              withdrawals and all other transactions in the Investify Services
              are automatically regulated and processed respectively.
            </BodyText>
            <BodyText>
              Our expertise ensures successful, easy, fast, secure, and
              cost-effective connectivity to the world’s largest global market.
              Investify is dedicated to advancing the community. Investify’s
              platform provides members with curated services unavailable
              through traditional institutions.
            </BodyText>
            <BodyText>
              Our goal is to act as a catalyst for financial disruption on a
              global scale by offering services that will bring the next 100
              million people into general financial markets system.
            </BodyText>
            <BodyText>
              Our clients believe in the value of digital assets to create new
              business opportunities and transform the financial industry. They
              want the security provided by a regulated digital trading and
              investment bank, and the tech-driven innovation and agility of a
              global digital asset specialist.
            </BodyText>
            <BodyText>
              At Investify, we empower institutional and private qualified
              investors, corporates, banks and other financial institutions to
              invest in the emerging digital asset economy with complete trust.
              We call the emergence of a trusted, secure and efficient digital
              asset economy Future Finance (FF). Every day, our team of digital
              asset experts are working towards Future Finance by leveraging the
              advantages of DLT to serve our clients with innovative products
              and services.
            </BodyText>
            <BodyText>
              Distributed Ledger Technology (DLT) refers to the technological
              infrastructure and protocols that allows simultaneous access,
              validation, and record updating in an immutable manner across a
              network that’s spread across multiple entities or locations. We
              strive towards transforming the financial industry by realising
              the potential of DLT, and through this to help create a world
              where people have more control, freedom and direct access to
              ownership and value of how they invest, trade, earn and ROI
              respectively as all transactions in the system including deposits,
              withdrawals and all other transactions provided in the company
              platform website.
            </BodyText>
          </div>

          <div className="space-y-8">
            <Title>Our Purpose</Title>
            <BodyText>
              This means supporting our colleagues, customers and clients, and
              the communities and environment in which they operate, for the
              benefit of all our stakeholders. It means helping people and
              businesses unlock their potential and plan for the future with
              confidence, building relationships that stand the test of time.
              And it means that we continue to be there for the long-term,
              whatever the climate, making decisions that are right for today
              and for generations to come.
            </BodyText>
            <BodyText>
              To achieve this, our long-term strategic approach place
              exceptional service at the heart of everything we do. Each of our
              diverse, specialist businesses have a deep industry knowledge, so
              they can understand the challenges and opportunities that our
              customers and clients face. We support the unique needs of our
              customers and clients to ensure that they thrive, rather than
              simply survive, whatever the market conditions.
            </BodyText>
            <BodyText>
              We believe in putting our customers and clients first. Our
              cultural attributes bring out the very best of our people, skills
              and strong reputation that we have built with our stakeholders
              over many years. A combination of expertise, service and
              relationships with teamwork, integrity and prudence underpins our
              approach and gives us the tools to thrive over the long term. And
              we recognise that to help the people and businesses of Britain
              thrive, we also have a responsibility to help address the social,
              economic and environmental challenges facing our business,
              employees and clients, now and into the future.
            </BodyText>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </>
  );
}

export default page;
