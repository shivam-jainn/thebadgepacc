import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar";
export default function Home() {
	return (
<>
		<Navbar />

		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="justify-center inline-block max-w-lg text-center">
				<h1 className={title()}>Welcome to&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Badgepacc&nbsp;</h1>
				<br />
				
				<h2 className={subtitle({ class: "mt-4" })}>
					Your badge , Your pacc
				</h2>
			</div>	
		</section>
		</>
	);
}
