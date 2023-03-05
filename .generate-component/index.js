import { toCamelCase } from './toCamelCase.js';
import chalk from 'chalk';

import * as fs from 'fs';
import { component, scss, index } from './component_templates.js';

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

if (!fs.existsSync('./src/components/')) {
	fs.mkdirSync('./src/components/', writeFileErrorHandler);
	fs.writeFile('./src/components/index.ts', '', writeFileErrorHandler);
}

if (!fs.existsSync('./src/components/index.ts')) {
	fs.writeFile('./src/components/index.ts', '', writeFileErrorHandler);
}

const dir = `./src/components/${name}/`;

// throw an error if the file already exists
if (fs.existsSync(dir))
	throw new Error('A component with that name already exists.');

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
	if (err) throw err;
}

// component.tsx
fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
// component.module.scss
fs.writeFile(
	`${dir}/${toCamelCase(name)}.module.scss`,
	scss(name),
	writeFileErrorHandler
);

// insert new component into 'components/index.ts file
fs.readFile('./src/components/index.ts', 'utf8', function (err, data) {
	if (err) {
		throw err;
	}

	// grab all components and combine them with new component
	const currentComponents = data.match(/(?<=import )(.*?)(?= from)/g);

	if (!currentComponents) {
		fs.writeFile(
			'./src/components/index.ts',
			index(name),
			writeFileErrorHandler
		);
	} else {
		const newComponents = [name, ...currentComponents].sort();
		// create the import statement
		const importStatements = newComponents
			.map(
				(importName) =>
					`import ${importName} from './${importName}/${importName}';\n`
			)
			.join('');

		// create the export statement
		const exportStatements = `export {\n${newComponents
			.map((component) => `  ${component},\n`)
			.join('')}};\n`;

		const fileContent = `${importStatements}\n${exportStatements}`;

		fs.writeFile(
			`./src/components/index.ts`,
			fileContent,
			writeFileErrorHandler
		);
	}

	console.log(
		`${chalk.yellow(`${name}.tsx`)} was created in src/components/Accordion`
	);
	console.log(
		`${chalk.yellow(
			`${toCamelCase(name)}.module.scss`
		)} was created in src/components/Accordion`
	);
});
