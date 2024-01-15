import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
  },
  plugins: [typescript({ tsconfig: './tsconfig.json' })],
  external: ['chalk', 'commander', 'inquirer', 'figlet', 'child_process'],
};
