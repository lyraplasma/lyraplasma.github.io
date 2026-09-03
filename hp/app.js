const apps = [
 { id: "github",
    name: "Github", 
     url: "https://github.com/lyraplasma",
   icon: "https://cdn.simpleicons.org/github/FFFFFF"},

  { 
    id: "linkedin",
    name: "Linkedin", 
    url: "https://www.linkedin.com/in/lyra-rivera-41227a42a",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg" },
  
  { 
      id: "twitter",
      name: "Twitter",
      url: "https://twitter.com/lyraplasma",
    icon: "https://cdn.simpleicons.org/x/FFFFFF" },
  
  { 
    id: 'email', 
    name: 'Email', 
    url: 'mailto:lyra.plasma.prog@gmail.com', 
    icon: 'https://cdn.simpleicons.org/gmail/FFFFFF' },

  { 
    id: "spotify", 
    name: "Spotify", 
    url: "https://open.spotify.com/user/31wsyufukxbhalgcnvszt2bzu6sq", 
    icon: "https://cdn.simpleicons.org/spotify/FFFFFF"},
  { 
    id: "codepen", 
    name: "CodePen", 
    url: "https://codepen.io/lyraplasma", 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/codepen.svg"
  },
{ 
  id: 'discord', 
  name: 'Discord', 
  url: "https://discord.gg/cxtsmhswq5",  
  icon: 'https://cdn.simpleicons.org/discord/FFFFFF' 
},
{ 
  id: 'youtube', 
  name: 'YouTube', 
  url: 'https://youtube.com/@SaintLyraOfGNUEmacs', 
  icon: 'https://cdn.simpleicons.org/youtube/FFFFFF' 
},
{ 
  id: 'mastodon', 
  name: 'Mastodon', 
  url: 'https://mastodon.social/@lyraplasma', 
  icon: 'https://cdn.simpleicons.org/mastodon/FFFFFF' 
},
{ 
  id: 'bluesky', 
  name: 'Bluesky', 
  url: 'https://bsky.app/profile/lyraplasma.bsky.social', 
  icon: 'https://cdn.simpleicons.org/bluesky/FFFFFF'  },

{ 
  id: 'reddit', 
  name: 'Reddit', 
  url: 'https://reddit.com/user/lyraplasma', 
  icon: 'https://cdn.simpleicons.org/reddit/FFFFFF' 
},
{ 
  id: 'facebook', 
  name: 'Facebook', 
  url: "https://www.facebook.com/profile.php?id=61592005124352", 
  icon: 'https://cdn.simpleicons.org/facebook/FFFFFF' 
},
{ 
  id: 'devto', 
  name: 'DEV Community',  
  url: 'https://dev.to/lyraplasma', 
  icon: 'https://cdn.simpleicons.org/devdotto/FFFFFF' },
{ id: 'wakatime', 
  name: 'WakaTime', 
    url: "https://wakatime.com/@387f8535-dd59-4747-aad2-6f66cfc2358f",
  icon: 'https://cdn.simpleicons.org/wakatime/FFFFFF' },  ];

const WelcomeOverlay = () => {
  const [visible, setVisible] = React.useState(true);
  const [fading, setFading] = React.useState(false);
  const [messageIndex, setMessageIndex] = React.useState(0);
  const messages = ["B o o t i n g . . .", "H e l l o ? ?", "W e l c o m e >~<"];

  React.useEffect(() => {
    if (messageIndex < messages.length - 1) {
      const timer = setTimeout(() => {
        setMessageIndex(i => i + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setFading(true);
      }, 1200);
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 2200);
      return () => {
        clearTimeout(timer);
        clearTimeout(removeTimer);
      };
    }
  }, [messageIndex, messages.length]);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black transition-opacity duration-1000 ${fading ? 'opacity-0' : 'opacity-100'}`}>
      <p className="text-xl font-bold text-white animate-pulse tracking-wider">
        {messages[messageIndex]}
      </p>
    </div>
  );
};

const Wallpaper = () => {
  return (
    <img
      src="https://server.wallpaperalchemy.com/storage/wallpapers/92/windows-xp-wallpaper-bliss-4k-wallpaper.jpeg" className="absolute inset-0 bg-cover bg-center h-full w-full" />
  );  
};

const DesktopApps = () => {
  return (
    <div className="absolute top-4 left-4 flex flex-wrap gap-6 z-10 p-2">
    {apps.map((app) => (
    <a
    key={app.id}
    href={app.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center w-20 group cursor-pointer"
    >
      <div className="w-14 h-14 rounded bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 group-hover:shadow-lg transition-all border border-white/0 group-hover:border-white/30 active:animate-ping">
      <img src={app.icon} alt={app.name} className="w-8 h-8 hover:animate-bounce" />
    </div>
      <span className="text-xs text-white mt-1 text-center drop-shadow-md bg-black/40 px-2 py-0.5 rounded group-hover:bg-black/60 transition hover:animate-pulse active:animate-ping">
    {app.name}
    </span>
    </a>
    ))}
    </div>	
  );  
};

const Taskbar = () => {
    return (
		<div className="flex items-center gap-0.5 ml-2 h-full">
	  {apps.slice(0, 4).map((app) => (
	    <a
	      key={app.id}
	      href={app.url}
	      target="_blank"
	      rel="noopener noreferrer"
	      className="h-10 w-10 flex items-center justify-center hover:bg-white/10 rounded-sm transition border-b-2 border-transparent hover:border-sky-400"
	    >
	      <img src={app.icon} alt={app.name} className="w-5 h-5" />
	    </a>
	  ))}
	</div>
    );
};

const ClockWidget = () => {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="ml-auto flex items-center gap-2 text-white/90 text-xs px-2 h-full hover:animate-bounce active:animate-ping">
      <div className="hover:bg-white/10 px-2 py-1 rounded-sm transition">
      {time.toLocaleDateString([], { month: 'short', day: 'numeric' })}
      </div>
      <div className="hover:bg-white/10 px-2 py-1 rounded-sm transition font-medium">
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
}

const MainWindow = () => {
return <>
	 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] bg-white/10 backdrop-blur-md rounded-lg border border-white/30 shadow-2xl overflow-hidden z-10">
  <div className="bg-gradient-to-r from-[#1c4b7a] to-[#3a7bb5] px-3 py-2 flex justify-between items-center active:animate-bounce">
<span className="text-white text-sm font-bold tracking-wide hover:animate-bounce">@lyraplasma | Saintess of GNU Emacs</span>

<div className="flex gap-2">
  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-800 rounded-sm shadow-inner hover:animate-bounce active:animate-spin"></div>
  <div className="w-3 h-3 bg-green-500 rounded-sm shadow-inner hover:animate-spin active:animate-ping"></div>
  <div className="w-3 h-3 bg-red-500 rounded-sm shadow-inner active:animate-ping"></div>
</div>
</div>
	   <div className="p-8 flex flex-col items-center active:animate-bounce">
<img
src="https://github.com/lyraplasma.png"
  className="size-40 rounded-full border-8 border-sky-400/60 border-dashed animate-spin [animation-duration:30s] object-cover shadow-2xl motion-reduce:animate-none hover:animate-bounce"
alt="Profile"
/>

<h2 className="text-white text-2xl font-bold mt-5 drop-shadow-lg hover:animate-spin">Princess Lyra Rivera</h2>
<p className="text-white/90 text-sm bg-black/30 px-4 py-1 rounded-full backdrop-blur-sm mt-1 hover:animate-ping">
I write programs!!~
</p>
<p className="text-white/50 text-xs mt-3 italic hover:animate-bounce">I am the GNU Emacs lady you've saw on the internet :))
</p>
</div>
</div>
</>
}

const NewsWindow = () => {
return <>
<div className="absolute top-1/2 right-1/4 translate-x-1/4 w-[200px] bg-white/10 backdrop-blur-md rounded-lg border border-dashed shadow-2xl overflow-hidden z-10">
<div className="bg-gradient-to-l from-rose-200 to-rose-500 px-3 py-2 flex justify-between items-center">
<span className="text-white text-sm font-bold tracking-wide animate-pulse">Newwwwws</span>
<div className="flex gap-2">
<svg className="w-4 h-4 hover:animate-bounce rounded-sm transition cursor-pointer" viewBox="0 0 10 10">
<rect x="1" y="4.5" width="8" height="1" fill="#667" />
</svg>
<svg className="w-4 h-4 hover:animate-pulse rounded-sm transition cursor-pointer" viewBox="0 0 10 10">
<rect x="1.5" y="1.5" width="7" height="7" fill="none" stroke="#667" strokeWidth="1" />
</svg>
<svg className="w-4 h-4 hover:bg-red-500 hover:animate-spin rounded-sm transition cursor-pointer" viewBox="0 0 10 10">
<line x1="2" y1="2" x2="8" y2="8" stroke="#667" strokeWidth="1.5" />
<line x1="8" y1="2" x2="2" y2="8" stroke="#667" strokeWidth="1.5" />
</svg>			   
</div>
</div>
<div className="p-4">
<ol>
  <li>
    <a className="font-bold text-zinc-800" href="https://lyraplasma.github.io/lyra-was-forced-to-write-markdowns">BLOGS here~~</a>
  </li>
</ol>

</div>
</div>
</>	       
}

const StartButton = () => {
    return (
	<div onClick={() => alert("heloooo have a nice day!!")} className="flex items-center gap-1 bg-[#2a6b9c] hover:bg-[#3a8fcb] px-3 py-1 rounded-sm cursor-pointer border border-[#4c7da3] transition">
	  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
	    <rect x="0" y="0" width="7" height="7" fill="#00a4ef" />
	    <rect x="10" y="0" width="7" height="7" fill="#f25022" />
	    <rect x="0" y="9" width="7" height="7" fill="#7fba00" />
	    <rect x="9" y="9" width="7" height="7" fill="#ffb900" />
	  </svg>
	    <button onClick={() => alert("im too tired to add new stuff rn :C")} className="text-white text-sm font-bold">GNU/W!ndows</button>
	</div>	
    );
}

const BottomBar = () => {
    return (
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#0a1f33] border-t-2 border-[#4c7da3] flex items-center px-2 z-20 shadow-lg">
	<StartButton />
	<Taskbar />
	<ClockWidget />
      </div>	
    );
}

const App = () => {
return (
<div className="min-h-screen w-screen relative font-sans overflow-hidden select-none">
<WelcomeOverlay />
<Wallpaper />
<DesktopApps />
<MainWindow />
<NewsWindow />
<BottomBar />
</div>
);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
//#->todo: maybe separate the components? browser wont allow it :c
// ^^^ rm this to the next commit
