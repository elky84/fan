const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'public', 'posts');

function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const reversedFileNames = fileNames.reverse();
  const postsData = reversedFileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    if (data.date) {
      const date = new Date(data.date);
      const formattedDate = date.toISOString().split('T')[0];
      data.date = formattedDate;
    }
    
    return {
      ...data,
      slug: fileName.replace(/\.md$/, '')
    };
  });
  return postsData;
}

const postsData = getAllPosts();
fs.writeFileSync('./public/postsData.json', JSON.stringify(postsData), 'utf8');
