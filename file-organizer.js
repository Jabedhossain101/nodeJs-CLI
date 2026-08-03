const fs = require('fs');

const path = require('path');

const sourceDir = path.join(__dirname, 'output', 'messi-files');
const organizedDir = path.join(__dirname, 'output', 'organized');

const categories = {
  image: [ '.jpg', '.jpeg','.png','.gif','.svgweb'.bm
  ],

  document: ['.pdf', '.doc', '.docx', '.txt', '.rtf', '.odt', '.md'],

  video: ['.mp4','.mkv','.avi','.mov','.wmv','.flv','.webm','.mpeg','.3gp',
  ],

  audio: ['.mp3', '.wav', '.aac', '.flac', '.ogg', '.m4a', '.wma'],

  code: [
    '.js',
    '.ts',
    '.jsx',
    '.tsx',
    '.html',
    '.css',
    '.scss',
    '.json',
    '.xml',
    '.py',
    '.java',
    '.c',
    '.cpp',
    '.cs',
    '.php',
    '.go',
    '.rb',
    '.swift',
    '.kt',
    '.sql',
    '.sh',
  ],

  archive: ['.zip', '.rar', '.7z', '.tar', '.gz', '.bz2', '.xz'],

  spreadsheet: ['.xls', '.xlsx', '.csv', '.ods'],

  others: [],
};

const testFiles = [
  'vacation.jpg',
  'report.pdf',
  'movie.mp4',
  'song.mp3',
  'app.js',
  'archive.zip',
  'students.xlsx',
  'notes.txt',
  'unknown.xyz',
];


function initializeDir() {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true })
    
    testFiles.forEach(file => {
      fs.writeFileSync(path.join(sourceDir, file), `content of ${file}`);
    })
  }

  console.log('messi directories file is created');

  if (fs.existsSync(organizedDir)) {
   fs.mkdirSync(organizedDir,{recursive:true})
  }
  Object.keys(categories).forEach(category => {
    const categoryPath = path.join(organizedDir, category)
    
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath);
    }
  })
}

function getCategory(filename) {
  const ext = path.extname(filename).toLowerCase();

  //  image: [ '.jpg', '.jpeg','.png','.gif','.svgweb'.bm
  // ]

  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) {
      return category;
    }
  }

  return 'others';
}

