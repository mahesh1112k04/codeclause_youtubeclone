// Video data
var videos = [
    {
        title: "Video 1",
        description: "Description of Video 1",
        thumbnail: "https://example.com/thumbnail1.jpg",
        url: "https://example.com/video1.mp4"
    },
    {
        title: "Video 2",
        description: "Description of Video 2",
        thumbnail: "https://example.com/thumbnail2.jpg",
        url: "https://example.com/video2.mp4"
    },
    {
        title: "Video 3",
        description: "Description of Video 3",
        thumbnail: "https://example.com/thumbnail3.jpg",
        url: "https://example.com/video3.mp4"
    }
];

// Populate video gallery
var videoGallery = document.getElementById("videoGallery");

videos.forEach(function(video) {
    var videoElement = document.createElement("div");
    videoElement.className = "video";

    var thumbnailElement = document.createElement("img");
    thumbnailElement.src = video.thumbnail;
    videoElement.appendChild(thumbnailElement);

    var videoDetailsElement = document.createElement("div");
    videoDetailsElement.className = "video-details";

    var videoTitleElement = document.createElement("div");
    videoTitleElement.className = "video-title";
    videoTitleElement.textContent = video.title;
    videoDetailsElement.appendChild(videoTitleElement);

    var videoDescriptionElement = document.createElement("div");
    videoDescriptionElement.className = "video-description";
    videoDescriptionElement.textContent = video.description;
    videoDetailsElement.appendChild(videoDescriptionElement);

    var videoLinkElement = document.createElement("a");
    videoLinkElement.href = video.url;
    videoLinkElement.textContent = "Watch Video";
    videoElement.appendChild(videoLinkElement);

    videoDetailsElement.appendChild(videoLinkElement);

    videoElement.appendChild(videoDetailsElement);

    videoGallery.appendChild(videoElement);
});
