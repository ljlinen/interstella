import ScrollButtons from '../component/ScrollButtons.jsx'
import SecOurWork from '../section/SecOurWork.jsx'
import SecAboutUs from '../section/SecAboutUs.jsx'
import SecAppointments from '../section/SecAppointments.jsx'
import SecAchievements from '../section/SecAchievements.jsx'
import SecHeader from '../section/SecHeader.jsx'
import SecFooter from '../section/SecFooter.jsx'
import '../../css/root/main.css'
import useRequest from '../hook/useRequest.js'

export default function Home() {
  const homeDataObj = useRequest();
  return (
    <>
      <ScrollButtons />
      <SecHeader />
      <SecOurWork data={homeDataObj?.hair} />
      <SecAchievements />
      <SecAboutUs />
      <SecAppointments />
      <SecFooter />
    </>
  )
}
