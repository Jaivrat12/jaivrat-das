import Link from 'next/link';
import {
	Button,
	Link as NextUiLink,
	Navbar as NextUiNavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from '@nextui-org/react';
import { IconExternalLink } from '@tabler/icons-react';

const Navbar = () => {

	return (
		<NextUiNavbar maxWidth="xl">
			<NavbarBrand>
				<Link href="/" className="font-bold text-inherit">
                    JAIVRATDAS.IN
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
                        className="bg-gradient-to-r from-violet-600 to-pink-600"
                        endContent={<IconExternalLink />}
					>
						View Resume
					</Button>
				</NavbarItem>
			</NavbarContent>
		</NextUiNavbar>
	);
};

export default Navbar;