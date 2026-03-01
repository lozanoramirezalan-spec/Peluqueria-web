const items = document.querySelectorAll(".item");
let videoActivo = null;

items.forEach(item => {
    const img = item.querySelector("img");
    const video = item.querySelector("video");

    img.addEventListener("click", () => {

        if (videoActivo && videoActivo !== video) {
            videoActivo.pause();
            videoActivo.currentTime = 0;
            videoActivo.style.display = "none";

            const imgAnterior = videoActivo.parentElement.querySelector("img");
            imgAnterior.style.display = "block";
        }

        img.style.display = "none";
        video.style.display = "block";
        video.play();

        videoActivo = video;
    });

    video.addEventListener("ended", () => {
        video.style.display = "none";
        img.style.display = "block";
        video.currentTime = 0;
        videoActivo = null;
    });
});
