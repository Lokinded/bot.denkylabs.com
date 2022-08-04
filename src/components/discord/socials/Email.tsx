import { EnvelopeSimple } from 'phosphor-react';

export default function Email(email: string) {
  return (
    <a href={`mailto:${email}`} className="cursor-pointer" target="_blank">
      <EnvelopeSimple />
    </a>
  );
}
