declare module 'wavesurfer.js' {
    interface WaveSurferOptions {
      container: string | HTMLElement;
      waveColor?: string;
      progressColor?: string;
      cursorColor?: string;
      backend?: string;
      height?: number;
      pixelRatio?: number;
      minPxPerSec?: number;
      scrollParent?: boolean;
      normalize?: boolean;
      audioContext?: AudioContext;
      audioScriptProcessor?: ScriptProcessorNode;
      removeMediaElementOnDestroy?: boolean;
      fillParent?: boolean;
      partialRender?: boolean;
      barWidth?: number;
      barHeight?: number;
      barGap?: number;
      interact?: boolean;
      hideScrollbar?: boolean;
      responsive?: boolean | number;
      backgroundColor?: string;
      xhr?: object;
      plugins?: any[];
    }
  
    interface WaveSurfer {
      load(url: string): void;
      play(): void;
      pause(): void;
      stop(): void;
      isPlaying(): boolean;
      getCurrentTime(): number;
      setCurrentTime(seconds: number): void;
      getDuration(): number;
      destroy(): void;
      on(event: string, callback: () => void): void;
      un(event: string, callback: () => void): void;
      setWaveColor(color: string): void;
      setProgressColor(color: string): void;
      setCursorColor(color: string): void;
      backend: {
        buffer: AudioBuffer;
        ac: AudioContext;
      };
    }
  
    const WaveSurfer: {
      create(options: WaveSurferOptions): WaveSurfer;
    };
  
    export default WaveSurfer;
  }
  
  declare module 'wavesurfer.js/dist/plugin/wavesurfer.regions.min' {
    import WaveSurfer from 'wavesurfer.js';
  
    export default class RegionsPlugin {
      static create(params: any): any;
    }
  }
  