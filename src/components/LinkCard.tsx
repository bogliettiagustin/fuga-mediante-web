import Image from "next/image";
import Link from "next/link";

export type LinkCardProps = {
  title: string;
  href: string;
  image: string;
  /** CSS object-position for the image crop (defaults to center). */
  imagePosition?: string;
};

export default function LinkCard({
  title,
  href,
  image,
  imagePosition,
  eager = false,
}: LinkCardProps & { eager?: boolean }) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      className="flex w-full flex-col transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="relative h-[222px] w-full overflow-hidden rounded-t-[5px]">
        <Image
          src={image}
          alt=""
          fill
          loading={eager ? "eager" : "lazy"}
          sizes="(min-width: 640px) 527px, 100vw"
          className="object-cover"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      </div>
      <span className="flex w-full items-center justify-center rounded-b-[5px] bg-black px-[10px] py-5 text-center text-xl font-bold leading-[0.9] text-[#f4eee2]">
        {title}
      </span>
    </Link>
  );
}
