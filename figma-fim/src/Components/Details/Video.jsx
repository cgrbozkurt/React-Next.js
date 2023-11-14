import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div className='player-wrapper relative mt-5 w-[full] h-[350px]  mx-[100px]'>
      <ReactPlayer
        url='https://youtu.be/8bWzJ24kLUU'
        className='react-player absolute top-0 left-0 w-10 h-52'
        playing
        controls
        width='100%'
        height='100%'
      />
    </div>
  );
};

export default VideoPlayer;
