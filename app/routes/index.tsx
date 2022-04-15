import HeaderSlider from '../components/HeaderSlider';
import { useOptionalUser } from "~/utils";
import AboutSection from '~/components/AboutSection';
import PageFooter from '~/components/PageFooter';


export default function Home() {
  const user = useOptionalUser();

  return (
    <>
    <HeaderSlider/>
    <AboutSection/>
    <PageFooter/>
    </>
  );
}
