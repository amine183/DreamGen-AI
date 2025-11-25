import React from 'react';

export const TextToVideoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5" />
    <path d="M16 19h6" />
    <path d="M19 16v6" />
    <path d="M4 10h4" />
    <path d="M6 8v4" />
  </svg>
);

export const ImageToVideoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="12" rx="2" ry="2" />
    <path d="M3 18h18" />
    <path d="m19 12 3 6" />
    <path d="m2 12 3 6" />
    <path d="m12 3 3 18" />
    <path d="m9 3-3 18" />
  </svg>
);

export const FaceSwapIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
        <path d="M4.5 15.5l3-3" />
        <path d="M16.5 9.5l3 3" />
    </svg>
);

export const VideoEnhancerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
);

export const HistoryIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" />
        <path d="M12 6V12L16 14" />
    </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L14.34 8.66L20 11L14.34 13.34L12 19L9.66 13.34L4 11L9.66 8.66L12 3Z"/>
        <path d="M5 3v4"/>
        <path d="M19 17v4"/>
        <path d="M3 5h4"/>
        <path d="M17 19h4"/>
    </svg>
);

export const HeartIcon: React.FC<{ className?: string, isFilled?: boolean }> = ({ className, isFilled }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isFilled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);

export const ShareIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
        <polyline points="16 6 12 2 8 6"></polyline>
        <line x1="12" y1="2" x2="12" y2="15"></line>
    </svg>
);

export const GoogleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    <path d="M1 1h22v22H1z" fill="none" />
  </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
  </svg>
);

export const DiscordIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4464.8257-.618 1.2292a17.893 17.893 0 0 0-5.462 0 17.8198 17.8198 0 0 0-.618-1.2292.0741.0741 0 0 0-.0785-.0371 19.7363 19.7363 0 0 0-4.8851 1.5152.0691.0691 0 0 0-.0321.027c-1.8431 4.618-2.2422 9.243-1.0361 13.6262.057.2041.12.3961.192.5761.024.057.054.111.087.1651.015.024.03.048.048.0721.132.1681.276.3361.42.4921.18.18.36.36.564.5281.42.3361.852.6481 1.296.9361.06.0361.114.0721.174.1081.048.0361.096.06.144.0961.12.06.24.12.372.18.072.036.144.06.216.0961.36.1561.732.2881 1.104.4081.096.024.18.048.276.0721.036.012.072.024.108.0361a.068.068 0 0 0 .048.0012c.3.048.588.084.888.1081.18.012.36.024.54.024.276 0 .552-.012.828-.0361.096-.012.192-.012.288-.024.096-.012.192-.024.288-.048.096-.012.192-.0361.288-.048.288-.084.576-.18.864-.288.084-.024.168-.048.252-.072s.18-.048.264-.084a1.86 1.86 0 0 0 .156-.06c.06-.024.12-.048.18-.084.444-.288.876-.6 1.296-.9361.204-.1681.384-.3481.564-.5281.144-.1561.288-.3241.42-.4921.012-.024.024-.048.036-.0721.036-.048.072-.108.108-.168.072-.18.132-.372.192-.5761 1.2061-4.3832.807-8.9972-1.0361-13.6143a.0691.0691 0 0 0-.0321-.027zm-5.0821 12.312c-1.224 0-2.22-1.008-2.22-2.244s.996-2.244 2.22-2.244c1.224 0 2.22 1.008 2.22 2.244s-.996 2.244-2.22 2.244zm-5.616 0c-1.224 0-2.22-1.008-2.22-2.244s.996-2.244 2.22-2.244c1.224 0 2.22 1.008 2.22 2.244s-.996 2.244-2.22 2.244z" />
    </svg>
);

export const LightbulbIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.5 16.5a6 6 0 0 1-7 0" />
        <path d="M12 21a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2Z" />
        <path d="M12 2v4" />
        <path d="M4 12H2" />
        <path d="M22 12h-2" />
        <path d="m18.36 5.64-.7-.7" />
        <path d="m6.34 17.66-.7-.7" />
        <path d="M12 6a6 6 0 0 1 6 6" />
        <path d="m18.36 18.36-.7-.7" />
        <path d="m6.34 6.34-.7-.7" />
    </svg>
);

export const MagicWandIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20" />
        <path d="M11 3v2" />
        <path d="M11 19v2" />
        <path d="M20 12a9 9 0 0 0-16 0" />
        <path d="M13 3v2" />
        <path d="M13 19v2" />
    </svg>
);

export const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

export const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.505 1.905 6.37l-.846 3.079 3.14-1.046z"/>
        <path d="M18.158 15.115c-.525-.262-3.088-1.52-3.568-1.691-.48-.17-1.077-.171-1.557.48-.48.65-1.353 1.691-1.653 2.041-.3.35-.6.35-.862.057-.262-.291-1.557-1.076-2.962-2.961-1.1-1.46-1.84-2.829-2.04-3.309-.2-.48-.057-.65.234-1.018.234-.309.48-.48.65-.651.17-.17.234-.3.35-.48.119-.18.056-.412-.057-.651-.113-.238-.99-2.38-1.352-3.239-.361-.859-.722-.65-1.019-.65h-.35a2.13 2.13 0 0 0-1.652 1.351c-.3.771-.35 1.748.056 2.829.408 1.08.905 2.041 1.018 2.381l.114.35c.48.995 1.653 2.83 4.029 4.029 2.375 1.198 3.309 1.352 3.829 1.352.518 0 1.557-.3 1.859-1.198.3-.9.3-1.69.234-1.859-.056-.17-.412-.235-.882-.479z"/>
    </svg>
);