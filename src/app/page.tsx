import NavbarLanding from '@/components/navbar/NavbarLanding'
import BagSection from '@/components/pages/landing/BagSection'
import RecordingAchSection from '@/components/pages/landing/RecordingAchSection'
import StepsSection from '@/components/pages/landing/StepsSection'
import ShowOffSection from '@/components/pages/landing/ShowOffSection'
import JoinUsSection from '@/components/pages/landing/JoinUsSection'
import OpenSource from '@/components/pages/landing/OpenSource'

export default function Home() {
  return (
    <>
      <NavbarLanding />

    <section className='px-8'>  
      <BagSection />
      <RecordingAchSection />
      <StepsSection />
      <ShowOffSection />
      <JoinUsSection />
      <OpenSource />
    </section>
    </>
  )
}
