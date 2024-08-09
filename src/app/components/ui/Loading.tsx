const LoadingSpinner = () => (
    <div className="loading-spinner-container">
      <svg role="img" aria-label="Animated smiley face loading spinner" className="loading-spinner" viewBox="0 0 128 128" width="128px" height="128px">
        <defs>
          <clipPath id="smiley-eyes">
            <circle className="smiley__eye1" cx="64" cy="64" r="8" transform="rotate(-40,64,64) translate(0,-56)" />
            <circle className="smiley__eye2" cx="64" cy="64" r="8" transform="rotate(40,64,64) translate(0,-56)" />
          </clipPath>
          <linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <mask id="smiley-mask">
            <rect x="0" y="0" width="128" height="128" fill="url(#smiley-grad)" />
          </mask>
        </defs>
        <g strokeLinecap="round" strokeWidth="12" strokeDasharray="175.93 351.86">
          <g>
            <rect fill="hsl(193,90%,50%)" width="128" height="64" clipPath="url(#smiley-eyes)" />
            <g fill="none" stroke="hsl(193,90%,50%)">
              <circle className="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
              <circle className="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
            </g>
          </g>
          <g mask="url(#smiley-mask)">
            <rect fill="hsl(223,90%,50%)" width="128" height="64" clipPath="url(#smiley-eyes)" />
            <g fill="none" stroke="hsl(223,90%,50%)">
              <circle className="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
              <circle className="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
            </g>
          </g>
        </g>
      </svg>
      <style jsx>{`
        .loading-spinner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        .loading-spinner {
          width: 8em;
          height: 8em;
        }
        .smiley__eye1,
        .smiley__eye2,
        .smiley__mouth1,
        .smiley__mouth2 {
          animation: eye1 3s ease-in-out infinite;
        }
        .smiley__eye1,
        .smiley__eye2 {
          transform-origin: 64px 64px;
        }
        .smiley__eye2 {
          animation-name: eye2;
        }
        .smiley__mouth1 {
          animation-name: mouth1;
        }
        .smiley__mouth2 {
          animation-name: mouth2;
          visibility: hidden;
        }
        @keyframes eye1 {
          from {
            transform: rotate(-260deg) translate(0,-56px);
          }
          50%,
          60% {
            animation-timing-function: cubic-bezier(0.17,0,0.58,1);
            transform: rotate(-40deg) translate(0,-56px) scale(1);
          }
          to {
            transform: rotate(225deg) translate(0,-56px) scale(0.35);
          }
        }
        @keyframes eye2 {
          from {
            transform: rotate(-260deg) translate(0,-56px);
          }
          50% {
            transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1);
          }
          52.5% {
            transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1,0);
          }
          55%,
          70% {
            animation-timing-function: cubic-bezier(0,0,0.28,1);
            transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1);
          }
          to {
            transform: rotate(150deg) translate(0,-56px) scale(0.4);
          }
        }
        @keyframes mouth1 {
          from {
            animation-timing-function: ease-in;
            stroke-dasharray: 0 351.86;
            stroke-dashoffset: 0;
          }
          25% {
            animation-timing-function: ease-out;
            stroke-dasharray: 175.93 351.86;
            stroke-dashoffset: 0;
          }
          50% {
            animation-timing-function: steps(1,start);
            stroke-dasharray: 175.93 351.86;
            stroke-dashoffset: -175.93;
            visibility: visible;
          }
          75%,
          to {
            visibility: hidden;
          }
        }
        @keyframes mouth2 {
          from {
            animation-timing-function: steps(1,end);
            visibility: hidden;
          }
          50% {
            animation-timing-function: ease-in-out;
            visibility: visible;
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -351.86;
          }
        }
      `}</style>
    </div>
  );

  export { LoadingSpinner } 