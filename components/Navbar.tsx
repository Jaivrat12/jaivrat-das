import Link from 'next/link';
import {
	Button,
	Link as NextUiLink,
	Navbar as NextUiNavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from '@nextui-org/react';
import { RiExternalLinkLine } from 'react-icons/ri';

const Navbar = () => {

	return (
		<NextUiNavbar
			maxWidth="xl"
			className="bg-transparent"
		>
			<NavbarBrand>
				<Link href="/" className="font-bold text-inherit">
                    JAIVRAT DAS
                </Link>
			</NavbarBrand>

			<NavbarContent justify="end">
				<NavbarItem>
					<Button
						as={NextUiLink}
						href="https://drive.google.com/file/d/187PeuDl64T4rgU86VwNBfn6cU9PxgqA3/view"
                        target="_blank"
                        color="secondary"
                        variant="shadow"
                        radius="full"
						className="bg-gradient-to-r from-pink-600 to-violet-600"
                        endContent={
							<RiExternalLinkLine size="1.25rem" />
						}
					>
						View Resume
					</Button>
				</NavbarItem>
			</NavbarContent>
		</NextUiNavbar>
	);
};

export default Navbar;