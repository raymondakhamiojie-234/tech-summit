const fs = require('fs');

function fix(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/const Twitter = \(\) =>/g, "const Twitter = (props: React.SVGProps<SVGSVGElement>) =>");
  content = content.replace(/const Facebook = \(\) =>/g, "const Facebook = (props: React.SVGProps<SVGSVGElement>) =>");
  content = content.replace(/const Instagram = \(\) =>/g, "const Instagram = (props: React.SVGProps<SVGSVGElement>) =>");
  content = content.replace(/const Linkedin = \(\) =>/g, "const Linkedin = (props: React.SVGProps<SVGSVGElement>) =>");
  content = content.replace(/const Youtube = \(\) =>/g, "const Youtube = (props: React.SVGProps<SVGSVGElement>) =>");
  
  content = content.replace(/<svg className='w-5 h-5 fill-current'/g, "<svg className='w-5 h-5 fill-current' {...props}");
  
  // also add import React from 'react' if not present
  if (!content.includes("import React")) {
     content = "import React from 'react';\n" + content;
  }

  // in SpeakerModal, we also used size={18}, which is standard for lucide but not for SVGProps
  // so let's just remove the size prop from SpeakerModal.tsx
  if (file.includes('SpeakerModal.tsx')) {
     content = content.replace(/size=\{18\}/g, "className='w-5 h-5'");
  }

  fs.writeFileSync(file, content);
}

fix('./src/components/Footer.tsx');
fix('./src/components/SpeakerModal.tsx');
