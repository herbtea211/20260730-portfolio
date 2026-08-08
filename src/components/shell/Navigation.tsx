import Link from "next/link"
import { navigation } from "@/data/navigation";
import Container from "@/components/shell/Container";

export default function Navigation() {

    return (

        <nav>
            <Container>
                <ul>
                {navigation.map((item) => (
                            <li
                                key={item.href}>
                                <Link 
                                    href={item.href}>
                                    {item.label}
                                </Link>
                            </li>
                        )
                    )
                }
                </ul>
            </Container>
        </nav>

    );
}