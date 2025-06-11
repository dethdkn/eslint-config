import { defineBuildConfig } from 'obuild/config'

export default defineBuildConfig({
  entries: [{ type: 'bundle', input: ['./src/main.ts'], minify: true }],
})
