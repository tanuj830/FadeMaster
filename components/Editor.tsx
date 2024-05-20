// import { useRef, useState, useEffect } from "react";
// import WaveSurfer from "wavesurfer.js";

// const AudioTrimmer: React.FC = () => {
//   const [audioUrl, setAudioUrl] = useState<string | null>(null);
//   const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
//   const [startTime, setStartTime] = useState<number>(0);
//   const [endTime, setEndTime] = useState<number>(0);
//   const [trimmedAudioUrl, setTrimmedAudioUrl] = useState<string | null>(null);
//   const waveformRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (audioUrl && waveformRef.current) {
//       const wave = WaveSurfer.create({
//         container: waveformRef.current,
//         waveColor: "violet",
//         progressColor: "purple",
//         cursorColor: "navy",
//         backend: "MediaElement",
//       });

//       wave.load(audioUrl);

//       wave.on("ready", () => {
//         const duration = wave.getDuration();
//         setEndTime(duration);
//         wave.on("audioprocess", () => {
//           if (wave.isPlaying()) {
//             setStartTime(wave.getCurrentTime());
//           }
//         });
//       });

//       setWavesurfer(wave);
//     }

//     return () => {
//       wavesurfer?.destroy();
//     };
//   }, [audioUrl]);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setAudioUrl(url);
//     }
//   };

//   const handleTrim = async () => {
//     if (!wavesurfer) return;

//     const start = startTime;
//     const end = endTime;
//     const buffer = await wavesurfer.backend.buffer;

//     const trimmedBuffer = trimAudioBuffer(
//       buffer,
//       start,
//       end,
//       wavesurfer.backend.ac
//     );
//     const newAudioBlob = bufferToWave(trimmedBuffer, trimmedBuffer.length);
//     const newAudioUrl = URL.createObjectURL(newAudioBlob);
//     setTrimmedAudioUrl(newAudioUrl);
//     wavesurfer.load(newAudioUrl);
//   };

//   const trimAudioBuffer = (
//     buffer: AudioBuffer,
//     start: number,
//     end: number,
//     audioContext: AudioContext
//   ): AudioBuffer => {
//     const startSample = Math.floor(start * buffer.sampleRate);
//     const endSample = Math.floor(end * buffer.sampleRate);
//     const length = endSample - startSample;

//     const trimmedBuffer = audioContext.createBuffer(
//       buffer.numberOfChannels,
//       length,
//       buffer.sampleRate
//     );

//     for (let i = 0; i < buffer.numberOfChannels; i++) {
//       const channelData = buffer.getChannelData(i);
//       trimmedBuffer.copyToChannel(
//         channelData.subarray(startSample, endSample),
//         i
//       );
//     }

//     return trimmedBuffer;
//   };

//   const bufferToWave = (abuffer: AudioBuffer, len: number): Blob => {
//     const numOfChan = abuffer.numberOfChannels;
//     const length = len * numOfChan * 2 + 44;
//     const buffer = new ArrayBuffer(length);
//     const view = new DataView(buffer);
//     const channels: Float32Array[] = [];
//     let i: number;
//     let sample: number;
//     let offset = 0;
//     let pos = 0;

//     // write WAVE header
//     setUint32(0x46464952); // "RIFF"
//     setUint32(length - 8); // file length - 8
//     setUint32(0x45564157); // "WAVE"

//     setUint32(0x20746d66); // "fmt " chunk
//     setUint32(16); // length = 16
//     setUint16(1); // PCM (uncompressed)
//     setUint16(numOfChan);
//     setUint32(abuffer.sampleRate);
//     setUint32(abuffer.sampleRate * 2 * numOfChan); // avg. bytes/sec
//     setUint16(numOfChan * 2); // block-align
//     setUint16(16); // 16-bit (hardcoded in this demo)

//     setUint32(0x61746164); // "data" -chunk
//     setUint32(length - pos - 4); // chunk length

//     // write interleaved data
//     for (i = 0; i < abuffer.numberOfChannels; i++)
//       channels.push(abuffer.getChannelData(i));

//     while (pos < length) {
//       for (i = 0; i < numOfChan; i++) {
//         // interleave channels
//         sample = Math.max(-1, Math.min(1, channels[i][offset])); // clamp
//         sample = (0.5 + sample * 0.5) * 65535.0; // scale to 16-bit
//         sample = Math.max(0, Math.min(65535, sample)); // clamp
//         view.setUint16(pos, sample, true); // write 16-bit sample
//         pos += 2;
//       }
//       offset++; // next source sample
//     }

//     // create Blob
//     return new Blob([buffer], { type: "audio/wav" });

//     function setUint16(data: number) {
//       view.setUint16(pos, data, true);
//       pos += 2;
//     }

//     function setUint32(data: number) {
//       view.setUint32(pos, data, true);
//       pos += 4;
//     }
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Audio Trimmer</h1>
//       <input
//         type="file"
//         accept="audio/*"
//         onChange={handleFileChange}
//         className="mb-4"
//       />
//       {audioUrl && (
//         <div>
//           <div
//             ref={waveformRef}
//             className="w-full max-w-lg h-32 mb-4 border border-gray-300"
//           ></div>
//           <div className="flex flex-col items-center">
//             <label className="mb-2">
//               Start Time (seconds):
//               <input
//                 type="range"
//                 min="0"
//                 max={endTime}
//                 value={startTime}
//                 onChange={(e) => setStartTime(Number(e.target.value))}
//                 className="w-full max-w-lg mb-2"
//               />
//             </label>
//             <label className="mb-4">
//               End Time (seconds):
//               <input
//                 type="range"
//                 min="0"
//                 max={wavesurfer?.getDuration() || 0}
//                 value={endTime}
//                 onChange={(e) => setEndTime(Number(e.target.value))}
//                 className="w-full max-w-lg"
//               />
//             </label>
//             <button
//               onClick={handleTrim}
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//               Trim
//             </button>
//             {trimmedAudioUrl && (
//               <a
//                 href={trimmedAudioUrl}
//                 download="trimmed-audio.wav"
//                 className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//               >
//                 Download Trimmed Audio
//               </a>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioTrimmer;

// import { useRef, useState, useEffect } from "react";
// import WaveSurfer from "wavesurfer.js";
// import RegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions.min";

// const AudioTrimmer: React.FC = () => {
//   const [audioUrl, setAudioUrl] = useState<string | null>(null);
//   const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
//   const [startTime, setStartTime] = useState<number>(0);
//   const [endTime, setEndTime] = useState<number>(0);
//   const [trimmedAudioUrl, setTrimmedAudioUrl] = useState<string | null>(null);
//   const waveformRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (audioUrl && waveformRef.current) {
//       const wave = WaveSurfer.create({
//         container: waveformRef.current,
//         waveColor: "violet",
//         progressColor: "purple",
//         cursorColor: "navy",
//         backend: "MediaElement",
//         plugins: [
//           RegionsPlugin.create({
//             regions: [
//               {
//                 start: 0,
//                 end: 10,
//                 color: "rgba(0, 123, 255, 0.1)",
//                 drag: true,
//                 resize: true,
//               },
//             ],
//           }),
//         ],
//       });

//       wave.load(audioUrl);

//       wave.on("ready", () => {
//         const duration = wave.getDuration();
//         setEndTime(duration);
//         const region = wave.regions.list[Object.keys(wave.regions.list)[0]];
//         setStartTime(region.start);
//         setEndTime(region.end);

//         region.on("update-end", () => {
//           setStartTime(region.start);
//           setEndTime(region.end);
//         });
//       });

//       setWavesurfer(wave);
//     }

//     return () => {
//       wavesurfer?.destroy();
//     };
//   }, [audioUrl]);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setAudioUrl(url);
//     }
//   };

//   const handleTrim = async () => {
//     if (!wavesurfer) return;

//     const start = startTime;
//     const end = endTime;
//     const buffer = await wavesurfer.backend.buffer;

//     const trimmedBuffer = trimAudioBuffer(
//       buffer,
//       start,
//       end,
//       wavesurfer.backend.ac
//     );
//     const newAudioBlob = bufferToWave(trimmedBuffer, trimmedBuffer.length);
//     const newAudioUrl = URL.createObjectURL(newAudioBlob);
//     setTrimmedAudioUrl(newAudioUrl);
//     wavesurfer.load(newAudioUrl);
//   };

//   const trimAudioBuffer = (
//     buffer: AudioBuffer,
//     start: number,
//     end: number,
//     audioContext: AudioContext
//   ): AudioBuffer => {
//     const startSample = Math.floor(start * buffer.sampleRate);
//     const endSample = Math.floor(end * buffer.sampleRate);
//     const length = endSample - startSample;

//     const trimmedBuffer = audioContext.createBuffer(
//       buffer.numberOfChannels,
//       length,
//       buffer.sampleRate
//     );

//     for (let i = 0; i < buffer.numberOfChannels; i++) {
//       const channelData = buffer.getChannelData(i);
//       trimmedBuffer.copyToChannel(
//         channelData.subarray(startSample, endSample),
//         i
//       );
//     }

//     return trimmedBuffer;
//   };

//   const bufferToWave = (abuffer: AudioBuffer, len: number): Blob => {
//     const numOfChan = abuffer.numberOfChannels;
//     const length = len * numOfChan * 2 + 44;
//     const buffer = new ArrayBuffer(length);
//     const view = new DataView(buffer);
//     const channels: Float32Array[] = [];
//     let i: number;
//     let sample: number;
//     let offset = 0;
//     let pos = 0;

//     // write WAVE header
//     setUint32(0x46464952); // "RIFF"
//     setUint32(length - 8); // file length - 8
//     setUint32(0x45564157); // "WAVE"

//     setUint32(0x20746d66); // "fmt " chunk
//     setUint32(16); // length = 16
//     setUint16(1); // PCM (uncompressed)
//     setUint16(numOfChan);
//     setUint32(abuffer.sampleRate);
//     setUint32(abuffer.sampleRate * 2 * numOfChan); // avg. bytes/sec
//     setUint16(numOfChan * 2); // block-align
//     setUint16(16); // 16-bit (hardcoded in this demo)

//     setUint32(0x61746164); // "data" -chunk
//     setUint32(length - pos - 4); // chunk length

//     // write interleaved data
//     for (i = 0; i < abuffer.numberOfChannels; i++)
//       channels.push(abuffer.getChannelData(i));

//     while (pos < length) {
//       for (i = 0; i < numOfChan; i++) {
//         // interleave channels
//         sample = Math.max(-1, Math.min(1, channels[i][offset])); // clamp
//         sample = (0.5 + sample * 0.5) * 65535.0; // scale to 16-bit
//         sample = Math.max(0, Math.min(65535, sample)); // clamp
//         view.setUint16(pos, sample, true); // write 16-bit sample
//         pos += 2;
//       }
//       offset++; // next source sample
//     }

//     // create Blob
//     return new Blob([buffer], { type: "audio/wav" });

//     function setUint16(data: number) {
//       view.setUint16(pos, data, true);
//       pos += 2;
//     }

//     function setUint32(data: number) {
//       view.setUint32(pos, data, true);
//       pos += 4;
//     }
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Audio Trimmer</h1>
//       <input
//         type="file"
//         accept="audio/*"
//         onChange={handleFileChange}
//         className="mb-4"
//       />
//       {audioUrl && (
//         <div>
//           <div
//             ref={waveformRef}
//             className="w-full max-w-lg h-32 mb-4 border border-gray-300"
//           ></div>
//           <div className="flex flex-col items-center">
//             <button
//               onClick={handleTrim}
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//               Trim
//             </button>
//             {trimmedAudioUrl && (
//               <a
//                 href={trimmedAudioUrl}
//                 download="trimmed-audio.wav"
//                 className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//               >
//                 Download Trimmed Audio
//               </a>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioTrimmer;

import { useRef, useState, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import RegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions.min";

const AudioTrimmer: React.FC = () => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const [trimmedAudioUrl, setTrimmedAudioUrl] = useState<string | null>(null);
  const waveformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (audioUrl && waveformRef.current) {
      const wave = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "violet",
        progressColor: "purple",
        cursorColor: "navy",
        backend: "MediaElement",
        plugins: [
          RegionsPlugin.create({
            regions: [
              {
                start: 0,
                end: 10,
                color: "rgba(0, 123, 255, 0.1)",
                drag: true,
                resize: true,
              },
            ],
          }),
        ],
      });

      wave.load(audioUrl);

      wave.on("ready", () => {
        const duration = wave.getDuration();
        setEndTime(duration);
        const region = wave.regions.list[Object.keys(wave.regions.list)[0]];
        setStartTime(region.start);
        setEndTime(region.end);

        region.on("update-end", () => {
          setStartTime(region.start);
          setEndTime(region.end);
        });
      });

      setWavesurfer(wave);
    }

    return () => {
      wavesurfer?.destroy();
    };
  }, [audioUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
    }
  };

  const handleTrim = async () => {
    if (!wavesurfer) return;

    const start = startTime;
    const end = endTime;
    const buffer = await wavesurfer.backend.buffer;

    const trimmedBuffer = trimAudioBuffer(
      buffer,
      start,
      end,
      wavesurfer.backend.ac
    );
    const newAudioBlob = bufferToWave(trimmedBuffer, trimmedBuffer.length);
    const newAudioUrl = URL.createObjectURL(newAudioBlob);
    setTrimmedAudioUrl(newAudioUrl);
    wavesurfer.load(newAudioUrl);
  };

  const trimAudioBuffer = (
    buffer: AudioBuffer,
    start: number,
    end: number,
    audioContext: AudioContext
  ): AudioBuffer => {
    const startSample = Math.floor(start * buffer.sampleRate);
    const endSample = Math.floor(end * buffer.sampleRate);
    const length = endSample - startSample;

    const trimmedBuffer = audioContext.createBuffer(
      buffer.numberOfChannels,
      length,
      buffer.sampleRate
    );

    for (let i = 0; i < buffer.numberOfChannels; i++) {
      const channelData = buffer.getChannelData(i);
      trimmedBuffer.copyToChannel(
        channelData.subarray(startSample, endSample),
        i
      );
    }

    return trimmedBuffer;
  };

  const bufferToWave = (abuffer: AudioBuffer, len: number): Blob => {
    const numOfChan = abuffer.numberOfChannels;
    const length = len * numOfChan * 2 + 44;
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
    const channels: Float32Array[] = [];
    let i: number;
    let sample: number;
    let offset = 0;
    let pos = 0;

    // write WAVE header
    setUint32(0x46464952); // "RIFF"
    setUint32(length - 8); // file length - 8
    setUint32(0x45564157); // "WAVE"

    setUint32(0x20746d66); // "fmt " chunk
    setUint32(16); // length = 16
    setUint16(1); // PCM (uncompressed)
    setUint16(numOfChan);
    setUint32(abuffer.sampleRate);
    setUint32(abuffer.sampleRate * 2 * numOfChan); // avg. bytes/sec
    setUint16(numOfChan * 2); // block-align
    setUint16(16); // 16-bit (hardcoded in this demo)

    setUint32(0x61746164); // "data" -chunk
    setUint32(length - pos - 4); // chunk length

    // write interleaved data
    for (i = 0; i < abuffer.numberOfChannels; i++)
      channels.push(abuffer.getChannelData(i));

    while (pos < length) {
      for (i = 0; i < numOfChan; i++) {
        // interleave channels
        sample = Math.max(-1, Math.min(1, channels[i][offset])); // clamp
        sample = (0.5 + sample * 0.5) * 65535.0; // scale to 16-bit
        sample = Math.max(0, Math.min(65535, sample)); // clamp
        view.setUint16(pos, sample, true); // write 16-bit sample
        pos += 2;
      }
      offset++; // next source sample
    }

    // create Blob
    return new Blob([buffer], { type: "audio/wav" });

    function setUint16(data: number) {
      view.setUint16(pos, data, true);
      pos += 2;
    }

    function setUint32(data: number) {
      view.setUint32(pos, data, true);
      pos += 4;
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md w-full">
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      {audioUrl && (
        <div className=" w-full">
          <div
            ref={waveformRef}
            className="w-full bg-yellow-100 h-32 mb-4 border border-gray-300"
          ></div>
          <div className="flex flex-col items-center">
            <button
              onClick={handleTrim}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Trim
            </button>
            {trimmedAudioUrl && (
              <a
                href={trimmedAudioUrl}
                download="trimmed-audio.wav"
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Download Trimmed Audio
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioTrimmer;
