"use client";

// Fonts
import { press2play } from "@/lib/config/fonts"

// Components [SHADCN primitives]
import { Button } from "@/components/ui/button"

// Components [Composite]
import {Navbar} from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import BadgeMarquee from "@/components/page/LandingPage/BadgeMarquee"
import BadgeStep from "@/components/page/LandingPage/BadgeStep"
import SOYBDivIcons from "@/components/page/LandingPage/SOYBDivIcons"

export default function Home() {
  return (
    <>
	
			<Navbar />

			{/* <section className="justify-center inline-block m-auto text-center">
				
			</section> */}

			<section className="flex flex-col gap-8 px-6 py-6 text-center py-auto">

				<div className="flex flex-col gap-3">
					<h1 className="text-3xl ">
						Welcome to <span className={`font-bold cc-gradient-green-text`}>Badgepacc</span>
					</h1>

					<h3>Your badge . Your Pacc</h3>
				</div>

				<BadgeMarquee />

				<div className="flex gap-8 mx-auto">
					<Button className="w-full rounded-sm" variant="default">
						Collect Badges
					</Button>

					<Button className="w-full rounded-sm hover:bg-white hover:text-black" variant="outline">
						Explore more
					</Button>
				</div>


			</section>

			<section className="flex flex-col gap-8 px-6 py-6 text-center py-auto">
				{/* <div className="w-[150px] border-4 transform rotate-[-36.2deg] border-solid border-[#E46DC3] rounded-[50%] bg-gradient-for-img-badgelayer">
				<img src="/mern-dev-here-badge.png" alt="" className="rounded-[50%]" />
			</div> */}

				<p className="max-w-sm m-auto text-4xl font-extrabold leading-9 text-center">
					Keeping track of achievements shouldnt be hard
				</p>

				<p className="max-w-sm m-auto text-3xl font-semibold leading-9 text-center">
					Badgepacc makes it easier in 3 steps
				</p>

				<div className="flex flex-col items-center gap-8 md:flex-row md:justify-center ">
					<BadgeStep step="1" desc="Complete tasks" />
					<BadgeStep step="2" desc="Badge issuance takes place" />
					<BadgeStep step="3" desc="Claim badge and share your achievements" />
				</div>

			</section>

			<section className="flex flex-col gap-8 px-6 py-6 text-center py-auto">
				<div>
					<h1 style={press2play.style} className="max-w-sm mx-auto text-xl">
						Show off <br />
						your badges
					</h1>
				</div>

				<SOYBDivIcons />

				<div style={press2play.style} className="max-w-sm mx-auto text-xl">
					OR
				</div>

				<div>
					<h1 style={press2play.style} className="max-w-sm mx-auto text-xl">
						Join over 100+ clubs and  500+ communities to make and collect badges
					</h1>
				</div>

				<div className="flex items-center justify-center w-full ">
					<Button className="px-16 rounded-sm" >
						Create Badges
					</Button>
				</div>
			</section>

			<section className="flex flex-col gap-8 px-6 text-center py-auto">
				<div className="flex w-full p-4 my-8 md:flex-3">
					<div>
					<h1>
						The <br /> <span style={press2play.style}>Fane</span> <br /> Club
					</h1>
					<p className="max-w-sm">
					“ Distributing badges and encouraging healthy competition has never been easier”
					</p>
					</div>

					<div className="hidden md:block">
					<h1>
						<b>Desa.</b>stack
					</h1>
					<p className="max-w-sm">
					“ Maintaining open source community is hard and to reward them to work for free is even more harder . This is our way to show appreciation.”					</p>
					</div>

					<div className="hidden md:block">
					<h1>
					<b>Arentus</b>
					</h1>
					<p className="max-w-sm">
					“As a musician , its tough to make fans feel appreciated , this is my way to show them love “					</p>
					</div>
				</div>
			</section>

			<Footer />
		</>
  )
}
