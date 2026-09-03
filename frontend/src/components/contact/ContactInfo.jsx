import { contactInfo } from '../../services/contactInfo.js'

export function ContactInfo() {
  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <h2 className="text-lg font-semibold text-foreground">Nuestra sede</h2>

      <dl className="mt-4 flex flex-col gap-3 text-sm">
        <div>
          <dt className="text-muted">Dirección</dt>
          <dd className="mt-0.5 text-foreground">
            {contactInfo.address}, {contactInfo.city}
          </dd>
        </div>

        <div>
          <dt className="text-muted">Teléfono</dt>
          <dd className="mt-0.5 text-foreground">{contactInfo.phone}</dd>
        </div>

        <div>
          <dt className="text-muted">Correo</dt>
          <dd className="mt-0.5 text-foreground">{contactInfo.email}</dd>
        </div>

        <div>
          <dt className="text-muted">Horario de atención</dt>
          <dd className="mt-0.5 text-foreground">{contactInfo.schedule}</dd>
        </div>
      </dl>
    </div>
  )
}

export default ContactInfo
