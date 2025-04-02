import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";
// import { Marquee } from "@/registry/magicui/marquee";
import { SiAffinitydesigner } from "react-icons/si";
import { MdDeveloperBoard } from "react-icons/md";
import { SiLibreofficewriter } from "react-icons/si";
import { SiGooglemarketingplatform } from "react-icons/si";
import { IoPeople } from "react-icons/io5";
import { SiTaichigraphics } from "react-icons/si";

const reviews = [
  {
    name: <SiAffinitydesigner className="text-red-500" />,
    // username: "@jack",
    body: "Designer",
    //  img: "https://avatar.vercel.sh/jack",
  },
  {
    name: <MdDeveloperBoard className="text-blue-500" />,
    // username: "@jill",
    body: "Development",
    // img: "https://avatar.vercel.sh/jill",
  },
  {
    name: <SiLibreofficewriter />,
    // username: "@john",
    body: "Content Writer",
    // img: "https://avatar.vercel.sh/john",
  },
  {
    name: <SiGooglemarketingplatform className="text-yellow-400" />,
    //  username: "@jane",
    body: "Marketing",
    //  img: "https://avatar.vercel.sh/jane",
  },
  {
    name: <IoPeople className="text-fuchsia-700" />,
    //  username: "@jenny",
    body: "Humon Resource",
    //  img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: <SiTaichigraphics className="text-red-500" />,
    // username: "@james",
    body: "Graphics",
    // img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex items-center gap-2">
        /{/* Uncomment and use the img tag if needed */}
        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <div className="flex flex-col">
          <figcaption className="font-medium text-2xl dark:text-white">
            {name}
          </figcaption>
          {/* Uncomment and use the p tag if needed */}
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
        /<blockquote className="text-xl">{body}</blockquote>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
