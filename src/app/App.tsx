import { AbouMeSection } from '../widgets/AbouMeSection';
import { ExperienceSection } from '../widgets/ExperienceSection';
import { Header } from '../widgets/Header/Header';
import { HelloSection } from '../widgets/HelloSection/HelloSection';
import { MySkillsSection } from '../widgets/MySkillsSection';
import { ProjectsSection } from '../widgets/ProjectsSection';

function App() {
  return (
    <>
      <Header />
      <HelloSection />
      <MySkillsSection />
      <ExperienceSection />
      <AbouMeSection />
      <ProjectsSection />
    </>
  );
}
export default App;
