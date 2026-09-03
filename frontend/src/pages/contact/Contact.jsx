import LayoutMain from '../../layout/LayoutMain.jsx'
import ContactInfo from '../../components/contact/ContactInfo.jsx'
import SocialLinks from '../../components/contact/SocialLinks.jsx'
import FormContact from '../../components/contact/FormContact.jsx'

export function Contact() {
  return (
    <LayoutMain>
      <section className="mx-auto w-full max-w-7xl px-6 py-8">
        <h1 className="mb-6 text-2xl font-bold text-foreground">
          Contáctanos
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <ContactInfo />
            <SocialLinks />
          </div>

          <div className="rounded-xl border border-border bg-surface p-6 lg:col-span-3">
            <h2 className="text-lg font-semibold text-foreground">
              Envíanos tu PQR
            </h2>
            <p className="mt-1 mb-4 text-sm text-muted">
              Petición, queja o reclamo: te responderemos lo antes posible.
            </p>
            <FormContact />
          </div>
        </div>
      </section>
    </LayoutMain>
  )
}

export default Contact
