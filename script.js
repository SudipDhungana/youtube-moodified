// Example video data
const videos = [
  { title: "Escanor「AMV」For The Glory ", url: "https://www.youtube.com/embed/hs7cH3Y6EoQ" },
  { title: "Kalo Keshma Relimai - Dinesh Dhakal (Lyrics)", url: "https://www.youtube.com/embed/UVvXK1rq3ZU" },
  { title: "Royalty - AMV [ Anime Mix ]", url: "https://www.youtube.com/embed/3dYBziE9-cU" },
  { title: "Naruto & Sasuke vs Momoshiki (AMV) - Fearless", url: "https://www.youtube.com/embed/sE2pYubPT8k" },
  { title: "CJ - Whoopty (Robert Cristian & ERS Remix) | Shang Chi", url: "https://www.youtube.com/embed/hMvMYgPEhsw" },
  { title: "Balen Vs Litl Grizl - Raw Barz (RAP BATTLE)", url: "https://www.youtube.com/embed/zek-Cgr8Mg4" },
  { title: "5:55 : Maya (High Sessions)", url: "https://www.youtube.com/embed/mjadHUW2yMY" },
  { title: "Stephen Sanchez, Em Beihold - Until I Found You", url: "https://www.youtube.com/embed/lU-csIO1x0E" },
  { title: "Shiv Tandav Stotram X Aarambh Hai Prachand (Mashup)", url: "https://www.youtube.com/embed/V_EgCJgyXiM" },
  { title: "David Guetta - Hey Mama (ERS REMIX) | Transformers", url: "https://www.youtube.com/embed/rs3bD2ZmJGo" },
  { title: "Intu Mintu London By Dinesh DNX", url: "https://www.youtube.com/embed/f89KX9ZBypI" },
  { title: "The Escapees「 AMV 」Welcome To The War - 7kingZ | Baki", url: "https://www.youtube.com/embed/7GM6Lmmspnw" },
  { title: "Hrital maya", url: "https://www.youtube.com/embed/KEvXoPFi28k" },
  { title: "Black Clover「AMV」ENEMY (Imagine Dragons)", url: "https://www.youtube.com/embed/r9l1WC312_k" },
  { title: "Bye Bye Bye Opening Scene | DEADPOOL & WOLVERINE (2024) Movie CLIP", url: "https://www.youtube.com/embed/VHAK-gU9gi0" },
  { title: "Bjorn Goes Into Battle One Last Time | Vikings | Prime Video", url: "https://www.youtube.com/embed/ANCAyz_U_oo" },
  { title: "Captain Jack Sparrow", url: "https://www.youtube.com/embed/vdBEuLG21UE" },
  { title: "Quicksilver Saves Everyone - Sweet Dreams - X-Men", url: "https://www.youtube.com/embed/ZnZqB5Z75zI" },
  { title: "BLUESSS - LA LA LA LA (REMIX) FT. LIL BUDDHA & VTEN", url: "https://www.youtube.com/embed/aO73ukKokjI" },
  { title: "One Direction - Night Changes", url: "https://www.youtube.com/embed/syFZfO_wfMQ" },
  { title: "Benson Boone - Beautiful Things (Official Music Video)", url: "https://www.youtube.com/embed/Oa_RSwwpPaA" },
  { title: "Keane - Somewhere Only We Know (Official Music Video)", url: "https://www.youtube.com/embed/Oextk-If8HQ" },
  { title: "Owl City - Fireflies (Official Music Video)", url: "https://www.youtube.com/embed/psuRGfAaju4" },
  { title: "Simple Plan - Untitled (Official Video)", url: "https://www.youtube.com/embed/ZQ7oqmikZDQ" },
  { title: "BATASH~ Shashwot Khadka (Prod. by Sanjv) (Official Lyric Video)", url: "https://www.youtube.com/embed/AtoZw7o2kRo" },
  { title: "Thomas Shelby | Gangsta's Paradise", url: "https://www.youtube.com/embed/FjuqZklHvT8" },
  { title: "Launa K Garne | Neetesh Jung Kunwar", url: "https://www.youtube.com/embed/9IbQppLKdrg" },
  { title: "One Piece - Do You Remember?", url: "https://www.youtube.com/embed/yQJJqM1Wk6E" },
  { title: "I Told You So (Madara Uchiha Motivational Speech)", url: "https://www.youtube.com/embed/pjdzhIFU8_Y" },
  { title: "「AMV」- Natural ✨", url: "https://www.youtube.com/embed/Sv0nfdkgvZM" },
  { title: "Kyojuro Rengoku | Set Your Heart Ablaze", url: "https://www.youtube.com/embed/Dj2PCsCiznQ" },
  { title: "Demon Slayer Infinity Castle Arc Movie Trailer: Kokushibo vs Pillars ", url: "https://www.youtube.com/embed/ub35Ibew1-o" },
  { title: "Ancient One Powers | Doctor Strange and Avengers", url: "https://www.youtube.com/embed/3Qf3UgVPxiA" },
  { title: "The story of Roronoa Zoro (One Piece)「AMV」- Royalty", url: "https://www.youtube.com/embed/Oppxp_oPg6k" },
  { title: "Nawaj Ansari & Jhapali$H - JUNGLE KO BHOOT", url: "https://www.youtube.com/embed/TIyjeluwKsk" },
];

// Populate video list dynamically
const videoList = document.getElementById('video-list');
const searchBar = document.getElementById('search-bar');

function populateVideos() {
  videoList.innerHTML = '';
  videos.forEach((video, index) => {
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';
    videoItem.innerHTML = `
      <img src="https://img.youtube.com/vi/${video.url.split('/').pop()}/0.jpg" alt="${video.title}">
      <p>${video.title}</p>
    `;
    videoItem.onclick = () => openVideo(index);
    videoList.appendChild(videoItem);
  });
}
function filterVideos() {
  const searchTerm = searchBar.value.trim().toLowerCase();
  videoList.innerHTML = ''; // Clear the video list

  // Filter videos based on the search term
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm)
  );

  // Populate the filtered video list
  if (filteredVideos.length > 0) {
    filteredVideos.forEach((video, index) => {
      const videoItem = document.createElement('div');
      videoItem.className = 'video-item';
      videoItem.innerHTML = `
        <img src="https://img.youtube.com/vi/${video.url.split('/').pop()}/0.jpg" alt="${video.title}">
        <p> ${video.title} </p>
      `;
      videoItem.onclick = () => openVideo(index);
      videoList.appendChild(videoItem);
    });
  } else {
    // Show a message when no videos are found
    videoList.innerHTML = '<p style="color: white;">No videos found.</p>';
  }
}

// media Controls
function playVideo() {
  const video = document.getElementById('tv-video');
  video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}

function pauseVideo() {
  const video = document.getElementById('tv-video');
  video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}

function muteVideo() {
  const video = document.getElementById('tv-video');
  video.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
}

function unmuteVideo() {
  const video = document.getElementById('tv-video');
  video.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
}


// Initialize video list
filterVideos();
// Open video in second screen
function openVideo(index) {
  const screenOne = document.getElementById('screen-one');
  const screenTwo = document.getElementById('screen-two');
  const tvVideo = document.getElementById('tv-video');
  const videoTitle = document.getElementById('video-title');

  screenOne.style.display = 'none';
  screenTwo.style.display = 'flex';
  tvVideo.src = `${videos[index].url}?autoplay=1&controls=0&modestbranding=1&rel=0&fs=0&enablejsapi=1`;
  videoTitle.textContent = videos[index].title;
}


// Play custom video by entering URL
function playCustomVideo(event) {
  const urlInput = document.getElementById('url-input').value.trim();
  const tvVideo = document.getElementById('tv-video');
  const videoTitle = document.getElementById('video-title');

  if (event.key === 'Enter' || event.type === 'input') {
    try {
      const url = new URL(urlInput);
      const videoId =
        url.hostname === 'youtu.be'
          ? url.pathname.slice(1)
          : new URLSearchParams(url.search).get('v');

      if (videoId) {
        // Update iframe src with parameters to remove default features
        tvVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&fs=0&enablejsapi=1`;
        document.getElementById('screen-two').style.display = 'flex';
        document.getElementById('screen-one').style.display = 'none';

        // Set a placeholder title or fetch it via YouTube API
        videoTitle.textContent = "Playing custom video...";
      } else {
        alert('Invalid YouTube URL. Please ensure it is a valid video link.');
      }
    } catch {
      alert('Invalid URL. Please ensure it is a valid YouTube link.');
    }
  }
}


// Add event listeners to handle URL input change
document.getElementById('url-input').addEventListener('input', playCustomVideo);
document.getElementById('url-input').addEventListener('keydown', playCustomVideo);



const sidebar = document.getElementById('sidebar');
const container = document.querySelector('.container');

// Create overlay element for mobile view
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

// Toggle Sidebar and Overlay for Mobile Screens
function toggleSidebar() {
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  } else {
    sidebar.classList.toggle('collapsed');
    container.classList.toggle('collapsed');
  }
}

// Hide Sidebar and Overlay when overlay is clicked
overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});


// Close sidebar when clicking outside
window.addEventListener('click', (event) => {
  if (!event.target.closest('#sidebar') && !event.target.closest('.menu-btn')) {
    document.getElementById('sidebar').style.left = '0px';
  }
});

// Populate videos on load
populateVideos();
function playCustomVideo(event) {
  const urlInput = document.getElementById('url-input').value.trim();
  const tvVideo = document.getElementById('tv-video');
  if (event.key === 'Enter' || event.type === 'input') {
    try {
      const url = new URL(urlInput);
      const videoId =
        url.hostname === 'youtu.be'
          ? url.pathname.slice(1)
          : new URLSearchParams(url.search).get('v');

      if (videoId) {
        tvVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&enablejsapi=1&modestbranding=1`;
        document.getElementById('screen-two').style.display = 'flex';
        document.getElementById('screen-one').style.display = 'none';
      } else {
        alert('Invalid YouTube URL. Please ensure it is a valid video link.');
      }
    } catch {
      alert('Invalid URL. Please ensure it is a valid YouTube link.');
    }
  }
}
function playVideo() {
  const video = document.getElementById('tv-video');
  video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}

function pauseVideo() {
  const video = document.getElementById('tv-video');
  video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}

function muteVideo() {
  const video = document.getElementById('tv-video');
  video.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
}

function unmuteVideo() {
  const video = document.getElementById('tv-video');
  video.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
}
