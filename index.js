const inquirer = require('inquirer');
const generateSite = require('./src/profile-template')
const { writeFile, copyFile } = require('./utils/generate-site')