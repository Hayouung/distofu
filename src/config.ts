/**
 * Interface for configuring bot behaviour.
 */
export interface TofuConfig {
  prefix: string;
  executeMatchedTriggers?: boolean;
  ownerId?: string;
}
