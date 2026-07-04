const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'lib/src');
const assetsDir = path.join(__dirname, 'assets');
const targetRepoDir = path.join(__dirname, '../icons.blackqueens');

const targetDataFile = path.join(targetRepoDir, 'icons_data.js');
const targetAssetsDir = path.join(targetRepoDir, 'assets');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    // Only copy if destination doesn't exist or source is newer
    if (!fs.existsSync(dest) || fs.statSync(src).mtime > fs.statSync(dest).mtime) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
    }
  }
}

function sync() {
  console.log('--- BQIcons Local Sync Started ---');

  if (!fs.existsSync(srcDir)) {
    console.error(`Source src directory not found at: ${srcDir}`);
    return;
  }
  if (!fs.existsSync(targetRepoDir)) {
    console.error(`Target repo directory not found at: ${targetRepoDir}. Make sure icons.blackqueens is a sibling folder of bqicons.`);
    return;
  }

  // 1. Parse Dart files and generate icons_data.js
  const files = fs.readdirSync(srcDir);
  const result = [];

  files.forEach(file => {
    if (path.extname(file) !== '.dart') return;
    if (file === 'bq_icon.dart') return;

    const filePath = path.join(srcDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    const classMatch = content.match(/class\s+(\w+)/);
    if (!classMatch) return;

    const className = classMatch[1];
    const constRegex = /static\s+const\s+(\w+)\s*=\s*["']([^"']+)["']\s*;/g;
    const icons = [];
    let match;

    while ((match = constRegex.exec(content)) !== null) {
      const name = match[1];
      const iconPath = match[2];
      icons.push({ name, path: iconPath });
    }

    if (icons.length > 0) {
      result.push({
        category: className,
        fileName: file,
        icons: icons
      });
    }
  });

  const jsContent = `// Auto-generated icons data file. Do not edit manually.\nconst ICONS_DATA = ${JSON.stringify(result, null, 2)};\n`;
  fs.writeFileSync(targetDataFile, jsContent, 'utf8');
  console.log(`✓ Generated ${result.reduce((acc, cat) => acc + cat.icons.length, 0)} icons into ${targetDataFile}`);

  // 2. Sync assets directory
  if (fs.existsSync(assetsDir)) {
    console.log('Syncing assets folder... (this may take a few seconds)');
    copyRecursiveSync(assetsDir, targetAssetsDir);
    console.log('✓ Assets synced successfully.');
  } else {
    console.warn(`⚠ Warning: Assets directory not found at ${assetsDir}`);
  }

  console.log('--- BQIcons Local Sync Completed Successfully! ---');
}

sync();
