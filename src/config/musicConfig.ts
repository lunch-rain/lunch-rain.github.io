import type { MusicPlayerConfig } from "../types/musicConfig";

// 网易云单曲信息使用 liveling 的 Meting API；播放地址和歌词由接口按 ID 返回。
const neteaseApi = "https://api-music.liveling.top/api";
const neteaseSong = (id: string, name: string, artist: string, cover: string) => ({
	name,
	artist,
	url: `${neteaseApi}?server=netease&type=url&id=${id}`,
	cover,
	lrc: `${neteaseApi}?server=netease&type=lrc&id=${id}`,
});

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: true,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			neteaseSong("150560", "讨厌红楼梦", "陶喆", "https://p2.music.126.net/FLIHPqpkfUBimQZB370agQ==/109951169237251638.jpg"),
			neteaseSong("426341319", "轻飘飘的时间（8bit remix）", "烦恼的夏天", "https://p2.music.126.net/WeZ0iYNwUtH9ekxj--2lUw==/17889054184114485.jpg"),
			neteaseSong("22803908", "天使にふれたよ!", "放課後ティータイム", "https://p1.music.126.net/iHQqvYx7hRnkGbr4alnM_w==/109951163597130578.jpg"),
		],
	},
};
