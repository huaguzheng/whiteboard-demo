import { PluginInstance, PluginProps } from "white-web-sdk";

export type Props = PluginProps<PluginContext, VideoJsPluginAttributes>;
export type Instance = PluginInstance<PluginContext, VideoJsPluginAttributes>;

export interface PluginContext {
    identity?: "host" | "guest" | "publisher" | "observer";
    hideMuteAlert?: boolean;
}

export interface VideoJsPluginAttributes {
    /** 视频文件地址，空字符串时不播放 */
    src: string;
    /** 封面 */
    poster?: string;
    /**
     * host 的当前 `Date.now()`，用于同步
     * @example
     * hostCurrentTime = (Date.now() - hostTime) / 1000 + currentTime
     */
    hostTime: number;
    /** 当前播放位置秒数，默认 0 */
    currentTime: number;
    /** 是否暂停中，默认 false */
    paused: boolean;
    /** 是否静音中，默认 false */
    muted: boolean;
    /** 音量 0..1，默认 1 */
    volume: number;
}
