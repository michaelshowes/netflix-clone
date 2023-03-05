import { toCamelCase } from './toCamelCase.js';

// Component.tsx
export function component(name) {
	return `// ${name} Component

import scss from './${toCamelCase(name)}.module.scss';

type ${name}Props = {}

export default function ${name}({}: ${name}Props) {
	return (
		<div className={scss.${toCamelCase(name)}}>
			${name} component content goes here
		</div>
	)
};
`;
}

// component.module.scss
export function scss(name) {
	return `// ${name} Component

.${toCamelCase(name)} {
	
}
`;
}

// index.ts
export function index(name) {
	return `import ${name} from './${name}/${name}';

export {
	${name}
}
`;
}
