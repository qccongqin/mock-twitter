import React from "react";

export default function Audio() {
  return (
    <div>
      <audio  src="/sample.mp3">

      <a href="/sample.mp3"> Download audio </a>
      </audio>
      <button>Play</button>
      <button>Stop</button>
    </div>
  );
}
