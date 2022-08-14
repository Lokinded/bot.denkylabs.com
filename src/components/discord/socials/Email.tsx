import { EnvelopeSimple } from 'phosphor-react';

export default function Email(email: string) {
  return (
    <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
      <EnvelopeSimple />
    </a>
  );
}
