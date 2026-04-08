const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');

const input = 'public/videos/bruno/IMG_6020.MOV';
const output = 'public/videos/bruno/IMG_6020.mp4';

console.log(`Compressing ${input} to ${output}...`);
try {
  execSync(`"${ffmpeg}" -i "${input}" -vcodec libx264 -crf 28 "${output}"`, { stdio: 'inherit' });
  console.log('Success!');
} catch (error) {
  console.error('Failed to compress video:', error);
  process.exit(1);
}
