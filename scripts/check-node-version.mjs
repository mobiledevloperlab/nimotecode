const minimum = [22, 23, 4]
const current = process.versions.node.split('.').map(Number)
const supported = current[0] > minimum[0] ||
  (current[0] === minimum[0] && (current[1] > minimum[1] ||
    (current[1] === minimum[1] && current[2] >= minimum[2])))

if (!supported) {
  console.error(`Node.js ${process.version} is too old for this website and its Astro blog.\nRequired: >=22.23.4. This repository uses Node 24, matching deployment.\nFrom the repository root, run:\n  nvm install\n  nvm use\nThen retry your npm command.`)
  process.exit(1)
}
