export interface TofuConfig {
  /**
   * The prefix for commands.
   */
  prefix: string;

  /**
   * Executes all triggers that match the condition rather than executing only the first trigger that is matched.
   */
  executeAllMatchedTriggers?: boolean;
}
