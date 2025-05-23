import { AbouMeSection } from '../widgets/AbouMeSection';
import { ExperienceSection } from '../widgets/ExperienceSection';
import { Header } from '../widgets/Header/Header';
import { HelloSection } from '../widgets/HelloSection/HelloSection';
import { MySkillsSection } from '../widgets/MySkillsSection';

function App() {
  return (
    <>
      <Header />
      <HelloSection />
      <MySkillsSection />
      <ExperienceSection />
      <AbouMeSection />
    </>
  );
}
export default App;
