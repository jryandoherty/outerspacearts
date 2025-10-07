// generate-sitemap.js
import SitemapGenerator from 'sitemap-generator';
import { createWriteStream } from 'fs';
import path from 'path';

// URL of your site
const siteUrl = 'https://outerspacearts.xyz';

// Output location
const outputPath = path.join(process.cwd(), 'dist', 'sitemap-new.xml');

// Create generator
const generator = SitemapGenerator(siteUrl, {
  stripQuerystring: true,
  filepath: outputPath,
  lastMod: true,
  changeFreq: 'weekly',
  maxDepth: 0 // crawl entire site
});

// Log errors
generator.on('error', (error) => {
  console.error('Error:', error);
});

// Start crawler
generator.start();

console.log(`Generating sitemap for ${siteUrl}...`);
