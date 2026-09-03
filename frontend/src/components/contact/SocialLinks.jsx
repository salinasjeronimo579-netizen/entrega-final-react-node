import { socialLinks } from '../../services/socialLinks.js'

export function SocialLinks() {
  return (
    <div className="flex-1 rounded-xl border border-border bg-surface p-6">
      <h2 className="text-lg font-semibold text-foreground">Síguenos</h2>

      <div className="mt-4 flex flex-wrap gap-2">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-foreground hover:bg-background"
          >
            {social.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialLinks
