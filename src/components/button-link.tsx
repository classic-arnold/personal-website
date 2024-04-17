import Link from "next/link";


interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    url: string
}

export default function ButtonLink (props: ButtonLinkProps) {
    const { url, children, ...otherProps } = props;

    return (
        <Link href={url} {...otherProps}>{children}</Link>
    )
}