import React from 'react'
import ButtonAccent from '../Button/ButtonAccent'
import ButtonPrimary from '../Button/ButtonPrimary'
import {
  FaGithub,
  FaGithubSquare,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitterSquare,
} from 'react-icons/fa'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-dar-bg pt-20 ">
      <img
        src="/decor-wave.svg"
        className="fixed top-1/2 z-10 w-full  -translate-y-1/2 text-green-100 md:block"
        alt="decor-wave"
      />
      <section id="#home" className="relative z-20 mx-auto max-w-contain py-16">
        <div className="relative flex justify-center">
          <img
            src="/davies esiro.jpg"
            className="w-28 rounded-full md:w-40"
            alt="Davies Esiro"
          />
        </div>
        <Roles />
        <Typo />
        <ButtonGroup />
        <Socials />
      </section>
    </div>
  )
}

const Roles = () => (
  <div className="mt-4 text-center text-xs md:text-sm">
    <span className="mr-2 text-gray-500">Role{'   =>'}</span>
    <span className="cursor-pointer tracking-wide text-gray-300 duration-200 hover:text-accent-variant">
      Fullstack Developer
    </span>
  </div>
)

const Typo = () => (
  <div className="mt-8 mb-16 text-center">
    <h1 className="mb-4 text-5xl font-bold text-primary md:text-6xl lg:text-6xl 2xl:text-7xl 2xl:leading-snug">
      I Bring your dream
      <br />
      project to life
    </h1>

    <p className="mx-auto mt-8 max-w-xs text-sm leading-relaxed text-white md:max-w-prose md:text-base">
      My name is Davies Esiro. I build responsive, scalable and high performance
      products.
    </p>
  </div>
)

const ButtonGroup = () => (
  <div className="my-10 text-center">
    <ButtonPrimary className="w-40 px-3 py-4 text-sm">
      View CV/Resume
    </ButtonPrimary>
    <span className="inline-block w-5"></span>
    <ButtonAccent className="w-40 px-3 py-4 text-sm">Contact Me</ButtonAccent>
  </div>
)

const Socials = () => {
  const links = [
    {
      Icon: (props: any) => <FaTwitterSquare {...props} />,
      href: 'https://twitter.com/ojurereoluwad',
    },
    {
      Icon: (props: any) => <FaGithubSquare {...props} />,
      href: 'https://github.com/daviesesiro',
    },
    {
      Icon: (props: any) => <FaLinkedin {...props} />,
      href: 'https://github.com/daviesesiro',
    },
  ]
  return (
    <div className="flex justify-center space-x-4">
      {links.map((link, idx) => (
        <Link href={link.href}>
          <a target="_blank" className="social-link">
            <link.Icon className="h-7 w-8" />
          </a>
        </Link>
      ))}
    </div>
  )
}
export default Hero
