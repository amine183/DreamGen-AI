// FIX: Moved AIStudio interface and global Window declaration here from LandingPage.tsx to resolve a duplicate declaration error.

// FIX: Resolved TS2717 by moving the AIStudio interface definition inside the `declare global`
// block. This ensures there's a single, globally-scoped definition for AIStudio,
// resolving the subsequent property declaration error.
declare global {
    interface AIStudio {
        hasSelectedApiKey: () => Promise<boolean>;
        openSelectKey: () => Promise<void>;
    }

    interface Window {
        aistudio?: AIStudio;
    }
}

export enum Page {
  LANDING,
  WORKSPACE,
  PRICING,
  LOGIN,
  TEMPLATES,
  COMMUNITY,
  ABOUT,
  CONTACT,
  PRIVACY,
  DOCS,
}

export type GenerationMode = 'text-to-image' | 'text-to-video' | 'image-to-video' | 'youtube-thumbnail';

// FIX: Merged ThumbnailStyle into VideoStyle to create a single source of truth for styles and fix type errors.
export enum VideoStyle {
  REALISTIC = 'Realistic',
  ANIME = 'Anime',
  PIXAR_3D = '3D Pixar',
  LIMINAL = 'Liminal',
  DREAMCORE = 'Dreamcore',
  MINECRAFT = 'Minecraft',
  CINEMATIC = 'Cinematic',
  CYBERPUNK = 'Cyberpunk',
  GAMING = 'Gaming',
  VLOG = 'Vlog',
  TECH = 'Tech',
  MINIMALIST = 'Minimalist',
  BEAUTY = 'Beauty',
  LIFESTYLE = 'Lifestyle',
  EDUCATIONAL = 'Educational',
  COMEDY = 'Comedy',
}

export enum ThumbnailFont {
    POPPINS = 'Poppins',
    ORBITRON = 'Orbitron',
    RUSSO_ONE = 'Russo One',
    EXO_2 = 'Exo 2',
}

export type AspectRatio = '1:1' | '16:9' | '9:16' | '4:3' | '3:4';

export type ThumbnailDimensionKey = 'youtube' | 'shorts' | 'square' | 'portrait';

export const ThumbnailDimensions: { [key in ThumbnailDimensionKey]: { width: number; height: number; aspect: string; apiRatio: AspectRatio } } = {
    youtube: { width: 1280, height: 720, aspect: '16/9', apiRatio: '16:9' },
    shorts: { width: 1080, height: 1920, aspect: '9/16', apiRatio: '9:16' },
    square: { width: 1080, height: 1080, aspect: '1/1', apiRatio: '1:1' },
    portrait: { width: 1080, height: 1440, aspect: '3/4', apiRatio: '3:4' },
};

export interface HistoryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  prompt: string;
  thumbnail: string; // data URL for image or video thumbnail
  timestamp: number;
}

export interface Template {
    id: string;
    platform: 'YouTube' | 'TikTok' | 'Instagram';
    title: string;
    tags: string[];
    videoUrl: string;
    style?: VideoStyle;
}

export interface CommunityPost {
    id: string;
    author: string;
    prompt: string;
    mediaUrl: string;
    mediaType: 'image' | 'video';
}

export enum ToastType {
    SUCCESS = 'success',
    ERROR = 'error',
    INFO = 'info',
}

export interface Toast {
    id:string;
    message: string;
    type: ToastType;
}

export enum WatermarkPosition {
    TOP_LEFT = 'Top Left',
    TOP_RIGHT = 'Top Right',
    BOTTOM_LEFT = 'Bottom Left',
    BOTTOM_RIGHT = 'Bottom Right'
}

export enum ExportQuality {
    Q_720P = '720p',
    Q_1080P = '1080p',
    Q_4K = '4K',
}

export enum ExportFormat {
    MP4 = 'mp4',
    MOV = 'mov',
}