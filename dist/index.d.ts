

export interface VoiceAIOptions {
  apiKey: string; 
  appId: string;
  onError?: (err: any) => void;
}

export interface VoiceAIButtonProps {
  logo?: string;
  buttonColor?: string;
  wrapperColor?: string;
  textColor?: string;
  loaderColor?: string;
}

/**
 * SDK class for initialization using apiKey and appId
 */
export default class VoiceAI {
  constructor(options: VoiceAIOptions);

  /**
   * Initialize SDK, verify and create session.
   */
  init(): Promise<void>;

}

export const VoiceAIButton: React.FC<VoiceAIButtonProps>;
