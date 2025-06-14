import Link from "@/app/components/Link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import ProjectList from "@/app/projects/components/ProjectList";
import { allProjects } from ".contentlayer/generated";
import Section from "../components/Section";

export default function Work() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A glimpse into me.
        </p>
      </div>

      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <p className="tracking-tight text-secondary">Projects</p>
        <ProjectList projects={allProjects} />
      </div>

      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <div className="space-y-4">
          <Link
            className="group flex items-center gap-2 tracking-tight text-secondary"
            href="/blog"
          >
            Latest blogs
            <ArrowUpRightIcon className="h-5 w-5 text-tertiary transition-all group-hover:text-primary" />
          </Link>
          <p className="max-w-lg text-pretty text-tertiary">
            I occasionally write about programming, productivity, and more.
            Check me out and subscribe to stay up to date.
          </p>
        </div>
        {/* <PostList posts={blogs} /> */}
      </div>
    </div>
  );
}
