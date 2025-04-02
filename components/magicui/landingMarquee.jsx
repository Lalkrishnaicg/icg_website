import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";
import Skeleton from "@mui/material/Skeleton";

const reviews = [
  {
    id: 1,
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it.I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    id: 2,
    name: "Jill",
    username: "@jill",
    body: "I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it.I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    id: 3,
    name: "John",
    username: "@john",
    body: "I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it.I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body, id }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-56 cursor-pointer overflow-hidden rounded-xl border p-4",
        // Light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // Dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {id === 2 ? (
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt={name}
            src={img}
          />
        ) : (
          <Skeleton variant="circular" width={32} height={32} />
        )}
        <div className="flex flex-col">
          {id === 2 ? (
            <>
              <figcaption className="text-sm font-medium dark:text-white">
                {name}
              </figcaption>
              <p className="text-xs font-medium dark:text-white/40">
                {username}
              </p>
            </>
          ) : (
            <>
              <Skeleton variant="text" width={100} />
              <Skeleton variant="text" width={80} />
            </>
          )}
        </div>
      </div>
      {id === 2 ? (
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      ) : (
        <>
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="80%" />
        </>
      )}
    </figure>
  );
};

export function LandingMarquee() {
  return (
    <div className="relative flex h-screen w-screen flex-row items-center justify-center gap-4 overflow-hidden [perspective:800px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(160px) translateY(0px) translateZ(-80px) rotateX(45deg) rotateY(-5deg) rotateZ(40deg)",
          filter: "drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15))",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
