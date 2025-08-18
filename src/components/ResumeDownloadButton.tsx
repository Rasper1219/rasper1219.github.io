import React from "react";
import { SITE } from "../data/siteConfig";

declare global {
  interface Window { plausible?: (event: string, opts?: any) => void }
}

type Props = { href: string; filename?: string };

export default function ResumeDownloadButton({ href, filename = "resume.pdf" }: Props) {
  const onClick = () => {
    // Fire Plausible custom event if available
    if (window.plausible) {
      window.plausible("Resume Download");
    } else {
      // Dev fallback: console log (no tracking)
      const n = Number(localStorage.getItem("resume_dl_debug") || "0") + 1;
      localStorage.setItem("resume_dl_debug", String(n));
      console.log(`(debug) Resume downloads this browser: ${n}`);
    }
  };
  return (
    <a
      className="btn btn-accent"
      href={href}
      download={filename}
      onClick={onClick}
    >
      Download Résumé
    </a>
  );
}
