import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import RlfSnapshot from './components/RlfSnapshot';
import ProjectsPreview from './components/ProjectsPreview';
import MissionValues from './components/MissionValues';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureSection />
      <RlfSnapshot />
      <ProjectsPreview />
      <MissionValues />
    </main>
  );
}
