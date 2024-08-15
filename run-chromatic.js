require('dotenv').config();
const { execSync } = require('child_process');

const chromaticToken = process.env.CHROMATIC_TOKEN;

if (!chromaticToken) {
    console.error('Error: CHROMATIC_TOKEN is not defined.');
    process.exit(1);
}

try {
    execSync(`npx chromatic --project-token=${chromaticToken}`, { stdio: 'inherit' });
} catch (error) {
    console.error(`Failed to run chromatic: ${error.message}`);
    process.exit(1);
}
