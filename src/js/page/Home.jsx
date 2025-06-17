import ScrollButtons from '../component/ScrollButtons.jsx'
import SecOurWork from '../section/SecOurWork.jsx'
import SecAboutUs from '../section/SecAboutUs.jsx'
import SecAppointments from '../section/SecAppointments.jsx'
import SecAchievements from '../section/SecAchievements.jsx'
import SecHeader from '../section/SecHeader.jsx'
import SecFooter from '../section/SecFooter.jsx'
import '../../css/root/main.css'

export default function Home() {
  return (
    <>
      <ScrollButtons />
      <SecHeader />
      <SecOurWork />
      <SecAchievements />
      <SecAboutUs />
      <SecAppointments />
      <SecFooter />
    </>
  )
}
