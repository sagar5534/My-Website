// import { allBlogs } from ".contentlayer/generated";
// import { allProjects } from ".contentlayer/generated";

import Workplaces from "@/app/components/Workplaces";
import ConnectLinks from "@/app/components/ConnectLinks";
import Link from "@/app/components/Link";
import Greeting from "@/app/components/Greeting";
import Section from "@/app/components/Section";
import AgilisLogo from "public/work_logos/agilis_networks_logo.png";
import TorontoLogo from "public/work_logos/city_of_toronto_logo.jpeg";
import PCCLogo from "public/work_logos/pcc_logo.svg";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Favicon from "public/favicon.svg";
import Image, { StaticImageData } from "next/image";

// import PostList from "@/app/blog/components/PostList";
// import ProjectList from "@/app/projects/components/ProjectList";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <section className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9">
        <div className="flex animate-in items-center gap-4 md:w-32">
          <Image src={Favicon} width={90} height={90} alt="Sagar Patel" />
        </div>
        <div className="flex flex-row gap-8">
          <div className="space-y-4">
            <h1 className="animate-in text-3xl font-semibold tracking-tight text-primary">
              hey, Sagar here!
            </h1>
            <p
              className="max-w-lg animate-in text-secondary"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              I&apos;m a software engineer in NYC building for the web with a
              design-first mindset. On the side, I create{" "}
              <Link href="https://youtube.com/@brianruizy">YouTube</Link> videos
              about tech and productivity.
            </p>
          </div>
        </div>
      </section>

      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              <Greeting /> I&apos;m Brian Ruiz! Originally from Honduras,
              I&apos;m now based in the vibrant place that is New York City.
            </p>
            <p>
              My curiosity for computers began at age 10, which naturally led me
              to pursue a career in tech. I&apos;ve been working as a software
              engineer, specializing in full-stack development and design, for{" "}
              {new Date().getFullYear() - 2019} years now!
            </p>
            <p>
              Alongside my coding journey, I run a{" "}
              <Link
                className="underline"
                href="https://www.youtube.com/@brianruizy"
              >
                YouTube
              </Link>{" "}
              channel where I share insights on technology, productive coding
              vlogs, and occasionally practice my filmmaking skills.{" "}
            </p>
            <p>
              When I&apos;m not at my desk, you can find me at the gym, biking
              around the city on my e-bike, or enjoying some coffee at a local
              shop!
            </p>
          </div>
        </Section>
      </div>

      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              I specialize in Python, data analytics, React, web development,
              UI/UX, and product design. But I am always learning new things.
              Here are some of the places I have worked.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>

      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <ArrowUpRightIcon className="ml-auto h-5 w-5 text-secondary" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "PointClickCare",
    date: "2020 - Present",
    imageSrc: PCCLogo,
    link: "https://pointclickcare.com",
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "PointClickCare",
    date: "2020",
    imageSrc: PCCLogo,
    link: "https://pointclickcare.com",
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "Agilis Networks",
    date: "2019",
    imageSrc: AgilisLogo,
    link: "https://agilisnet.com",
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    company: "City of Toronto",
    date: "2018",
    imageSrc: TorontoLogo,
    link: "https://www.toronto.ca",
  },
];
