import React from "react";

declare global {
  interface Window {
    plausible?: (event: string, opts?: any) => void;
  }
}

type Props = { href: string; filename?: string };

export default function ResumeDownloadButton({ href, filename = "resume.pdf" }: Props) {
  const onClick = () => {
    if (window.plausible) {
      window.plausible("Resume Download");
    } else {
      const count = Number(localStorage.getItem("resume_dl_debug") || "0") + 1;
      localStorage.setItem("resume_dl_debug", String(count));
      console.log(`(debug) Resume downloads this browser: ${count}`);
    }
  };

  return (
    <a className="btn btn-accent" href={href} download={filename} onClick={onClick}>
      Download Resume
    </a>
  );
}
