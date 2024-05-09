import { cn } from "@/utils/utils";
import Link from "next/link";

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string;
  secondary?: boolean;
}

export default function ButtonLink(props: ButtonLinkProps) {
  const { url, children, className, secondary = false, ...otherProps } = props;

  return (
    <div>
      <Link href={url}>
        <span
          className={cn([
            className ? className : "",
            secondary
              ? "text-tertiary text-sm"
              : "bg-accent border-2 border-black text-black p-2 rounded-md hover:shadow-lg",
          ])}
          {...otherProps}
        >
          {children}
        </span>
      </Link>
    </div>
  );
}
