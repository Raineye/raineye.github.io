const marked = require('marked');
const fs = require('fs');
const path = require('path');
const config = require('./config');

const markdownStr = fs.readFileSync(config.markdownPath, 'utf-8');
const targetHtmlStr = fs.readFileSync(config.targetHtmlPath, 'utf-8');
const renderHtmlStr = targetHtmlStr.replace(
    /<!-- MARKDOWN HTML START -->([\s\S]*)<!-- MARKDOWN HTML START -->/,
    `<!-- MARKDOWN HTML START -->${marked(markdownStr)}<!-- MARKDOWN HTML END -->`
);

fs.writeFileSync(config.targetHtmlPath, renderHtmlStr);
