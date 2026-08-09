(() => {
  "use strict";
  const library = window.YEAR8_SCIENCE_VIDEO_LIBRARY?.clips || [];
  if (!library.length) return;
  library.forEach((clip) => {
    const section = document.querySelector(`#section-${clip.sectionId.toLowerCase()}`);
    if (!section || section.querySelector(".video-moment")) return;
    const moment = document.createElement("aside");
    moment.className = "video-moment";
    moment.innerHTML = `<div class="video-moment-copy"><p class="eyebrow">WATCH WITH PURPOSE</p><h4>${clip.title}</h4><p><strong>Watch for:</strong> ${clip.focus}</p><a href="https://www.youtube.com/watch?v=${clip.videoId}" target="_blank" rel="noopener noreferrer">Watch directly on YouTube</a></div><button class="video-thumbnail" type="button" aria-label="Play ${clip.title}"><img src="https://i.ytimg.com/vi/${clip.videoId}/hqdefault.jpg" alt="Video thumbnail for ${clip.title}"><span>Play clip</span></button>`;
    moment.querySelector(".video-thumbnail").addEventListener("click", () => {
      const frame = document.createElement("iframe");
      frame.src = `https://www.youtube-nocookie.com/embed/${clip.videoId}?rel=0`;
      frame.title = clip.title;
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      frame.allowFullscreen = true;
      moment.querySelector(".video-thumbnail").replaceWith(frame);
    });
    const figure = section.querySelector("figure");
    (figure || section).after(moment);
  });
})();
