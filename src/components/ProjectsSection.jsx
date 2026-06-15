import { PROJECTS, SECTION_BASE_STYLE } from '../portfolioData'
import ProjectCard from './ProjectCard'

export default function ProjectsSection({ sectionRef, isInView, getSectionStyle, fadeInUp, onSelectImage }) {
  return (
    <section
      ref={sectionRef}
      id="projects"
      data-section-index="3"
      style={{
        ...SECTION_BASE_STYLE,
        ...getSectionStyle(3),
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%', ...fadeInUp(isInView) }}>
        <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 'bold', marginBottom: '60px', textAlign: 'center' }}>Projects</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} onSelectImage={onSelectImage} />
          ))}
        </div>
      </div>
    </section>
  )
}
