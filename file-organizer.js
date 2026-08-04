const fs = require('fs');

const path = require('path');

const sourceDir = path.join(__dirname, 'output', 'messi-files');
const organizedDir = path.join(__dirname, 'output', 'organized');

const categories = {
  image: ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp'],

  document: ['.pdf', '.doc', '.docx', '.txt', '.rtf', '.odt', '.md'],

  video: [
    '.mp4',
    '.mkv',
    '.avi',
    '.mov',
    '.wmv',
    '.flv',
    '.webm',
    '.mpeg',
    '.3gp',
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
    fs.mkdirSync(sourceDir, { recursive: true });

    testFiles.forEach(file => {
      fs.writeFileSync(path.join(sourceDir, file), `content of ${file}`);
    });
  }

  console.log('messi directories file is created');

  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });
  }
  Object.keys(categories).forEach(category => {
    const categoryPath = path.join(organizedDir, category);

    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath);
    }
  });
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

// ---------organize file-------------

function organizeFile() {
  console.log('file organizer \n');
  console.log('source:', sourceDir);
  console.log('destination:', organizedDir);

  console.log('\n' + '-'.repeat(50) + '\n');

  // const files = fs.readFileSync(sourceDir)
  const files = fs.readdirSync(sourceDir);

  if (files.length === 0) {
    console.log(' NO file in here');

    return;
  }
  console.log(`found ${files.length} file to organize \n`);

  const stats = {
    total: 0,
    byCategory: {},
  };

  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);

    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      return;
    }
    const category = getCategory(file);

    const destDir = path.join(organizedDir, category);
    const destPath = path.join(destDir, file);

    fs.copyFileSync(sourcePath, destPath);

    stats.total++;

    stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
    console.log(`${file}`);
    console.log(`${category}`);
    console.log(`${stat.size}`);
  });
}
if (!fs.existsSync(sourceDir)) {
  console.log('Source directory not found.');
  console.log('Run: node index.js init');
  return;
}

function showHelp() {
  console.log(`file organizer - usage:
    commands: init - create files
    organize - organize file and categories
    `);
}

const command = process.argv[2];
switch (command) {
  case 'init':
    initializeDir();
    break;
  case 'organize':
    organizeFile();
    break;
  default:
    showHelp();
    break;
}

console.log('\nSummary');
console.log('--------------');
console.log(`Total Files: ${stats.total}`);

for (const category in stats.byCategory) {
  console.log(`${category}: ${stats.byCategory[category]}`);
}