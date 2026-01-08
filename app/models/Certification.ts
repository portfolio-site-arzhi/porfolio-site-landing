export interface Certification {
  id: number;
  title: string;
  issuer: string;
  issuedAt: string;
  credentialUrl?: string;
  highlights?: string[];
}
