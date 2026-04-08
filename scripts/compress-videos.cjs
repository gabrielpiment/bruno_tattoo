const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoDir = 'public/videos/bruno';
const files = fs.readdirSync(videoDir);
const movFiles = files.filter(f => f.toLowerCase().endsWith('.mov'));

console.log(`Found ${movFiles.length} .MOV files in ${videoDir}`);

movFiles.forEach((file, index) => {
  const name = path.parse(file).name;
  const input = path.join(videoDir, file);
  const output = path.join(videoDir, `${name}.mp4`);

  if (fs.existsSync(output)) {
    console.log(`[${index + 1}/${movFiles.length}] Skipping ${file} (MP4 already exists)`);
    return;
  }

  console.log(`[${index + 1}/${movFiles.length}] Compressing ${file}...`);
  try {
    // -vcodec libx264: consistent codec for web
    // -crf 28: good balance of size/quality (lower is better quality)
    // -preset faster: good speed/compression ratio
    // -y: overwrite output if exists (though we check manually)
    execSync(`"${ffmpeg}" -i "${input}" -vcodec libx264 -crf 28 -preset faster -movflags +faststart -y "${output}"`, { stdio: 'inherit' });
    console.log(`[${index + 1}/${movFiles.length}] Successfully created ${name}.mp4`);
  } catch (error) {
    console.error(`[${index + 1}/${movFiles.length}] Failed to compress ${file}:`, error.message);
  }
});

console.log('All done!');
