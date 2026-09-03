import { projectsServices } from '../../services/projectsServices.js'

export function ProjectsServices() {
  return (
    <section className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Proyectos y servicios
          </h2>
          <p className="mt-2 text-sm text-muted sm:text-base">
            Descubre todo lo que el Sistema de Bibliotecas Booker tiene para
            ofrecerte, desde préstamos hasta espacios digitales.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projectsServices.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-200 hover:border-foreground"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-40 w-full object-cover transition-transform duration-200 group-hover:scale-105 sm:h-48"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsServices
