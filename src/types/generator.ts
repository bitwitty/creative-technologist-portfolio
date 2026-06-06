export interface GeneratorInput {
  venueName: string;
  city: string;
  venueType: string;
  zeroProofOffering: string;
  dryScore: number;
}

export interface GeneratorOutput {
  description: string;
  seoMeta: string;
  socialCaption: string;
}

export interface GeneratorAPIResponse {
  success: boolean;
  data?: GeneratorOutput;
  error?: string;
}
