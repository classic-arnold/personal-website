import { cn } from "@/utils/utils";
import Link from "next/link";


interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    url: string
}

export default function ButtonLink (props: ButtonLinkProps) {
    const { url, children, className, ...otherProps } = props;

    return (
        <div>
            <Link 
            href={url} 
            className={cn([className ? className : "", "inline"])} 
            {...otherProps}>{children}</Link>
        </div>
    )
}