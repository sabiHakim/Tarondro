import ProjectLayout from "./components/projects/ProjectLayout";
import ContextSection from "./components/projects/ContextSection";
import ObjectivesGrid from "./components/projects/ObjectivesGrid";
import ProcessTimeline from "./components/projects/ProcessTimeline";
import ResultsStats from "./components/projects/ResultsStats";
import FinalCTA from "./components/projects/FinalCTA";
export default function Home() {
  const contexte =`En 2024, Tarondro Concept, une Start-up basée à Antananarive, cherchait à moderniser son image de marque pour se démarquer dans un marché concurrentiel., l’entreprise souhaitait une identité visuelle qui reflète son engagement pour la qualité, l’authenticité et une ambiance chaleureuse, tout en attirant une clientèle plus jeune et connectée. Le défi : créer une marque moderne tout en préservant l’héritage artistique d visuel.`;
  return (
    <>
      <ProjectLayout
        title="TARONDRO"
        subtitle="Refonte de l’identité visuelle"
        description="Refonte complète de l’identité visuelle de Tarondro Concept, une start-up basée à Antananarivo désirant moderniser son image en 2024."
      >
        <ContextSection
          text={contexte}
          imageSrc="/contexte.jpeg"
        />
        <ObjectivesGrid />
        <ProcessTimeline />
        <ResultsStats />
        <FinalCTA />
      </ProjectLayout>
    </>
  );
}
