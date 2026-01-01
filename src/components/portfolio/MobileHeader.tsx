import { Github, Linkedin, FileText } from "lucide-react";
import { CONTACT, SOCIAL_LINKS } from "@/config/constants";

export const MobileHeader = () => {
  return (
    <div className="xl:hidden px-6 pt-20 pb-6">
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-white mb-2">
        {CONTACT.name}
      </h1>
      <h2 className="text-lg sm:text-xl font-light text-white mb-3">
        {CONTACT.title}
      </h2>
      <p className="text-base sm:text-lg font-light text-text-secondary leading-relaxed mb-6 max-w-[90%]">
        I build responsive, user-friendly, and innovative apps.
      </p>

      <div className="flex gap-5 mb-24">
        {SOCIAL_LINKS.map(({ name, href, label }) => {
          const Icon =
            name === "github"
              ? Github
              : name === "linkedin"
              ? Linkedin
              : FileText;
          return (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
