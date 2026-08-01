"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type ResumeGateProps = {
  variant?: "compact" | "outline";
};

export function ResumeGate({ variant = "outline" }: ResumeGateProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const result = (await response.json()) as { error?: string };
        setMessage(result.error ?? "Access could not be verified.");
        return;
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Ahmed-Nisar-CV.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setEmail("");
      setMessage("Download authorized.");
      setTimeout(() => setOpen(false), 700);
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        className={variant === "compact" ? "smallButton resumeButton" : "button outline resumeButton"}
        type="button"
        onClick={() => {
          setMessage("");
          setOpen(true);
        }}
      >
        {variant === "compact" ? "Download CV" : "Download résumé"}
      </button>

      {open && (
        <div className="resumeOverlay" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}>
          <div className="resumeDialog" role="dialog" aria-modal="true" aria-labelledby="resume-title" ref={dialogRef}>
            <button className="resumeClose" type="button" onClick={() => setOpen(false)} aria-label="Close résumé access dialog">×</button>
            <p className="sectionEyebrow">Restricted document</p>
            <h2 id="resume-title">Request résumé access</h2>
            <p className="resumeExplanation">
              This résumé contains confidential professional information. Enter an authorized email address to download it.
            </p>
            <form onSubmit={submit} className="resumeForm">
              <label htmlFor={`resume-email-${variant}`}>Authorized email address</label>
              <input
                id={`resume-email-${variant}`}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
                autoFocus
                placeholder="name@company.com"
              />
              <button className="button" type="submit" disabled={loading}>
                {loading ? "Checking…" : "Verify and download"}
              </button>
            </form>
            {message && <p className="resumeMessage" role="status">{message}</p>}
          </div>
        </div>
      )}
    </>
  );
}
