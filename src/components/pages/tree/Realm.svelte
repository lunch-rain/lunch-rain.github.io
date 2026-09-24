<script lang="ts">
	import DijiangShip from "./DijiangShip.svelte";
	type Entry = {
		id: string;
		title: string;
		excerpt: string;
		date: string;
		kind: string;
		href: string;
		image: string;
	};

	let { entries }: { entries: Entry[] } = $props();

	const labels: Record<string, string> = {
		post: "深度文章",
		chatter: "杂谈随笔",
		moment: "瞬间思绪",
	};
	const currentMonthKey = new Date().toISOString().slice(0, 7);
	const months = Array.from(new Set(entries.map((entry) => entry.date.slice(0, 7))))
		.filter((month) => /^\d{4}-\d{2}$/.test(month))
		.sort();
	if (!months.length) months.push(currentMonthKey);

	let mode = $state<"alchemy" | "ship">("alchemy");
	let monthIndex = $state(months.length - 1);
	let activeKind = $state("all");
	let shipNotice = $state("");
	let catalogOpen = $state(false);
	let currentMonth = $derived(months[monthIndex] || months[0]);
	let monthEntries = $derived(entries.filter((entry) => entry.date.startsWith(currentMonth)));
	let visibleEntries = $derived(
		activeKind === "all"
			? monthEntries
			: monthEntries.filter((entry) => entry.kind === activeKind),
	);
	let counts = $derived({
		post: monthEntries.filter((entry) => entry.kind === "post").length,
		chatter: monthEntries.filter((entry) => entry.kind === "chatter").length,
		moment: monthEntries.filter((entry) => entry.kind === "moment").length,
	});

	const activeDays = new Set(entries.map((entry) => entry.date)).size;
	const totalExp =
		entries.filter((entry) => entry.kind === "post").length * 50 +
		entries.filter((entry) => entry.kind === "chatter").length * 20 +
		entries.filter((entry) => entry.kind === "moment").length * 10 +
		activeDays * 100;
	let level = 1;
	let remainingExp = totalExp;
	const neededFor = (value: number) =>
		value <= 1 ? 150 : 150 + Math.floor((2000 * (value - 1)) / (value + 9));
	while (remainingExp >= neededFor(level)) {
		remainingExp -= neededFor(level);
		level += 1;
	}
	const nextLevelExp = neededFor(level);
	const expPercent = Math.min(100, (remainingExp / nextLevelExp) * 100);

	function changeMonth(direction: number) {
		monthIndex = Math.max(0, Math.min(months.length - 1, monthIndex + direction));
		activeKind = "all";
	}

	function monthLabel(value: string) {
		const [year, month] = value.split("-");
		return `${year} 年 ${Number(month)} 月`;
	}

	function selectShipChannel(kind: string) {
		if (kind === "message") {
			window.location.href = "/guestbook/";
			return;
		}
		const count = kind === "post" ? counts.post : kind === "chatter" ? counts.chatter : counts.moment;
		if (!count) {
			shipNotice = "[ SYSTEM ALERT ] 该区域暂无数据归档";
			window.setTimeout(() => shipNotice = "", 3000);
			return;
		}
		activeKind = activeKind === kind ? "all" : kind;
	}
</script>

<section class="realm" aria-labelledby="realm-title">
	<div class="realm-hero">
		<div class="realm-orbit realm-orbit-one"></div>
		<div class="realm-orbit realm-orbit-two"></div>
		<div class="realm-kicker">RAINLOVE / CREATIVE REALM</div>
		<h1 id="realm-title"><span aria-hidden="true">✦</span> 灵境</h1>
		<p>从神秘的记忆试管到深邃的星际巨舰，在这里封存灵感与奇迹。</p>
		<div class="mode-switch" role="group" aria-label="灵境视图">
			<button type="button" class:chosen={mode === "alchemy"} aria-pressed={mode === "alchemy"} onclick={() => { mode = "alchemy"; activeKind = "all"; }}>⚗ 记忆炼金室</button>
			<button type="button" class:chosen={mode === "ship"} aria-pressed={mode === "ship"} onclick={() => { mode = "ship"; activeKind = "all"; }}>✦ 帝江号舰船</button>
		</div>
	</div>

	<div class="realm-toolbar">
		<div class="realm-stats" aria-label="本月内容统计">
			<span><strong>{counts.post}</strong> 深度文章</span>
			<span><strong>{counts.chatter}</strong> 杂谈随笔</span>
			<span><strong>{counts.moment}</strong> 瞬间思绪</span>
		</div>
		<div class="month-nav" aria-label="切换月份">
			<button type="button" aria-label="上一个月" disabled={monthIndex === 0} onclick={() => changeMonth(-1)}>‹</button>
			<strong>{monthLabel(currentMonth)}</strong>
			<button type="button" aria-label="下一个月" disabled={monthIndex === months.length - 1} onclick={() => changeMonth(1)}>›</button>
		</div>
	</div>

	{#if mode === "alchemy"}
		<div class="alchemy-scene">
			<div class="scene-topline"><span>MEMORY ALCHEMY LAB</span><button type="button" onclick={() => catalogOpen = !catalogOpen} aria-expanded={catalogOpen}>⌕ 记忆目录</button></div>
			<div class="alchemy-heading"><span>✧</span><div><h2>本月记忆试管</h2><p>每一滴灵感，都在时间里留下颜色。</p></div></div>
			{#if catalogOpen}
				<div class="catalog">
					{#if monthEntries.length}
						{#each monthEntries as entry (entry.id)}
							<a href={entry.href}><span>{labels[entry.kind] || "记录"}</span><strong>{entry.title}</strong><small>{entry.date}</small></a>
						{/each}
					{:else}<p>这个月还没有记录。</p>{/if}
				</div>
			{/if}
			<div class="shelf-stage">
				{#each [0, 1, 2] as shelf}
					<div class="shelf">
						<div class="shelf-items">
							{#each monthEntries.slice(shelf * 7, shelf * 7 + 7) as entry (entry.id)}
								<a class="flask" class:post={entry.kind === "post"} class:chatter={entry.kind === "chatter"} class:moment={entry.kind === "moment"} href={entry.href} title={entry.title}>
									<span class="flask-neck"></span><span class="flask-glass"><span class="flask-liquid"></span><span class="flask-shine"></span></span>
									<span class="flask-label">{entry.title}</span>
								</a>
							{/each}
						</div>
						<div class="shelf-plank"></div>
					</div>
				{/each}
			</div>
			{#if !monthEntries.length}
				<div class="alchemy-empty"><span aria-hidden="true">✧</span><strong>等待第一份记忆</strong><p>发布文章或动态后，新的试管就会出现在这里。</p></div>
			{/if}
		</div>
	{:else}
		<div class="ship-scene">
			<div class="ship-glow ship-glow-gold"></div><div class="ship-glow ship-glow-blue"></div>
			<div class="ship-identity"><h2>END-01</h2><p>CLASS: INTERSTELLAR CRUISER<br />AFFILIATION: ENDFIELD INDUSTRIES</p></div>
			<DijiangShip />
			<div class="ship-beacons" aria-hidden="true"><span class="beacon beacon-post"></span><span class="beacon beacon-chatter"></span><span class="beacon beacon-moment"></span><span class="beacon beacon-message"></span></div>
			<div class="ship-controls">
				{#if shipNotice}<div class="ship-alert">⚠ {shipNotice}</div>{/if}
				<small>SYSTEM OVERRIDE</small>
				<button type="button" class:active={activeKind === "post"} onclick={() => selectShipChannel("post")}><span class="control-icon post">▤</span><span><strong>PRTS_DB</strong><small>情报卷宗</small></span></button>
				<button type="button" class:active={activeKind === "chatter"} onclick={() => selectShipChannel("chatter")}><span class="control-icon chatter">▣</span><span><strong>LOGS</strong><small>终端通讯</small></span></button>
				<button type="button" class:active={activeKind === "moment"} onclick={() => selectShipChannel("moment")}><span class="control-icon moment">✧</span><span><strong>BEACON</strong><small>观测信标</small></span></button>
				<button type="button" onclick={() => selectShipChannel("message")}><span class="control-icon message">◇</span><span><strong>RECEPTION</strong><small>访客申请</small></span></button>
			</div>
			{#if activeKind !== "all" && visibleEntries.length}<div class="ship-hud"><div class="ship-hud-title">{activeKind === "post" ? "PRTS_DB" : activeKind === "chatter" ? "LOGS" : "BEACON"} ARCHIVE <span>{visibleEntries.length} FILES</span></div>{#each visibleEntries as entry (entry.id)}<a href={entry.href}><small>{entry.date}</small><strong>{entry.title}</strong></a>{/each}</div>{/if}
			<div class="ship-bottom-right"><div class="ship-summary"><small>DATA SUMMARY</small><div><span>INTEL</span><strong>{counts.post}</strong></div><div><span>LOGS</span><strong>{counts.chatter}</strong></div><div><span>BEACON</span><strong>{counts.moment}</strong></div><div><span>MSG</span><strong>—</strong></div></div><div class="ship-timeline"><button type="button" disabled={monthIndex === 0} onclick={() => changeMonth(-1)} aria-label="上一个月">‹</button><span><strong>RECORD.Y{currentMonth.slice(2,4)}M{Number(currentMonth.slice(5))}</strong><small>TIMELINE</small></span><button type="button" disabled={monthIndex === months.length - 1} onclick={() => changeMonth(1)} aria-label="下一个月">›</button></div></div>
		</div>
	{/if}

	<div class="realm-bottom">
		<div class="level-card"><span class="level-mark">✦</span><div><small>探索等级</small><strong>Lv.{level}</strong><div class="level-bar"><span style={`width: ${expPercent}%`}></span></div><small>{remainingExp} / {nextLevelExp} EXP · 文章、随笔、动态与活跃天数累计</small></div></div>
		<a class="wish-card" href="/guestbook/"><span>✉</span><div><strong>访客留言簿</strong><small>把想说的话留在这里</small></div><span aria-hidden="true">↗</span></a>
	</div>
</section>

<style>
	.realm{--r-ink:#e9e5dc;--r-muted:#ada8a0;max-width:1100px;margin:0 auto 3rem;color:var(--r-ink)}
	.realm-hero{position:relative;overflow:hidden;isolation:isolate;padding:3.7rem 1.5rem 2.5rem;border-radius:1.5rem;text-align:center;background:radial-gradient(circle at 12% 5%,#5e527a 0,transparent 36%),radial-gradient(circle at 90% 85%,#294e69 0,transparent 35%),linear-gradient(125deg,#1b2038,#171c30 55%,#182737);border:1px solid #6d71844d;box-shadow:0 20px 50px #1014263d}
	.realm-orbit{position:absolute;z-index:-1;border:1px solid #b6b8e626;border-radius:50%;transform:rotate(-18deg)}.realm-orbit-one{width:570px;height:210px;top:-70px;left:-130px}.realm-orbit-two{width:670px;height:280px;right:-250px;bottom:-170px}
	.realm-kicker{color:#bcb6eb;letter-spacing:.35em;font-size:.68rem;font-weight:800}.realm-hero h1{margin:.55rem 0;font-size:clamp(2.7rem,6vw,4.5rem);letter-spacing:.12em;font-weight:900;color:#fff;text-shadow:0 3px 22px #b8a2ef80}.realm-hero h1 span{color:#9b8ef7;font-size:.7em}.realm-hero p{color:#c1c5d4;font-size:.92rem;margin:.3rem auto 1.6rem;max-width:600px}
	.mode-switch{display:inline-flex;gap:.3rem;padding:.3rem;border:1px solid #ffffff36;background:#ffffff1c;border-radius:999px;backdrop-filter:blur(12px)}.mode-switch button{border:0;border-radius:999px;background:transparent;color:#c4c6d4;padding:.62rem 1.1rem;font-weight:700;cursor:pointer;transition:.2s}.mode-switch button.chosen{background:#f2efff;color:#4d448a;box-shadow:0 4px 14px #0b102649}.mode-switch button:focus-visible,.month-nav button:focus-visible,.scene-topline button:focus-visible,.ship-console button:focus-visible{outline:2px solid #a8dfff;outline-offset:2px}
	.realm-toolbar{display:flex;justify-content:space-between;align-items:center;gap:1rem;margin:1rem 0}.realm-stats,.month-nav{display:flex;align-items:center;gap:1rem;background:#272535e8;border:1px solid #615b7470;border-radius:1rem;padding:.8rem 1.1rem;box-shadow:0 8px 18px #0b0e1740}.realm-stats span{color:#b9b3c4;font-size:.75rem;white-space:nowrap}.realm-stats strong{color:#fff;font-size:1.25rem;margin-right:.22rem}.month-nav{gap:.65rem;white-space:nowrap;color:#e1d6f3}.month-nav strong{min-width:7.7rem;text-align:center;font-size:.9rem}.month-nav button{border:0;background:#ffffff12;color:inherit;border-radius:.5rem;width:1.8rem;height:1.8rem;font-size:1.4rem;line-height:1;cursor:pointer}.month-nav button:disabled{opacity:.25;cursor:default}
	.alchemy-scene{position:relative;overflow:hidden;min-height:680px;border:1px solid #6f5644;border-radius:1.3rem;background:radial-gradient(circle at 50% -20%,#806a50 0,transparent 45%),repeating-linear-gradient(90deg,#2c211e 0,#2c211e 115px,#352823 117px,#2a201d 120px);box-shadow:inset 0 0 100px #0b0707,0 20px 40px #10101845;padding:1.1rem 1rem 2rem}.alchemy-scene:before{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(transparent,#0e09092b 70%,#0c08084f)}
	.scene-topline,.ship-topline{position:relative;z-index:1;display:flex;justify-content:space-between;align-items:center;gap:.5rem;color:#c9b795;font-size:.66rem;letter-spacing:.2em;font-weight:800}.scene-topline button{border:1px solid #b2986670;border-radius:.6rem;background:#d1ad6125;color:#eddfbd;padding:.45rem .7rem;cursor:pointer;font-size:.7rem}.alchemy-heading,.ship-heading{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;gap:.7rem;text-align:left;margin:1.1rem 0 1rem;color:#eee4cf}.alchemy-heading>span{font-size:2.1rem;color:#dec17c}.alchemy-heading h2,.ship-heading h2{margin:0;font-size:1.55rem}.alchemy-heading p,.ship-heading p{margin:.15rem 0 0;color:#b7aa98;font-size:.77rem}
	.catalog{position:relative;z-index:3;max-width:720px;margin:0 auto 1rem;padding:.7rem;border:1px solid #a78a5e70;border-radius:.8rem;background:#1e1715e8;max-height:260px;overflow:auto}.catalog a{display:grid;grid-template-columns:75px 1fr auto;gap:.6rem;padding:.55rem;border-bottom:1px solid #b69b6b22;color:#eee6d5;font-size:.74rem}.catalog a span,.catalog a small{color:#bca87f}.catalog p{font-size:.8rem;text-align:center;color:#c7b68f}
	.shelf-stage{position:relative;max-width:900px;margin:2rem auto 0}.shelf{position:relative;height:155px;margin-bottom:18px}.shelf-items{position:absolute;inset:0 5% 15px;display:flex;justify-content:space-evenly;align-items:end;gap:.6rem;z-index:1}.shelf-plank{position:absolute;bottom:0;left:3%;right:3%;height:15px;border-bottom:6px solid #150e0b;border-radius:2px;background:linear-gradient(#6e4c31,#362418);box-shadow:0 15px 20px #0503039c}.shelf-plank:after{content:"";position:absolute;left:8%;right:8%;top:15px;height:12px;background:#1b110d;border-radius:0 0 6px 6px;box-shadow:0 16px 20px #0009}
	.flask{--fluid:#73aaf4;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:end;width:min(85px,13%);height:118px;text-decoration:none;color:#f7f4e7;transition:transform .25s}.flask:hover{transform:translateY(-10px)}.flask.chatter{--fluid:#f5ba72}.flask.moment{--fluid:#85d2b1}.flask-neck{width:18px;height:17px;border:2px solid #d5e4ee8c;border-bottom:0;border-radius:3px 3px 0 0;background:#afcfe933}.flask-glass{position:relative;display:block;width:61px;height:75px;border:2px solid #d5e4eeaa;border-radius:13px 13px 27px 27px;overflow:hidden;background:#b4d1e527;box-shadow:inset 4px 0 9px #ffffff42,0 0 17px color-mix(in srgb,var(--fluid),transparent 55%)}.flask-liquid{position:absolute;bottom:0;left:0;right:0;height:60%;background:linear-gradient(110deg,color-mix(in srgb,var(--fluid),#14121e 20%),var(--fluid));border-radius:50% 50% 20% 20% / 8% 8% 20% 20%;box-shadow:0 0 18px var(--fluid)}.flask-shine{position:absolute;left:7px;top:8px;width:6px;height:28px;border-radius:50%;background:#fff9;transform:rotate(13deg)}.flask-label{display:block;width:100%;padding:.25rem .2rem;margin-top:.2rem;border-radius:.25rem;background:#190f0cd9;color:#eee4d1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;font-size:.6rem}.alchemy-empty{position:absolute;z-index:2;left:50%;bottom:56px;transform:translateX(-50%);width:min(90%,360px);padding:.85rem;background:#1d1514dd;border:1px solid #8b6b4a75;border-radius:.8rem;text-align:center;box-shadow:0 12px 30px #0805058c}.alchemy-empty span{display:block;color:#d7b66c;font-size:1.3rem}.alchemy-empty strong{font-size:.9rem}.alchemy-empty p{font-size:.7rem;color:#b7aa98;margin:.15rem 0}
	.ship-scene{position:relative;overflow:hidden;border:1px solid #426783;border-radius:1.3rem;background:radial-gradient(circle at 50% 15%,#1b4962 0,transparent 43%),linear-gradient(145deg,#09131d,#0b1422 65%,#111c2a);box-shadow:inset 0 0 90px #060b10,0 20px 40px #10101845;padding:1.1rem 1.3rem 1.5rem}.ship-grid{position:absolute;inset:0;opacity:.1;pointer-events:none;background-image:linear-gradient(#65ddfa 1px,transparent 1px),linear-gradient(90deg,#65ddfa 1px,transparent 1px);background-size:32px 32px;mask-image:linear-gradient(transparent,#000 40%)}.ship-topline{color:#69d7f2}.ship-heading{justify-content:start;margin:1.6rem 0}.ship-heading h2{color:#e0f9ff}.ship-heading p{color:#91b4c2}.ship-signal{width:16px;height:16px;border-radius:50%;background:#4be8cc;box-shadow:0 0 0 6px #4be8cc24,0 0 25px #4be8cc;animation:pulse 2s infinite}@keyframes pulse{50%{opacity:.55;transform:scale(.85)}}
	.ship-body{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1fr) 250px;gap:1rem}.ship-visual{position:relative;min-height:275px;display:flex;align-items:center;justify-content:center;overflow:hidden;border:1px solid #56b8dd3d;border-radius:1rem;background:radial-gradient(circle at 50% 80%,#1a567378,transparent 50%),#08131fb9}.ship-visual svg{width:min(100%,530px);max-height:300px;filter:drop-shadow(0 15px 26px #1e9bd351);animation:float 5s ease-in-out infinite}@keyframes float{50%{transform:translateY(-9px)}}.ship-halo{position:absolute;width:67%;aspect-ratio:1;border:1px solid #54c9f64d;border-radius:50%;box-shadow:0 0 0 35px #54c9f60c,0 0 0 70px #54c9f608;transform:rotateX(60deg)}.ship-caption{position:absolute;bottom:.8rem;left:1rem;color:#6ac6e7;font-size:.58rem;font-weight:800;letter-spacing:.16em}
	.ship-console{padding:.7rem;background:#09121ed9;border:1px solid #5fb8df43;border-radius:1rem}.console-title{display:flex;justify-content:space-between;gap:.5rem;padding:.45rem .3rem .8rem;color:#d0f2ff;font-size:.9rem;font-weight:800}.console-title small{font-size:.52rem;letter-spacing:.1em;color:#6ab0c5}.ship-console button{width:100%;display:flex;align-items:center;gap:.55rem;margin-bottom:.4rem;padding:.65rem .55rem;border:1px solid #5c91aa39;border-radius:.6rem;background:#ffffff08;color:#bdd5de;text-align:left;cursor:pointer;font-size:.75rem}.ship-console button.active{background:#285b70a8;border-color:#74d4f6;color:#fff}.ship-console button strong{margin-left:auto;color:#fff}.channel-dot{width:7px;height:7px;border-radius:50%;background:#a8cef0}.channel-dot.post{background:#76b5ff}.channel-dot.chatter{background:#f7c572}.channel-dot.moment{background:#73dab4}
	.ship-records{position:relative;z-index:1;margin-top:1rem;padding:1rem;border:1px solid #5fb8df43;border-radius:1rem;background:#08121dd9}.records-heading{display:flex;justify-content:space-between;color:#dcf5ff;font-size:.85rem}.records-heading span{color:#6fc7e4;font-size:.65rem;letter-spacing:.15em}.record-list{display:grid;gap:.55rem;margin-top:.75rem}.record-card{display:flex;align-items:center;gap:.8rem;border:1px solid #5fb8df34;border-radius:.65rem;background:#ffffff08;color:#eaf8fc;padding:.75rem;text-decoration:none;transition:.2s}.record-card:hover{background:#397c9b4d;transform:translateX(3px)}.record-date{font-size:.65rem;color:#74cde9;white-space:nowrap}.record-card div{min-width:0;flex:1}.record-card small{display:block;font-size:.6rem;color:#7dd9e9}.record-card strong{display:block;font-size:.85rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.record-card p{margin:.15rem 0 0;color:#94aebb;font-size:.68rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.record-arrow{color:#72d6f3}.records-empty{margin:1rem 0 .25rem;color:#9bb8c3;font-size:.78rem}
	.realm-bottom{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1rem}.level-card,.wish-card{display:flex;align-items:center;gap:.8rem;min-height:95px;padding:1rem;border:1px solid #6d638057;border-radius:1rem;background:linear-gradient(110deg,#2b2940,#242c3b);color:#f4f0ff;text-decoration:none}.level-mark,.wish-card>span:first-child{display:grid;place-items:center;width:42px;height:42px;border-radius:.7rem;background:#b6a6f02b;color:#c4b7ff;font-size:1.35rem}.level-card>div,.wish-card>div{flex:1;min-width:0}.level-card small,.wish-card small{display:block;color:#acaac0;font-size:.65rem}.level-card strong,.wish-card strong{display:block;font-size:1rem}.level-bar{height:5px;margin:.4rem 0;border-radius:10px;background:#7d779257;overflow:hidden}.level-bar span{display:block;height:100%;background:linear-gradient(90deg,#8f85ff,#6cdeff)}.wish-card>span:last-child{color:#bbb1e2}.wish-card:hover{border-color:#ae9de7}
	@media(max-width:760px){.realm-toolbar{flex-direction:column}.realm-stats,.month-nav{width:100%;justify-content:center}.realm-stats{gap:.65rem}.realm-stats span{font-size:.68rem}.ship-body{grid-template-columns:1fr}.ship-console{display:grid;grid-template-columns:repeat(2,1fr);gap:.4rem}.console-title{grid-column:1/-1}.ship-console button{margin:0}.realm-bottom{grid-template-columns:1fr}.alchemy-scene{min-height:650px}.shelf{height:150px}}
	@media(max-width:480px){.realm-hero{padding:2.8rem .8rem 1.7rem}.mode-switch button{font-size:.72rem;padding:.56rem .7rem}.realm-stats{gap:.4rem;padding:.7rem .5rem}.realm-stats span{font-size:.55rem}.realm-stats strong{font-size:1rem}.flask{width:19%}.flask-glass{width:48px;height:65px}.shelf-items{gap:.1rem}.scene-topline,.ship-topline{font-size:.51rem}.ship-scene{padding:.9rem}.catalog a{grid-template-columns:1fr}.catalog a small{display:none}}
	@media(prefers-reduced-motion:reduce){.ship-visual svg,.ship-signal{animation:none}.flask,.record-card{transition:none}}
	/* The source ship view is an open PRTS terminal with the point cloud at its center. */
	.ship-scene{height:min(78vh,780px);min-height:690px;overflow:hidden;padding:0;border:0;border-radius:0;background:transparent;box-shadow:none;color:#d5d7dc;font-family:ui-monospace,SFMono-Regular,Consolas,monospace}
	.ship-glow{position:absolute;width:380px;height:380px;border-radius:50%;filter:blur(110px);opacity:.16;pointer-events:none}.ship-glow-gold{top:14%;left:24%;background:#eab308}.ship-glow-blue{right:8%;bottom:10%;background:#0ea5e9}
	.ship-identity{position:absolute;z-index:2;top:10px;left:24px;border-left:3px solid #eab308;padding-left:15px}.ship-identity h2{margin:0;color:#1f2937;font-size:2.2rem;font-weight:900;letter-spacing:.18em;line-height:1.2}.ship-identity p{margin:.2rem 0;color:#667085;font-size:.67rem;letter-spacing:.15em;line-height:1.7}:global(html.dark) .ship-identity h2{color:#f4f4f5}:global(html.dark) .ship-identity p{color:#9297a2}
	.ship-beacons{position:absolute;inset:0;pointer-events:none;z-index:3}.beacon{position:absolute;width:13px;height:13px;transform:rotate(45deg);box-shadow:0 0 18px currentColor;border:3px solid #181818}.beacon:after{content:"";position:absolute;inset:-13px;border:1px solid #ffffff40}.beacon-post{left:60%;top:54%;background:#0ea5e9;color:#0ea5e9}.beacon-chatter{left:42%;top:70%;background:#eab308;color:#eab308}.beacon-moment{left:74%;top:60%;background:#10b981;color:#10b981}.beacon-message{left:54%;top:68%;background:#f1f5f9;color:#f1f5f9}
	.ship-controls{position:absolute;z-index:5;left:24px;bottom:24px;display:flex;flex-direction:column;gap:7px}.ship-controls>small{font-size:.62rem;font-weight:900;letter-spacing:.22em;color:#8c919c;margin-bottom:2px}.ship-controls button{display:flex;align-items:center;gap:12px;width:240px;min-height:49px;padding:7px;border:1px solid #444;background:#1e1e1ee8;color:#d5d7dc;text-align:left;cursor:pointer;backdrop-filter:blur(8px);transition:background .2s}.ship-controls button:hover{background:#2a2a2a}.ship-controls button.active{border-color:#eab308;background:#534716e8;color:#fff}.ship-controls button span:last-child{display:flex;flex-direction:column;gap:2px}.ship-controls button strong{font-size:.83rem;letter-spacing:.08em}.ship-controls button small{color:#9ba0aa;font-size:.6rem}.control-icon{display:grid;place-items:center;width:32px;height:32px;background:#111;border:1px solid #333;font-size:1.15rem}.control-icon.post{color:#0ea5e9}.control-icon.chatter{color:#eab308}.control-icon.moment{color:#10b981}.control-icon.message{color:#f1f5f9}.ship-alert{position:absolute;bottom:100%;left:0;margin-bottom:10px;white-space:nowrap;padding:8px 12px;border:1px solid #ef444466;background:#3b1515dd;color:#ef4444;font-size:.7rem}
	.ship-bottom-right{position:absolute;z-index:5;right:24px;bottom:24px;width:235px;display:flex;flex-direction:column;gap:12px}.ship-summary,.ship-timeline{background:#1e1e1ee8;border:1px solid #444;backdrop-filter:blur(10px)}.ship-summary{padding:15px}.ship-summary>small{display:block;text-align:right;border-bottom:1px solid #444;padding-bottom:7px;margin-bottom:9px;color:#9297a2;font-size:.62rem;font-weight:900;letter-spacing:.2em}.ship-summary div{display:flex;justify-content:space-between;align-items:center;margin:5px 0;font-size:.72rem;font-weight:800}.ship-summary div:nth-of-type(1){color:#0ea5e9}.ship-summary div:nth-of-type(2){color:#eab308}.ship-summary div:nth-of-type(3){color:#10b981}.ship-summary div:nth-of-type(4){color:#f1f5f9}.ship-summary strong{font-size:.94rem}.ship-timeline{display:flex;align-items:center;justify-content:space-between;padding:8px 10px}.ship-timeline button{width:28px;height:28px;background:transparent;border:1px solid transparent;color:#aaa;font-size:1.45rem;cursor:pointer}.ship-timeline button:hover{border-color:#555;background:#333}.ship-timeline button:disabled{opacity:.25;cursor:default}.ship-timeline span{display:flex;flex-direction:column;text-align:center;gap:2px}.ship-timeline strong{font-size:.78rem;letter-spacing:.14em;color:white}.ship-timeline small{font-size:.55rem;color:#eab308}
	.ship-hud{position:absolute;z-index:6;top:30%;right:28px;width:280px;max-height:250px;overflow:auto;background:#101010ed;border:1px solid #444;border-right:4px solid #eab308;padding:10px;box-shadow:0 16px 40px #0009}.ship-hud-title{display:flex;justify-content:space-between;border-bottom:1px solid #444;padding:4px 3px 10px;font-size:.67rem;font-weight:900;letter-spacing:.12em}.ship-hud-title span{color:#888}.ship-hud a{display:flex;flex-direction:column;gap:3px;margin-top:8px;padding:10px;background:#292929;color:white;border-left:2px solid #eab308;text-decoration:none}.ship-hud a small{font-size:.6rem;color:#eab308}.ship-hud a strong{font-size:.73rem}
	@media(max-width:760px){.ship-scene{height:730px;min-height:730px}.ship-identity{left:10px;top:6px}.ship-identity h2{font-size:1.5rem}.ship-identity p{font-size:.53rem}.ship-controls{left:8px;bottom:10px}.ship-controls button{width:145px;min-height:43px;gap:5px;padding:4px}.control-icon{width:27px;height:27px}.ship-controls button strong{font-size:.67rem}.ship-controls button small{font-size:.5rem}.ship-bottom-right{right:8px;bottom:10px;width:145px}.ship-summary{padding:8px}.ship-summary div{font-size:.6rem}.ship-timeline{padding:5px}.ship-timeline strong{font-size:.58rem}.ship-hud{top:18%;right:8px;width:220px;max-height:180px}.beacon{display:none}}
	/* Keep the workshop title and shelves close to the reference layout. */
	.realm{max-width:1280px}
	.realm-hero{padding:2.2rem 1rem 2rem;border:0;border-radius:0;background:transparent;box-shadow:none}
	.realm-orbit{display:none}.realm-kicker{display:none}
	.realm-hero h1{margin:0 0 .4rem;color:#172033;text-shadow:none;font-size:clamp(2.5rem,5vw,3.2rem);letter-spacing:.13em}
	.realm-hero h1 span{color:#6366f1}
	.realm-hero p{color:#586171;margin:.2rem auto 1.7rem}
	.mode-switch{background:#ffffff66;border:1px solid #d8dce3;padding:.35rem;box-shadow:0 4px 12px #00000012}
	.mode-switch button{color:#647084}
	.mode-switch button.chosen{background:#fff;color:#6366f1;box-shadow:0 2px 8px #0000001a}
	:global(html.dark) .realm-hero h1{color:#f8fafc}
	:global(html.dark) .realm-hero p{color:#94a3b8}
	:global(html.dark) .mode-switch{background:#1e293b66;border-color:#ffffff24}
	:global(html.dark) .mode-switch button.chosen{background:#334155;color:#a5b4fc}
	.realm-toolbar{margin:0 auto 2.2rem;max-width:1000px}
	.realm-stats,.month-nav{background:#231a16eb;border:2px solid #8b6b4a;border-radius:1rem;color:#d4af37;box-shadow:0 5px 15px #0005}
	.realm-stats span{color:#bda786}.realm-stats strong{color:#e8e4d9}.month-nav strong{color:#d4af37}
	.alchemy-scene{min-height:520px;overflow:visible;border:0;border-radius:0;background:transparent;box-shadow:none;padding:0 1rem 2rem}
	.alchemy-scene:before,.alchemy-heading{display:none}
	.scene-topline{justify-content:flex-end;max-width:1000px;margin:0 auto;color:#8b6b4a}
	.scene-topline>span{display:none}
	.scene-topline button{border-color:#8b6b4a;color:#d4af37;background:#231a16}
	.shelf-stage{margin:1.2rem auto 0;max-width:1000px}.shelf{height:160px;margin-bottom:0}.shelf-plank{height:14px;left:5%;right:5%;background:linear-gradient(#4a3628,#2c1e16);border-bottom:6px solid #1a110b;box-shadow:0 15px 30px -5px #000c}.shelf-plank:after{left:15%;right:auto;top:14px;width:16px;height:22px;background:#2c1e16;box-shadow:600px 0 #2c1e16}
	.alchemy-empty{bottom:28px}
</style>
