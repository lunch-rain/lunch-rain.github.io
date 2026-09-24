export interface MizukiPioConfig {
	enable: boolean;
	models: string[];
	position: "left" | "right";
	width: number;
	height: number;
	hiddenOnMobile: boolean;
	hideAboutMenu: boolean;
	dialog?: { welcome?: string; touch?: string[] };
	tips?: {
		welcomeMessage?: string[];
		messages?: string[];
		duration?: number;
		interval?: number;
	};
	menus?: {
		items?: { icon?: string; label: string; action: string }[];
		align?: "left" | "right";
	};
}

export const mizukiPioConfig: MizukiPioConfig = {
	enable: true,
	models: ["/pio/models/NOIR/noir.model3.json"],
	position: "left",
	width: 280,
	height: 250,
	hiddenOnMobile: true,
	hideAboutMenu: true,
	dialog: {
		welcome: "欢迎来到 RainLove 的博客！",
		touch: ["你好呀！", "今天也要开心哦。", "来看看新的文章吧。"],
	},
};
