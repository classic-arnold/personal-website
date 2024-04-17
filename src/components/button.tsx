import Link from "next/link";


interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    url: string,
}

export default function Button (props: ButtonProps) {
    const { url, ...otherProps } = props;

    return (
        <Link href={url} {...otherProps}>View Projects</Link>
    )
}