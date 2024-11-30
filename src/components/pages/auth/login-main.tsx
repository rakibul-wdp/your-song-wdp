'use client'

import { Container } from '@/components/common'
import { P, Title } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { InputField } from './input-field'
import { SocialLogin } from './social-login'

export const LoginMain: FC = () => {
  const router = useRouter()

  return (
    <section className="">
      <div className={cn('bg-auth-bg-img bg-center bg-no-repeat bg-cover')}>
        <Container
          className={cn(
            'flex flex-col lg:flex-row items-center justify-between',
            'pb-0 pt-[53px] sm:py-[53px] md:py-[67px]',
            'px-0 sm:px-5',
          )}
        >
          <Image src="/icons/auth-logo.svg" width={254} height={254} alt="auth page logo" />

          <div className="w-full sm:max-w-[627px] bg-white rounded-t-[35px] sm:rounded-[30px] pt-[37px] md:pt-16 px-[25px] md:px-[58px] pb-[183px] md:pb-[206px]">
            <div className="flex flex-col items-center md:items-start justify-center gap-[26px] md:gap-4 mb-[25px] md:mb-[42px]">
              <Title variant="H2">Login</Title>
              <P variant="P1">Login to access your Phones.Travels account</P>
            </div>

            <div className="w-full flex flex-col items-stretch justify-center gap-[17.5px] md:gap-6">
              <InputField label="Email" type="email" placeholder="ann.pine@gmail.com" />
              <InputField label="Password" type="password" placeholder="•••••••••••••••••" />
            </div>

            <div className="mt-[17px] mb-[23px] md:mt-[26px] md:mb-[33px] flex items-center justify-between">
              <div className="flex items-center justify-start gap-[6px] md:gap-2">
                <Checkbox className="border-secondary/40 data-[state=checked]:bg-blue-400 data-[state=checked]:border-blue-600" />
                <P variant="P1">Remember me</P>
              </div>
              <P variant="P1" className="text-primary">
                Forgot Password
              </P>
            </div>

            <Button
              variant="default"
              size="default"
              className="w-full"
              onClick={() => router.push('/profile')}
            >
              Login
            </Button>

            <P variant="P1" className="text-center mt-[14px] md:mt-5 mb-7 md:mb-[31px]">
              Don’t have an account?{' '}
              <Link href="/signup" className="text-primary">
                Sign up
              </Link>
            </P>

            <SocialLogin />
          </div>
        </Container>
      </div>
    </section>
  )
}
