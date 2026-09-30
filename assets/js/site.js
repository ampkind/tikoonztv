const I18N={"ko": {"nav.home": "HOME", "nav.visual": "VISUAL", "nav.shows": "SHOWS", "nav.about": "ABOUT", "home.eyebrow": "TIKOONZ.TV / MUSIC · VISUAL · CULTURE", "home.title": "MUSIC<br>IN MOTION.", "home.lead": "TIKOONZ의 음악, 비주얼, 쇼와 아카이브를 하나의 디지털 음악 아트 채널에서 만납니다.", "visual.eyebrow": "MUSIC VIDEOS / VISUAL WORKS", "visual.title": "VISUAL", "visual.lead": "ICE UNICORN의 뮤직비디오와 TIKOONZ의 비주얼 작품을 움직이는 이미지 갤러리로 선보입니다.", "shows.eyebrow": "SHOWS / PERFORMANCE / ARCHIVE", "shows.title": "SHOWS", "shows.lead": "TIKOONZ.TV의 쇼, 인터뷰, 퍼포먼스와 아카이브 필름을 모았습니다.", "about.eyebrow": "TIKOONZ.TV / ABOUT", "about.title": "ABOUT", "about.lead": "음악과 그 음악을 둘러싼 산업과 문화.", "about.big": "MUSIC,<br>IMAGE &<br>CULTURE.", "about.p1": "TIKOONZ.TV는 EDM, Hip-Hop, K-POP, 프로덕션, 사운드 디자인, 퍼포먼스와 음악을 둘러싼 문화를 다룹니다.", "about.p2": "아티스트, 레이블, 유통, 발매, 공연, 미디어 프로젝트와 글로벌 협업을 움직이는 이미지로 기록합니다.", "about.p3": "TIKOONZ.TV는 방송과 아카이브, 비주얼 전시 공간이 결합된 디지털 음악 아트 채널입니다."}, "en": {"nav.home": "HOME", "nav.visual": "VISUAL", "nav.shows": "SHOWS", "nav.about": "ABOUT", "home.eyebrow": "TIKOONZ.TV / MUSIC · VISUAL · CULTURE", "home.title": "MUSIC<br>IN MOTION.", "home.lead": "Music, visuals, shows and archives from TIKOONZ, presented as one digital music-art channel.", "visual.eyebrow": "MUSIC VIDEOS / VISUAL WORKS", "visual.title": "VISUAL", "visual.lead": "ICE UNICORN music videos and TIKOONZ visual works presented as a moving-image gallery.", "shows.eyebrow": "SHOWS / PERFORMANCE / ARCHIVE", "shows.title": "SHOWS", "shows.lead": "Shows, interviews, performances and archive films from TIKOONZ.TV.", "about.eyebrow": "TIKOONZ.TV / ABOUT", "about.title": "ABOUT", "about.lead": "Music and the industry and culture behind it.", "about.big": "MUSIC,<br>IMAGE &<br>CULTURE.", "about.p1": "TIKOONZ.TV covers EDM, Hip-Hop, K-POP, production, sound design, performance and the wider culture surrounding music.", "about.p2": "It follows artists, labels, distribution, releases, performances, media projects and global collaborations through moving image.", "about.p3": "TIKOONZ.TV is a digital music-art channel: part broadcast, part archive and part visual exhibition space."}, "ja": {"nav.home": "HOME", "nav.visual": "VISUAL", "nav.shows": "SHOWS", "nav.about": "ABOUT", "home.eyebrow": "TIKOONZ.TV / MUSIC · VISUAL · CULTURE", "home.title": "MUSIC<br>IN MOTION.", "home.lead": "TIKOONZの音楽、ビジュアル、ショー、アーカイブを一つのデジタル・ミュージックアート・チャンネルで紹介します。", "visual.eyebrow": "MUSIC VIDEOS / VISUAL WORKS", "visual.title": "VISUAL", "visual.lead": "ICE UNICORNのミュージックビデオとTIKOONZのビジュアル作品を映像ギャラリーとして紹介します。", "shows.eyebrow": "SHOWS / PERFORMANCE / ARCHIVE", "shows.title": "SHOWS", "shows.lead": "TIKOONZ.TVのショー、インタビュー、パフォーマンス、アーカイブ映像を集めました。", "about.eyebrow": "TIKOONZ.TV / ABOUT", "about.title": "ABOUT", "about.lead": "音楽と、その背景にある産業と文化。", "about.big": "MUSIC,<br>IMAGE &<br>CULTURE.", "about.p1": "TIKOONZ.TVはEDM、Hip-Hop、K-POP、プロダクション、サウンドデザイン、パフォーマンス、そして音楽を取り巻く文化を扱います。", "about.p2": "アーティスト、レーベル、流通、リリース、ライブ、メディアプロジェクト、グローバルなコラボレーションを映像で記録します。", "about.p3": "TIKOONZ.TVは、放送・アーカイブ・ビジュアル展示空間を融合したデジタル・ミュージックアート・チャンネルです。"}, "zh": {"nav.home": "HOME", "nav.visual": "VISUAL", "nav.shows": "SHOWS", "nav.about": "ABOUT", "home.eyebrow": "TIKOONZ.TV / MUSIC · VISUAL · CULTURE", "home.title": "MUSIC<br>IN MOTION.", "home.lead": "在一个数字音乐艺术频道中呈现TIKOONZ的音乐、视觉、节目与影像档案。", "visual.eyebrow": "MUSIC VIDEOS / VISUAL WORKS", "visual.title": "VISUAL", "visual.lead": "以动态影像画廊的形式呈现ICE UNICORN音乐录像与TIKOONZ视觉作品。", "shows.eyebrow": "SHOWS / PERFORMANCE / ARCHIVE", "shows.title": "SHOWS", "shows.lead": "汇集TIKOONZ.TV的节目、访谈、表演与影像档案。", "about.eyebrow": "TIKOONZ.TV / ABOUT", "about.title": "ABOUT", "about.lead": "音乐，以及音乐背后的产业与文化。", "about.big": "MUSIC,<br>IMAGE &<br>CULTURE.", "about.p1": "TIKOONZ.TV关注EDM、Hip-Hop、K-POP、音乐制作、声音设计、表演以及围绕音乐形成的文化。", "about.p2": "通过动态影像记录艺术家、厂牌、发行、演出、媒体项目与全球合作。", "about.p3": "TIKOONZ.TV是融合播出、档案与视觉展览空间的数字音乐艺术频道。"}};

const LANG_KEY="tikoonz-tv-language";
const LANG_LABEL={ko:"KO",en:"EN",ja:"JA",zh:"中文"};
function setLang(lang){
 if(!I18N[lang]) lang="en";
 localStorage.setItem(LANG_KEY,lang);
 document.documentElement.lang=lang==="zh"?"zh-CN":lang;
 document.querySelectorAll("[data-i18n]").forEach(el=>{
   const key=el.dataset.i18n, value=I18N[lang][key];
   if(value!==undefined) el.innerHTML=value;
 });
 const b=document.querySelector(".langBtn"); if(b)b.textContent=LANG_LABEL[lang]+" ▾";
 document.querySelector(".langMenu")?.classList.remove("open");
}
document.addEventListener("DOMContentLoaded",()=>{
 const menu=document.querySelector(".langMenu"), btn=document.querySelector(".langBtn");
 btn?.addEventListener("click",e=>{e.stopPropagation();menu?.classList.toggle("open")});
 document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));
 document.addEventListener("click",()=>menu?.classList.remove("open"));
 setLang(localStorage.getItem(LANG_KEY)||"ko");
 const p=document.getElementById("player"), f=document.getElementById("frame");
 document.querySelectorAll(".tv[data-id]").forEach(tv=>tv.addEventListener("click",()=>{
   if(!p||!f)return; f.src=`https://www.youtube.com/embed/${tv.dataset.id}?autoplay=1&rel=0`;
   p.classList.add("open");
 }));
 const close=()=>{if(p&&f){p.classList.remove("open");f.src=""}};
 document.querySelector(".close")?.addEventListener("click",close);
 p?.addEventListener("click",e=>{if(e.target===p)close()});
 document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
});
