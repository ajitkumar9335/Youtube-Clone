function VideoCard() {
  return (
    <div className="cursor-pointer">
      {/* Thumbnail */}
      <img
        src="/uploads/banner.png"
        alt="Video Thumbnail"
        className="w-full h-48 rounded-xl object-cover"
      />

      {/* Video Info */}
      <div className="flex gap-3 mt-3">
        {/* Channel DP (circle) */}
        <div className="w-10 h-10 bg-gray-600 rounded-full"></div>

        <div>
          <h3 className="text-white font-semibold leading-tight">
            Video Title Here
          </h3>
          <p className="text-gray-400 text-sm">Channel Name</p>
          <p className="text-gray-400 text-sm">1M views · 1 day ago</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
