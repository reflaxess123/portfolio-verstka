import { AbouMeSection } from '../widgets/AbouMeSection';
import { ContactSection } from '../widgets/ContactSection';
import { ExperienceSection } from '../widgets/ExperienceSection';
import { Footer } from '../widgets/Footer';
import { Header } from '../widgets/Header/Header';
import { HelloSection } from '../widgets/HelloSection/HelloSection';
import { MySkillsSection } from '../widgets/MySkillsSection';
import { ProjectsSection } from '../widgets/ProjectsSection';
import { TestimonialSection } from '../widgets/TestimonialSection';

function App() {
  return (
    <>
      <Header />
      <HelloSection />
      <MySkillsSection />
      <ExperienceSection />
      <AbouMeSection />
      <ProjectsSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
}
export default App;
