import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";


const style: CSSProperties = {
    color: "blue",
    textDecoration: "underline"
}

interface Props {
    text: string;
    href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {

    const {asPath} = useRouter();

    return (
        <Link href={href} style={asPath === href ? style : undefined}>
            {text}
        </Link>
    );
}
