const fs = require('fs');
const path = require('path');

const files = [
  'app/wizard/page.tsx',
  'app/results/page.tsx',
  'components/StepIndicator.tsx'
];

const replacements = [
  // backgrounds
  { regex: /background:\s*'transparent'/g, replace: "background: '#F5EFE0'" },
  { regex: /background:\s*'#7c3aed'/g, replace: "background: '#5C4A2A'" },
  { regex: /backgroundColor:\s*'#7c3aed'/g, replace: "backgroundColor: '#5C4A2A'" },
  { regex: /background:\s*'(.*?)#7c3aed'/g, replace: "background: '$1#5C4A2A'" }, 
  { regex: /backgroundColor:\s*'(.*?)#7c3aed'/g, replace: "backgroundColor: '$1#5C4A2A'" },
  
  // texts
  { regex: /color:\s*'#FFFFFF'/g, replace: "color: '#1A1208'" },
  { regex: /color:\s*'rgba\(255,255,255,0\.6\)'/g, replace: "color: '#6B5B3A'" },
  { regex: /color:\s*'rgba\(255,255,255,0\.5\)'/g, replace: "color: '#8B7355'" },
  { regex: /color:\s*'rgba\(255,255,255,0\.45\)'/g, replace: "color: '#8B7355'" },
  { regex: /color:\s*'rgba\(255,255,255,0\.3\)'/g, replace: "color: 'rgba(92,74,42,0.5)'" },
  { regex: /color:\s*'#fff'/gi, replace: "color: '#F5EFE0'" },
  
  // borders & rgba backgrounds
  { regex: /rgba\(255,255,255,0\.2\)/g, replace: "rgba(92,74,42,0.2)" },
  { regex: /rgba\(255,255,255,0\.18\)/g, replace: "rgba(92,74,42,0.15)" },
  { regex: /rgba\(255,255,255,0\.15\)/g, replace: "rgba(92,74,42,0.1)" },
  { regex: /rgba\(255,255,255,0\.1\)/g, replace: "rgba(92,74,42,0.08)" },
  { regex: /rgba\(255,255,255,0\.08\)/g, replace: "rgba(255,251,242,1)" }, // #FFFBF2
  { regex: /rgba\(255,255,255,0\.05\)/g, replace: "rgba(92,74,42,0.05)" },
  { regex: /rgba\(255,255,255,0\.04\)/g, replace: "rgba(92,74,42,0.04)" },
  
  // dark hexes used
  { regex: /#1E293B/g, replace: "#1A1208" },
  { regex: /#94A3B8/g, replace: "#8B7355" },
  
  // primary teal color
  { regex: /#7c3aed/gi, replace: "#5C4A2A" },
  { regex: /rgba\(124,58,237,0\.18\)/g, replace: "rgba(92,74,42,0.1)" },
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return console.log('not found: ' + filePath);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  replacements.forEach(({regex, replace}) => {
    content = content.replace(regex, replace);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + file);
  } else {
    console.log('No changes in ' + file);
  }
});
